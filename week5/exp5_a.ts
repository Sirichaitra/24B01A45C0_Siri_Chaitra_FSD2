import express, { Request, Response } from 'express';

const app = express();

const PORT = 3000;

app.get('/', (req: Request, res: Response) => {
    res.send('Welcome SVECW! You have reached the home page.');
});

app.get('/about', (req: Request, res: Response) => {
    res.send('This server was built as a learning excercise for Express.js by SVECW AI Dept.');
});

app.get('/api/status', (req: Request, res: Response) => {
    res.json({
        active: true,
        version: "10.0.0",
        message: "The server is Healthy!"
    });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});