// jwt
const jwt = require('jsonwebtoken')

// dotenv config
require('dotenv').config();

// bcrypt config
const bcrypt = require('bcrypt');
const saltRounds = 10;

// user schema's
const userSchema = require('./models.js');
const User = userSchema.getUser();


exports.createUser = function(email, password, res){

    const newUser = new User({
        email : email,
        password: password && bcrypt.hashSync(password, saltRounds)
    });

    newUser.save((err)=>{

        if(!err){
            res.send( {
                status: 200,
                message: "User created succesfully!"
            });
        } else {
            res.send( {
                status: 400,
                message:  "An error has occurred while creating your user. Please try again."
            });
        }

    });


}

exports.authenticateUser = function(email, password, res){

    User.findOne({email: email}, (err, foundUser)=>{
        if(!err){
            if(foundUser && bcrypt.compareSync(password, foundUser.password)){
                jwt.sign(foundUser._doc, process.env.SECRET_KEY, (err, token)=>{
                    if(!err){
                        res.send({
                            status: 200,
                            token: token
                        });
                    } else {
                        res.send(JSON.stringify(err));
                    }
                });
            } else {
                res.send({
                    status: 400,
                    message: 'Failed to authenticate, please check your credentials and try again.'
                });
            }
        } else {
            res.send({
                status: 400,
                message: "An error has occurred, please try again."
            });
        }
    })


}

exports.validateEmail = function(email) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
      {
        return (true)
      }
        return (false)
    }
    

exports.getUserData = function(token){
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    return decoded
}

exports.addAdmin = function(user, response){

    User.findOneAndUpdate({userId: user.userId}, {isAdministrator: true}, (err, foundUser)=>{
        if(!err) {
            response.send({
                status: 200,
                message: "Admin added to user.",
                user: foundUser
            })
        } else {
            response.send({
                status: 400,
                message: "An error has occurred."
            })
        }
    });

}