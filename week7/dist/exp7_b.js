"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
const PORT = 3001;
// Configure EJS
app.set("view engine", "ejs");
app.set("views", path_1.default.join(__dirname, "../views"));
// Read form data
app.use(express_1.default.urlencoded({ extended: true }));
// Display form
app.get("/", (req, res) => {
    res.render("form");
});
// Accept form inputs and validate
app.post("/submit", (req, res) => {
    const { name, email, age } = req.body;
    // Basic validations
    if (!name || !email || !age) {
        return res.send("Error: All fields are required!");
    }
    if (name.length < 3) {
        return res.send("Error: Name must contain at least 3 characters!");
    }
    if (!email.includes("@")) {
        return res.send("Error: Enter a valid email!");
    }
    if (Number(age) < 18) {
        return res.send("Error: Age must be 18 or above!");
    }
    res.send(`
        <h2>Form Submitted Successfully!</h2>
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <p>Age: ${age}</p>
    `);
});
// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
