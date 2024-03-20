import express from 'express';
import dotenv from 'dotenv';
import dbConnect from './config/db.js';

const app = express();
dotenv.config();

dbConnect();


app.use(express.json());


const port = process.env.PORT || 4000;


app.get('/', (req, res) =>{
    res.send('<h1>HOME PAGE</h1>');
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
