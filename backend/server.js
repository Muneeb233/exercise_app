const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose')

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
const uri = process.env.ATLAS_URI;

mongoose.connect(uri,()=>{
    console.log("Mongo connected successfully")
});

const exerciseRoute=require('./routes/exercises')
const usersRoute=require('./routes/users')

app.use('/api/exercises/',exerciseRoute);
app.use('/api/users/',usersRoute);
app.listen(port, () => {
    console.log(`app is listening on port: ${port}`)
})