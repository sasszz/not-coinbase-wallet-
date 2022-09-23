const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema(
  {
    secret: {
      type: String,
    },
    password: {
      type: String,
      required: [true, 'Error: Password is required.'],
      minlength: [8, 'Error: Password must be 8 characters or longer.'],
    },
    address: {
      type: String,
    },
  },
  { timestamps: true }
);

userSchema
  .virtual('confirmPassword')
  .get(() => this._confirmPassword)
  .set(value => (this._confirmPassword = value));

userSchema.pre('validate', function (next) {
  if (this.password !== this.confirmPassword) {
    this.invalidate('confirmPassword', 'Error: Passwords do not match.');
  }
  next();
});

userSchema.pre('save', function (next) {
  bcrypt.hash(this.secret, 10).then(hash => {
    this.secret = hash;
    next();
  });
});

userSchema.pre('save', function (next) {
  bcrypt.hash(this.password, 10).then(hash => {
    this.password = hash;
    next();
  });
});

const User = mongoose.model('User', userSchema);
module.exports = User;