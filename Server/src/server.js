const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({
    path: './config.env'
});

process.on('uncaughtException', err => {
    console.log('UNCAUGHT EXCEPTION!!! shutting down...');
    console.log(err.name, err.message);
    process.exit(1);
});

const app = require('./app');

// instance http instead to express
const http = require('http').Server(app);
const io = require('socket.io')(http);

// Get connection environment
const database = process.env.DATABASE;

// Database connection
mongoose.connect(database, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
}).then(con => {
    console.log('DB connection Successfully!',database);
});

// Start the server
const port = process.env.PORT;
http.listen(port, () => {
    console.log(`Application running on port ${port}`);
});

process.on('unhandledRejection', err => {
    console.log('UNHANDLED REJECTION!!!  shutting down ...');
    console.log(err.name, err.message);
    http.close(() => {
        process.exit(1);
    });
});
