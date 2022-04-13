const express = require('express');
const port = process.env.PORT || 4000

const app = express();
app.use(express.json());

// routes
const userRoutes = require("./users/routes");
const bookRoutes = require("./books/routes");

app.use('/desktop/users', userRoutes);
app.use('/desktop/books', bookRoutes);


app.listen(port, ()=>{
    console.log(`App running on port ${port}`)
});