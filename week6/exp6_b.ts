import express, { Request, Response } from "express";

const app = express();
const PORT = 3000;

app.use(express.json());

let tasks = [
    { id: 1, title: "Learn Express" },
    { id: 2, title: "Master REST APIs" }
];

// GET
app.get("/tasks", (req: Request, res: Response) => {
    res.json(tasks);
});

// POST
app.post("/tasks", (req: Request, res: Response) => {
    const newTask = {
        id: req.body.id != null ? req.body.id : tasks.length + 1,
        title: req.body.title
    };

    tasks.push(newTask);
    res.status(201).json(newTask);
});

// PUT
app.put("/tasks/:id", (req: Request, res: Response) => {
    const id = parseInt(req.params.id as string);

    const task = tasks.find(t => t.id === id);

    if (task) {
        task.title = req.body.title;

        res.json({
            message: "Task updated successfully",
            task
        });
    } else {
        res.status(404).json({
            error: "Task not found"
        });
    }
});

// DELETE
app.delete("/tasks/:id", (req: Request, res: Response) => {
    const id = parseInt(req.params.id as string);

    tasks = tasks.filter(t => t.id !== id);

    res.json({
        message: `Task ${id} deleted`,
        remainingTasks: tasks
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`REST API Server running at http://localhost:${PORT}`);
});

export { };