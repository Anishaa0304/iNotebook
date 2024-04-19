const mongoose = require('mongoose');

const mongoURI = '';//<---apna mongo uri upload kar

const connectToMongo = () => {
    mongoose.connect(mongoURI, () => {
        console.log('Connected to MongoDB');
    });
}

module.exports = connectToMongo;