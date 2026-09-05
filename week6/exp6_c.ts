import express, { Request, Response } from "express";
const { timeStamp } = require('node:console');
const app = express();
const PORT = 3000;

app.get('/', (req: Request, res: Response) => {
    res.json({
        messaga: "Welcome to our API",
        status: "Active",
        timestamp: new Date()
    });
});

app.get('/students', (req: Request, res: Response) => {
    const studentList = [
        { id: 101, name: "Alice", course: "MERN Stack" },
        { id: 102, name: "Bob", course: "Data Science" },
        { id: 103, name: "Charlie", course: "UI/UX" }
    ];
    res.json(studentList);
});

app.get('/product/:id', (req: Request, res: Response) => {
    const productId = req.params.id;
    res.json({
        requestedId: productId,
        category: "Computers",
        inStock: true,
        tags: ["drive", "new-arrival"]
    });
});

app.listen(PORT, () => {
    console.log(`JSON Server is running at http://localhost:${PORT}`);
});
export { };