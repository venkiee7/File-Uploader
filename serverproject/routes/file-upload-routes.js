'use strict';

const express = require('express');
const {upload} = require('../helpers/filehelper');
const {singleFileUpload, 
     getallSingleFiles} = require('../controllers/fileuploaderController');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const fetchuser = require('../helpers/fetchuser');


router.post('/singleFile', upload.single('file'), singleFileUpload);
// router.post('/multipleFiles', upload.array('files'), multipleFileUpload);
router.get('/getSingleFiles', fetchuser, async (req,res) => {
    try{
        const files = await Files.find({ user: req.user.id });
        res.json(getallSingleFiles);
        } catch(error) {
            console.error(error.message);
            res.status(500).send("Internal Server error occured");
        }
})
// router.get('/getMultipleFiles', getallMultipleFiles);


module.exports = {
    routes: router
}