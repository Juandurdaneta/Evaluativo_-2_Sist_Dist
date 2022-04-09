const bookSchema = require('./models');
const Book = bookSchema.getBook();

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

exports.updateBook = function(id, res){

}

exports.deleteBook = function(id, res){
    
}