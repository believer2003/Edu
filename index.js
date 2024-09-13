const route =require("./routes/userRoutes.js");
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const cors = require("cors");
const app=express();
app.use(bodyParser.json());
app.use(cors());
dotenv.config();

const PORT=5002;
const URL = process.env.MONGOURL;

mongoose.connect(URL).then(()=>{
    console.log("Connection Successful");
}).catch(error=>console.log(error));

app.listen(PORT,()=>{
  console.log(`Server is running on port ${PORT}`);
});

app.use('/api',route)

// const express = require('express');
// const mongoose = require('mongoose');
// const morgan = require('morgan');

// const app = express();

// // Logging outgoing requests
// app.use(morgan('dev'));

// // Your MongoDB connection code
// const mongoURI = "mongodb+srv://yashtyagis2016:9qHwOvw6W9cJzc9T@cluster0.lsfl3tw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
// mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log('MongoDB connected'))
//   .catch(err => console.error('MongoDB connection error:', err));

// // Your routes and other middleware

// const PORT = process.env.PORT || 32;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });
