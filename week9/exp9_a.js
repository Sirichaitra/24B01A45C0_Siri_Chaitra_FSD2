const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// MongoDB Atlas Connection
const dbURI =
    "mongodb://user:pass@ac-kqtbnqm-shard-00-00.2nxhvmh.mongodb.net:27017,ac-kqtbnqm-shard-00-01.2nxhvmh.mongodb.net:27017,ac-kqtbnqm-shard-00-02.2nxhvmh.mongodb.net:27017/?ssl=true&replicaSet=atlas-b1nwrn-shard-0&authSource=admin&appName=StudentCRUD";

mongoose
    .connect(dbURI)
    .then(() => console.log("Connected to MongoDB Atlas successfully!"))
    .catch((err) => console.error("Database connection error:", err));

// Student Schema
const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    rollNumber: {
        type: Number,
        required: true,
        unique: true,
    },
    course: String,
    isActive: {
        type: Boolean,
        default: true,
    },
});

// Student Model
const Student = mongoose.model("Student", studentSchema);

// CREATE
app.post("/students", async (req, res) => {
    try {
        const newStudent = new Student(req.body);
        const savedStudent = await newStudent.save();
        res.status(201).json(savedStudent);
    } catch (error) {
        res.status(400).json({
            message: "Error saving student",
            error: error.message,
        });
    }
});

// READ
app.get("/students", async (req, res) => {
    try {
        const students = await Student.find();
        res.status(200).json(students);
    } catch (error) {
        res.status(500).json({
            message: "Error fetching students",
            error: error.message,
        });
    }
});

// UPDATE
app.put("/students/:id", async (req, res) => {
    try {
        const updatedStudent = await Student.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        if (!updatedStudent) {
            return res.status(404).json({
                message: "Student not found",
            });
        }

        res.status(200).json(updatedStudent);
    } catch (error) {
        res.status(400).json({
            message: "Error updating student",
            error: error.message,
        });
    }
});

// DELETE
app.delete("/students/:id", async (req, res) => {
    try {
        const deletedStudent = await Student.findByIdAndDelete(req.params.id);

        if (!deletedStudent) {
            return res.status(404).json({
                message: "Student not found",
            });
        }

        res.status(200).json({
            message: "Student record deleted successfully",
        });
    } catch (error) {
        res.status(500).json({
            message: "Error deleting student",
            error: error.message,
        });
    }
});

// Start Server
// Start Server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
    console.log("Ready for CRUD operations testing.");
});