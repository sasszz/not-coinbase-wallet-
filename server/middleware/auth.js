const jwt = require('jsonwebtoken');
const { authError } = require('../err/errors')

const authenticate = (req, res, next) => {
  const { userToken } = req.cookies;
  const { JWT_SECRET } = process.env;
  jwt.verify(userToken, JWT_SECRET, (err, payload) => {
    if (err) {
      res.status(401).json(authError);
    } else {
      console.log(payload);
      req.userId = payload.id;
      next();
    }
  });
};

module.exports = authenticate;