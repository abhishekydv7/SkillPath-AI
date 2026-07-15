import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
dotenv.config();

await connectDB();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

app.get('/api/health', (req, res) =>{
    res.json({
        status: 'ok',
        message: "Skillpath AI API is running"
    })
})

app.listen(PORT, () => console.log(`Server running on PORT: ${PORT}`))
//gettingpsyched23_db_user
//OvWVV3Y014j4iUGY