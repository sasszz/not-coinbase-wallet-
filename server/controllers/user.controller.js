const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const { logPasswordError } = require('../err/errors');
const generateToken = require('./jwtToken');

/* 
  @desc    Get all users
  @route   GET /api/users
  @access  Private
*/
const getAllUsers = (_, res) => {
  User.find()
    .then(users => res.status(200).json(users))
    .catch(err => res.status(400).json(err));
};

/* 
  @desc    Register a user
  @route   POST /api/users/register
  @access  Public
*/
const register = (req, res) => {
  // Register a user and catch any errors.
  // Errors include all Mongoose validation errors.
  User.create(req.body)
    .then(user => {

      // Success. Generate JWT Token.
      const userToken = generateToken(user._id);

      // Log the user in as a courtesy.
      // Send a cookie containing the token.
      console.log(userToken)
      res.status(201).cookie('userToken', userToken, { httpOnly: true }).json({
        message: 'Success!',
        user,
        userToken,
      });
    })
    .catch(err => res.status(400).json(err));
};

/* 
  @desc    Authenticate a user
  @route   POST /api/users/login
  @access  Public
*/
const login = async (req, res) => {
  // Destructure the secret and password from the request body.
  const { secret, password } = req.body;

  // Try/catch block in async function.
  try {

    // Find user in database.
    const user = await User.findOne({ secret });

    // If user not found, respond with error.
    if (!user) {
      return res.status(400).json(logSecretError);
    }

    // Compare password given vs. password in database.
    const passwordIsCorrect = await bcrypt.compare(password, user.password);

    // If password incorrect, respond with error.
    if (!passwordIsCorrect) {
      return res.status(400).json(logPasswordError);
    }

    // Success. Generate JWT Token.
    const userToken = generateToken(user._id);

    // Log the user in. Send a cookie containing the token.
    res.status(201).cookie('userToken', userToken, { httpOnly: true }).json({
      message: 'Success!',
      user,
      userToken,
    });
  } catch (err) {
    res.status(400).json(err);
  }
};

/* 
  @desc    Log out a user
  @route   GET /api/users/logout
  @access  Public
*/
const logout = (_, res) => {
  res.clearCookie('userToken');
  res.sendStatus(200);
};

/* 
  @desc    Get logged in user's info
  @route   GET /api/users/me
  @access  Private
*/
const getMe = (req, res) => {
  User.findById({ _id: req.userId })
    .then(user => res.status(200).json(user))
    .catch(err => res.status(400).json(err));
};

module.exports = {
  getAllUsers,
  register,
  login,
  logout,
  getMe,
};
