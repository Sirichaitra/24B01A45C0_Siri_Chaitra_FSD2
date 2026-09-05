"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
const PORT = 3000;
// Configure EJS template engine
app.set("view engine", "ejs");
app.set("views", path_1.default.join(__dirname, "views"));
// Middleware to read form data
app.use(express_1.default.urlencoded({ extended: true }));
// Home page
app.get("/", (req, res) => {
    res.render("index");
});
// Form submission
app.post("/submit", (req, res) => {
    const { name, email, age } = req.body;
    // Validation
    if (!name || !email || !age) {
        return res.render("result", {
            message: "All fields are required!",
            name: name || "",
            email: email || "",
            age: age || ""
        });
    }
    if (name.length < 3) {
        return res.render("result", {
            message: "Name must contain at least 3 characters.",
            name,
            email,
            age
        });
    }
    if (!email.includes("@")) {
        return res.render("result", {
            message: "Please enter a valid email.",
            name,
            email,
            age
        });
    }
    if (Number(age) < 18) {
        return res.render("result", {
            message: "Age must be 18 or above.",
            name,
            email,
            age
        });
    }
    // Render values
    res.render("result", {
        message: "Registration Successful!",
        name,
        email,
        age
    });
});
// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
