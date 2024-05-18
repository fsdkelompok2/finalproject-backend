const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { prisma } = require("../models/prisma");
const { transporter, generateCode } = require("../lib/nodemailer");

const users = async (req, res) => {
  const token = req.headers.authorization;

  const session = jwt.verify(token, process.env.JWT_SECRET);

  const customer = await prisma.customer.findUnique({
    where: {
      customer_id: session.userId,
    },
  });

  if (!customer) {
    return res.status(404).send({
      message: "Send code failed, email fields cannot be empty.",
    });
  }

  return res.status(200).send({
    message: "Get user with id success",
    data: customer,
  });
};

const sendVerificationCode = async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).send({
      message: "Send code failed, email fields cannot be empty.",
    });
  }

  const isEmailUsed = await prisma.customer.findUnique({
    where: { email },
  });

  if (isEmailUsed) {
    return res.status(409).send({
      message:
        "Email is already used, please use different email or login with this email.",
    });
  }

  const code = generateCode();
  const mailDetails = {
    from: "madeline.haley40@ethereal.email",
    to: email,
    headers: "Email Verification Code",
    subject: "Email verification code to create Nike Clone Account",
    html: `
      <div>
          <h1 style="font-size:3rem;line-height:1;font-weight:800;">Nike Clone</h1>
          <h2 style="font-size:1rem;line-height:1;font-weight:500;">Your Nike Member Profile Code</h2>
          <p>Here's the one-time verification code you requested</p>
          <div style="font-size:3rem;line-height:1;font-weight:500;padding:1rem;background-color:#000000;color:#ffffff;">${code}</div>
          <p><b>This code expires after 15 minutes</b></p>
          <p>If you already received this code or don't need it anymore, ignore this email.</p>
      </div>
    `,
  };

  transporter.sendMail(mailDetails, async function (err, data) {
    if (err) {
      console.log("Error Occurs");
      return res.status(401).send({
        message: "Send verification code failed, email was rejected",
      });
    } else {
      const storeCode = await prisma.verification_Code.create({
        data: {
          value: code,
          email,
        },
      });

      if (!storeCode) {
        console.error("Store verification code to database failed.");
        return res.status(500).json({
          message: `Someting error on the Server: Please try again later.`,
        });
      }

      return res.status(200).json({
        message: `Send verification code success, check inbox of ${email}`,
        code,
      });
    }
  });
};

const updateUser = async (req, res) => {
  const data = req.body;

  // Check is email already used
  if (data.email) {
    const isEmailUsed = await prisma.customer.findUnique({
      where: { email: data.email },
    });

    if (isEmailUsed)
      return res.status(409).send({
        message:
          "Email is already used, please use different email or login with this email.",
      });
  }

  // Update User data on database
  let updateUser;

  if (data.password) {
    // Hash password
    const hashPassword = bcrypt.hashSync(data.password, 8);

    updateUser = await prisma.customer.update({
      where: { customer_id: data.customer_id },
      data: {
        ...data,
        password: hashPassword,
      },
    });
  } else
    updateUser = await prisma.customer.update({
      where: { customer_id: data.customer_id },
      data,
    });

  if (!updateUser)
    return res.status(500).json({
      message: `Update user with id ${updateUser.customer_id} failed. Try check required fields or try again later.`,
      data: updateUser,
    });

  return res.status(200).json({
    message: `Update user with id ${updateUser.customer_id} success`,
    data: updateUser,
  });
};

const register = async (req, res) => {
  const { code, password, first_name, last_name, shopping_preference, birth } =
    req.body;

  // Verify Code
  const verification = await prisma.verification_Code.findUnique({
    where: { value: Number(code) },
  });

  if (!verification) {
    return res.status(400).send({
      message: "Code invalid, please check your email to get verification code",
    });
  }

  // Register Customer
  const email = verification.email;
  const hashPassword = bcrypt.hashSync(password, 8);

  const customer = await prisma.customer.create({
    data: {
      email,
      password: hashPassword,
      first_name,
      last_name,
      shopping_preference,
      birth,
    },
  });

  if (!customer) {
    return res.status(400).send({
      message: "Register failed, any fields cannot be empty.",
    });
  }

  // Sign JWT TOKEN
  const payload = { userId: customer.customer_id };
  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: "30 days",
  });

  // Delete Used Verification Code
  const deleteCode = await prisma.verification_Code.delete({
    where: {
      value: verification.value,
    },
  });

  if (!deleteCode) {
    return res.status(500).send({
      message: "Something Error on the server, please try again later.",
    });
  }

  return res.cookie("session", token).status(200).json({
    message: "Register success",
    data: {
      token,
      customer,
    },
  });
};

const login = async (req, res) => {
  const { email, password } = req.body;

  const customer = await prisma.customer.findUnique({
    where: { email },
  });

  if (!customer) {
    return res.status(401).send({
      message:
        "Email invalid, please enter valid email or sign up with this email firts.",
    });
  }

  const isPasswordValid = bcrypt.compareSync(password, customer.password);

  if (!isPasswordValid) {
    return res.status(401).send({
      message: "Password invalid, please enter valid password",
    });
  }

  const payload = { userId: customer.customer_id };
  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: "30 days",
  });

  return res.cookie("session", token).status(200).json({
    message: "Login Success",
    data: {
      token,
    },
  });
};

const logout = async (req, res) => {
  try {
    await res.clearCookie("session");

    return res.status(200).json({
      message: "logout Success",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "logout Failed, try again later.",
    });
  }
};

module.exports = {
  login,
  logout,
  register,
  updateUser,
  users,
  sendVerificationCode,
};
