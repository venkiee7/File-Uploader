'use strict';
const mongoose = require('mongoose');

module.exports = () => {
    mongoose.connect('mongodb://localhost:27017/boiz?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: true,
    }).then(() => console.log('Connected to Mongodb......'));
}