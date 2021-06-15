const express = require('express');
const cookieParser = require('cookie-parser');
const path = require('path');
const dotenv = require('dotenv');
const indexRouter = require('./routes/index');
var cors = require('cors')
const app = express();
dotenv.config();
app.use(cors( {exposedHeaders: ["Authorization",'Auth','Cookie'] ,withCredentials: true}))
let port = process.env.PORT;

app.listen(port, () => console.log('Express server is running at port : '));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);
module.exports = app;
