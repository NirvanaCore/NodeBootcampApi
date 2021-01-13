const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

//initialization of logger
const morgan = require('morgan');
//custom morgan
//const logger = require('./middleware/logger');

//load config env files
dotenv.config({ path: './config/config.env' });

//Connect to database
connectDB();

//Route files
const bootcamps = require('./routes/bootcamps');

const app = express();

// logger from middleware
// app.use(logger);

//dev logging middleware
if (process.env.NODE_ENV === 'development') {
	app.use(morgan('dev'));
}

//Mount routers
app.use('/api/v1/bootcamps', bootcamps);

const PORT = process.env.PORT || 5000;

const server = app.listen(
	PORT,
	console.log(`Server running in ${process.env.NODE_ENV} mode on  port ${PORT}`)
);

//Handle unhandled rejections
process.on('unhandledRejection', (err, promise) => {
	console.log(` Error : ${err.message}`);
	//close server and exit process
	server.close(() => {
		process.exit(1);
	});
});
