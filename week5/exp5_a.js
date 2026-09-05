"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const PORT = 3000;
app.get('/', (req, res) => {
    res.send('Welcome SVECW! You have reached the home page.');
});
app.get('/about', (req, res) => {
    res.send('This server was built as a learning excercise for Express.js by SVECW AI Dept.');
});
app.get('/api/status', (req, res) => {
    res.json({
        active: true,
        version: "10.0.0",
        message: "The server is Healthy!"
    });
});
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
