const express = require("express");
const path = require("path");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
    res.render("index", {
        title: "Home Page",
        error: null,
        user: "Bhavani"
    });
});

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});