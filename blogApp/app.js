import express from 'express';
import dotenv from 'dotenv';
import dbConnect from './config/db.js';
import blog from './routes/blog.js';

const app = express();
dotenv.config();

dbConnect();


app.use(express.json());


const port = process.env.PORT || 4000;

app.use('/api/v1',blog);


app.get('/', (req, res) =>{
    res.send('<h1>HOME PAGE</h1>');
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
