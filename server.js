const express = require("express");
const app = express();

const dotenv = require("dotenv");
dotenv.config();

const colors = require("colors");
colors.enable();

// connect to database
const connectDb = require('./server/config/mongoose.config')
connectDb();

// MIDDLEWARE
// parse json post requests
// handle cross origin requests
// parse cookies from requests
const cors = require('cors');
const cookieParser = require('cookie-parser')
app.use(express.json(), cors(), cookieParser());

// bring in routes
const userRouter = require('./server/routes/user.routes')
app.use('/api/users', userRouter);

const PORT = process.env.PORT || 5001;
const server = app.listen(PORT, () =>
    console.log(colors.yellow(`Listening on port ${server.address().port}.`))
);