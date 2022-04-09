const express = require('express');
const mongoose = require('mongoose');
const port = process.env.PORT || 4000
require('dotenv').config();
// app config
const app = express();
app.use(express.json());

// routes
const bookRoutes = require("./books/routes.js");

// database connection 
mongoose.connect(process.env.DATABASE_URI, {useUnifiedTopology: true, useNewUrlParser: true});

app.use('/book', bookRoutes);

app.listen(port, ()=>{
    console.log(`App running on port ${port}`);
});
