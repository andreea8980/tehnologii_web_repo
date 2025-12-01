import express from 'express';

const statusRouter = express.Router();
statusRouter.route('/')
    .get((req, res) => {
        return res.status(200).json({ 
            message: "Serverul funcționează corect (Status 200 OK)",
            uptime: process.uptime() 
        });
    });
export default statusRouter; 