const fetch = require('node-fetch');
require('dotenv').config();

const url = process.env.API_URL

exports.post = function(endpoint, data, response){

    let defaultOptions;

    if(data){

        defaultOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        }
        
    } else {
        defaultOptions = {
            method: 'POST'
        }
    }

    try{
        fetch(`${url}/users/${endpoint}`, defaultOptions)
        .then(res => res.json())
        .then(json => response.send(json));
      
    } catch(err){
        response.send({
            status: 400,
            message: "An error has occurred, please try again"
        })
    }
}
