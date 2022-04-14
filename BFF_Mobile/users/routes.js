const express = require('express');
const router = express.Router();

//  utils
const utils = require('./utils');

// routes

// create new user
router.post('/register', (req,res)=>{
    const body = {
        email: req.body.email,
        password: req.body.password
    }

    utils.post('register', body, res);

})

// authenticate user

router.post('/login', (req, res) =>{

    const body = {
        email: req.body.email,
        password: req.body.password
    }

    utils.post('login', body, res)
       
})

module.exports = router;