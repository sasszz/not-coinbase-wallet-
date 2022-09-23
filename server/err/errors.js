// const logEmailError = {
//   errors: {
//     email: {
//       path: 'email',
//       message: 'Email not found. Please register.',
//     },
//   },
// };

const logPasswordError = {
  errors: {
    password: {
      path: 'password',
      message: 'Invalid credentials.',
    },
  },
};

const authError = {
  errors: {
    authentication: {
      path: 'authentication',
      message: 'Not authorized.',
    },
  },
}

module.exports = { logPasswordError, authError };