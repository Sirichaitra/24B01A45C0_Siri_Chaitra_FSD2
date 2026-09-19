import express, { Request, Response } from "express";
import path from "path";

const app = express();

// Middleware configuration
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set EJS as default engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Sample data
let users = [
    { id: 1, name: "Siri", email: "siri@gmail.com" },
    { id: 2, name: "Chaitra", email: "chaitra@gmail.com" }
];

// Home page
app.get("/", (req: Request, res: Response) => {
    res.render("index");
});

// GET - All users
app.get("/api/users", (req: Request, res: Response) => {
    res.json(users);
});

// GET - User by ID
app.get("/api/users/:id", (req: Request, res: Response) => {
    const id = Number(req.params.id);

    const user = users.find(u => u.id === id);

    if (!user) {
        return res.status(404).json({
            message: "User not found"
        });
    }

    res.json(user);
});

// POST - Add user
app.post("/api/users", (req: Request, res: Response) => {
    const { name, email } = req.body;

    const newUser = {
        id: users.length + 1,
        name,
        email
    };

    users.push(newUser);

    res.status(201).json(newUser);
});

// PUT - Update user
app.put("/api/users/:id", (req: Request, res: Response) => {
    const id = Number(req.params.id);

    const user = users.find(u => u.id === id);

    if (!user) {
        return res.status(404).json({
            message: "User not found"
        });
    }

    user.name = req.body.name;
    user.email = req.body.email;

    res.json(user);
});

// DELETE - Delete user
app.delete("/api/users/:id", (req: Request, res: Response) => {
    const id = Number(req.params.id);

    const index = users.findIndex(u => u.id === id);

    if (index === -1) {
        return res.status(404).json({
            message: "User not found"
        });
    }

    users.splice(index, 1);

    res.json({
        message: "User deleted successfully"
    });
});

// Start server
app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});