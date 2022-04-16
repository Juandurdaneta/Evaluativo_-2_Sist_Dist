const express = require('express');
const router = express.Router();

// utils
const utils = require('./utils');

// routes

// create new user
router.post('/register', (req, res)=>{

    const { email, password } = req.body;

    console.log(email, password)

    utils.validateEmail(email) ? utils.createUser(email,password, res) : res.send({ status: 400, message: "Please enter a valid email" });
   

})

// authenticate user

router.post('/login', (req, res)=>{
    const { email, password } = req.body;

    utils.authenticateUser(email, password, res);

})

// get user info off token

router.get('/', (req, res)=>{
    const user = utils.getUserData(req.headers.authorization.split(" ")[1]);

    if(user){
        res.send({
            status: 200,
            data: user
        })
    } else {
        res.send({
            status: 400,
            message: 'Invalid token, please try again.'
        })
    }

})  


module.exports = router;