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

// get book from db

router.get('/:bookId', (req, res) => {

    const bookId = req.params.bookId;

    bookId && utils.getBook(bookId, res);


})

// get every book in db

router.get('/', (req, res)=>{
    utils.getBooks(res);
})

// edit book

router.put('/:bookId', (req, res) =>{
    const bookId = req.params.bookId;
    bookId && utils.updateBook(bookId, req.body, res);
})

// delete book

router.delete('/:bookId', (req, res)=>{
    const bookId = req.params.bookId;
    bookId && utils.deleteBook(bookId, res);
})


module.exports = router;