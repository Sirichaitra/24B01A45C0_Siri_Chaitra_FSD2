"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const { timeStamp } = require('node:console');
const app = (0, express_1.default)();
const PORT = 3000;
app.get('/', (req, res) => {
    res.json({
        messaga: "Welcome to our API",
        status: "Active",
        timestamp: new Date()
    });
});
app.get('/students', (req, res) => {
    const studentList = [
        { id: 101, name: "Alice", course: "MERN Stack" },
        { id: 102, name: "Bob", course: "Data Science" },
        { id: 103, name: "Charlie", course: "UI/UX" }
    ];
    res.json(studentList);
});
app.get('/product/:id', (req, res) => {
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
