const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const { errorHandler } = require('./middleware/errorMiddleware');

const postRoutes = require('./routes/postRoutes'); // bring in router file to server
const userRoutes = require('./routes/userRoutes');
const connectDB = require('./config/db');

dotenv.config({path: './config/config.env'});

connectDB();

// Create express server
const app = express();

// use body parser middleware to access req.body
app.use(bodyParser.json());

app.use('/api/v1/posts', postRoutes); // mount the router
// make request to /api/v1/posts will route to router.get inside posts
app.use('/api/v1/users', userRoutes);

// Serve frontend
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, './client/build')));

    app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, './', 'client', 'build', 'index.html')));
} else {
    app.get('/', (req, res) => res.send('Please set env to production'));
}

// overwrite default Express error handler
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${process.env.PORT}`));

