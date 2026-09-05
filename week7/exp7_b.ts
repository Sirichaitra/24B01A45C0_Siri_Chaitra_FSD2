import express, { Request, Response } from "express";
import path from "path";

const app = express();
const PORT = 3001;

// Configure EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../views"));

// Read form data
app.use(express.urlencoded({ extended: true }));

// Display form
app.get("/", (req: Request, res: Response) => {
    res.render("form");
});

// Accept form inputs and validate
app.post("/submit", (req: Request, res: Response) => {

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