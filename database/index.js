const mongoose = require('mongoose');
const config = require('../config/config');

module.exports = {
    mongoose,
    connect: () => {
        mongoose.Promise = Promise;
        mongoose.connect(config[process.env.NODE_ENV].url);
    },
    disconnect: (done) => {
        mongoose.disconnect(done);
    },
};