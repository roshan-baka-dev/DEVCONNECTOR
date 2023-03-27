const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = function (req, res, next) {
  // get token from the header
  const token = req.header('x-auth-token');

  // check for no token

  if (!token) {
    return res.status(401).json({ msg: 'No token,authorization denied!!' });
  }
  //   verify token
  try {
    const decode = jwt.verify(token, config.get('jwtSecret'));
    req.user = decode.user;

    next();
  } catch (err) {
    res.status(401).json({ msg: 'token is not valid' });
  }
};
