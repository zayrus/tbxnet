'use strict';

const mongoose = require('mongoose')
const config = require('./config/environment')

var promise = mongoose.connect(config.mongodb.uri, {
    useMongoClient: true
});

const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))

module.exports.db = db