const express = require('express');
const dotenv = require('dotenv');

//initialization of logger
const morgan = require('morgan');
//custom morgan
//const logger = require('./middleware/logger');

//Route files
const bootcamps = require('./routes/bootcamps');

//load config env files
dotenv.config({ path: './config/config.env' });

const app = express();

// logger from middleware
// app.use(logger);

//dev logging middleware
if ((process.env.NODE_ENV === 'development')) {
	app.use(morgan('dev'));
}

//Mount routers
app.use('/api/v1/bootcamps', bootcamps);

const PORT = process.env.PORT || 5000;
app.listen(
	PORT,
	console.log(`Server running in ${process.env.NODE_ENV} mode on  port ${PORT}`)
);
