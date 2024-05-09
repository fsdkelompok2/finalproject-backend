const jwt = require("jsonwebtoken");

const verifySession = async (req, res, next) => {
  try {
    const session = req.headers.authorization;

    if (!session) {
      return res.status(403).send({
        message: "No token provided",
      });
    }

    const checkSessionToken = jwt.verify(session, process.env.JWT_SECRET);

    if (!checkSessionToken) {
      return res.status(403).send({
        message: "Failed to authenticate jwt",
      });
    }

    next();
  } catch (error) {
    console.error(error);
    return res.status(500).send({
      message: error,
    });
  }
};

module.exports = { verifySession };
