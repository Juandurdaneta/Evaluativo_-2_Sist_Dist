const express = require('express');
const router = express.Router();

// utils
const utils = require('./utils');

// routes

// add new book to db

router.post('/', (req, res) =>{
    const bookData = req.body;

    bookData && utils.addBook(bookData, res);


})

module.exports = router;