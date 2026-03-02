import express from "express";
import data from './data.js';
import cors from 'cors';

const app = express();

app.use(cors());

app.get("/api/designdata",(_req,res)=>{
    
    return res.json(data);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
});
