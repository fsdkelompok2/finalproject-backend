const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  auth: {
    user: "zaria74@ethereal.email",
    pass: "eN15kxaF2xufsbr53Z",
  },
});

const generateCode = () => {
  const randomNumber =
    Math.floor(Math.random() * (99999999 - 10000000 + 1)) + 10000000;
  return randomNumber;
};

module.exports = { transporter, generateCode };
