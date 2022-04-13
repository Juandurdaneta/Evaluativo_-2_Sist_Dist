const express = require('express');
const router = express.Router();

// utils
const utils = require('./utils');

// routes

// add new book to db

router.post('/', (req, res) =>{
    const bookData = req.body;

    try{
        const token = req.headers.authorization.split(" ")[1];

        utils.checkAdmin(token) ? utils.addBook(bookData, res) : res.send({status: 401, message: "You're not authorized to perform this action"})

    } catch (err){
        console.log(err)
        res.send({
            status: 400,
            message: "Token invalid or not provided."
        })

    }



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

    try {
        const token = req.headers.authorization.split(" ")[1];
        
        utils.checkAdmin(token) ? bookId && utils.updateBook(bookId, req.body, res) :  res.send({status: 401, message: "You're not authorized to perform this action"});

    } catch (error) {
        res.send({
            status: 400,
            message: "Token invalid or not provided."
        })
    }

    
})

// delete book

router.delete('/:bookId', (req, res)=>{
    const bookId = req.params.bookId;

    try {
        const token = req.headers.authorization.split(" ")[1];

        utils.checkAdmin(token) ? bookId && utils.deleteBook(bookId, res) : res.send({status: 401, message: "You're not authorized to perform this action"});
        
    } catch (error) {
        res.send({
            status: 400,
            message: "Token invalid or not provided."
        })
    }

})


module.exports = router;