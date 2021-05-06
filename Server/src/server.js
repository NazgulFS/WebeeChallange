const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({
    path: './config.env'
});

const app = require('./app');

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
app.listen(port, () => {
    console.log(`Application running on port ${port}`);
});
