import express, { Request, Response } from "express";
import path from "path";

const app = express();
const PORT = 3000;

// Configure EJS template engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Middleware to read form data
app.use(express.urlencoded({ extended: true }));

// Home page
app.get("/", (req: Request, res: Response) => {
    res.render("index");
});

// Form submission
app.post("/submit", (req: Request, res: Response) => {

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