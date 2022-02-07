const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const posts = require('./routes/posts'); // bring in router file to server
const connectDB = require('./config/db');

dotenv.config({path: './config/config.env'});

connectDB();

// Create express server
const app = express();

// use body parser middleware to access req.body
app.use(bodyParser.json());

app.use('/api/v1/posts', posts); // mount the router
// make request to /api/v1/posts will route to router.get inside posts

//create simple route
app.get('/', (req, res) => res.send('Hello'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${process.env.PORT}`));

