const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    overview : {
        type: String
    },
    genres : {
        type: Array
    },
    author: {
        type: String
    }
})

bookSchema.plugin(AutoIncrement, {inc_field: 'bookId'});

exports.getBook = function(){
    return mongoose.model("Book", bookSchema)
}