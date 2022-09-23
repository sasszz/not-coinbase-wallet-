const mongoose = require('mongoose');
const colors = require('colors');
colors.enable();

const connectDb = () =>
  mongoose
    .connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() =>
      console.log(
        colors.yellow(
          `CONNECTED... HOST: ${mongoose.connection.host}, DB: ${mongoose.connection.db.databaseName}`
        )
      )
    );

module.exports = connectDb;