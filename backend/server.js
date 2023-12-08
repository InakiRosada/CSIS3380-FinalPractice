const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

// setting up connection with the use of a connection string. name must only use letters if the name hase special characctersf
const uri = "mongodb+srv://admin:admin@cluster0.spv3miu.mongodb.net/FinalsCollection";
mongoose.connect(uri, { 
    // useNewUrlParser: true,  
    // useUnifiedTopology: true 
});

// create a database connection, 
// if successfull, MongoDB database connection established successfully will be printed in the logs.
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
});

//import routes
const gradeRouter = require('./routes/grades');

// add /grade before all routes
app.use('/grade', gradeRouter);

// listening on port 5001.
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});