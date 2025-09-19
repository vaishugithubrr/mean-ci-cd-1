const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());

const authRouter = require('./routes/auth');
app.use('/auth',authRouter)

//Connect to MongoDB
const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/banking-app1';
mongoose.connect(uri)
.then(()=>console.log('MongoDB connected..'))
.catch(err => console.error(err));

app.get('/',(req,res)=>{
    res.send('Backend is running!' );

});

app.listen(port,()=>{
    console.log(`Server is running on port:${port}`);
})