const express = require('express');
const port = process.env.PORT || 4002

const app = express();
app.use(express.json());

// routes
const userRoutes = require("./users/routes");
const bookRoutes = require("./books/routes");

app.use('/mobile/users', userRoutes);
app.use('/mobile/books', bookRoutes);


app.listen(port, ()=>{
    console.log(`App running on port ${port}`)
});