const bookSchema = require('./models');
const Book = bookSchema.getBook();

require('dotenv').config();

// add new book
exports.addBook = function(book, res){
    
    const newBook = new Book({
        ...book
    });

    console.log(book)

    newBook.save((err) =>{
        if(!err){
            res.send({
                status: 200,
                message: "Book added successfully!"
            })
        } else {
            res.send({
                status: 400,
                message: "There was an error, please try again.",
                error: err
            })
        }
    })


}
// get specific book
exports.getBook = function(id, res){
    Book.findOne({bookId: id}, (err, foundBook) => {

        if(!err && foundBook){
            res.send({
                status: 200,
                result: foundBook
            })
        }

        else {
            res.send({
                status: 404,
                message: "Book not found..."
            })
        }

    })
}

// get all books

exports.getBooks = function(res) {

    Book.find({}, (err, foundBooks) => {
        if(!err){
            res.send({
                status: 200,
                foundBooks: foundBooks
            })
        } else {
            res.send({
                status: 404,
                message: "Specified book was not found..."
            })
        }
    })
}   
// update book
exports.updateBook = function(id, data, res){
    Book.findOneAndUpdate({bookId: id}, data, (err, foundBook) => {
        if(!err && foundBook){
            res.send({
                status: 200,
                message: "Book updated successfully!"
            })
        } else {
            res.send({
                status: 400,
                message: "Failed to update book, please try again..."
            })
        }
    })
}

// delete book
exports.deleteBook = function(id, res){
    Book.findOneAndDelete({bookId: id}, (err, deletedBook) =>{
        if(!err){
            res.send({
                status: 200,
                message: "Book removed successfully!"
            })
        } else {
            res.send({
                status: 400,
                message: "Failed to delete book, please try again..."
            })
        }
    })
}

// check if user is administrator
exports.checkAdmin = function(token){
    const user = jwt.verify(token, process.env.SECRET_KEY);

    if(user.isAdministrator){
        return true
    } else {
        return false
    }

}