/* 
  This function generates a JSON Web Token.
  I chose to modularize it in its own file,
  as I use it in two controller functions.
*/

const jwt = require('jsonwebtoken');
const { JWT_SECRET } = process.env;

// I'm putting the user's ID in the token.
const generateToken = id => {
  return jwt.sign({ id }, JWT_SECRET, { expiresIn: '30d' });
};

module.exports = generateToken;