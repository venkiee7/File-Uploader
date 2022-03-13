const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const singleFileSchema = new Schema({
    user: {
        type : mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    fileName: {
        type: String,
        required: true
    },
    filePath: {
        type: String,
        required: true
    },
    fileType: {
        type: String,
        required: true
    },
    fileSize: {
        type: String,
        required: true
    }
}, {timestamps: true});

module.exports = mongoose.model('SingleFile', singleFileSchema);