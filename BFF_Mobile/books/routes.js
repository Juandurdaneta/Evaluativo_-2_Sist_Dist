const express = require('express');
const router = express.Router();

const fetch = require('node-fetch');


const url = process.env.API_URL
// routes

// add new book to db

router.post('/', (req, res) =>{
    const data = req.body;

    const defaultOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    }

    fetch(`${url}/book/`, defaultOptions)
    .then(response => response.json())
    .then(json => res.send(json))

})

// get every book from the db

router.get('/', (req, res)=>{
    const defaultOptions = {
        method: 'GET',
    }

    fetch(`${url}/book/`, defaultOptions)
    .then(response => response.json())
    .then(json => res.send(json));
})

// get specific book from the db

router.get('/:bookId', (req, res)=>{
    const bookId = req.params.bookId;

    const defaultOptions = {
        method: 'GET',
    }

    fetch(`${url}/book/${bookId}`, defaultOptions)
    .then(response => response.json())
    .then(json => res.send(json));
})

// update  book from the db

router.get('/:bookId', (req, res)=>{
    const bookId = req.params.bookId;
    const data = req.body;

    const defaultOptions = {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    }

    fetch(`${url}/book/${bookId}`, defaultOptions)
    .then(response => response.json())
    .then(json => res.send(json));
})

// delete book from the db

router.get('/:bookId', (req, res)=>{
    const bookId = req.params.bookId;

    const defaultOptions = {
        method: 'DELETE',
    }

    fetch(`${url}/book/${bookId}`, defaultOptions)
    .then(response => response.json())
    .then(json => res.send(json));
})


module.exports = router;
