const express = require("express");
const notes = require("./data/notes");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");

const app = express();
dotenv.config();
connectDB();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.get("/notes", (req, res) => {
  res.json(notes);
});

app.get("/note/:id", (req, res) => {
  const note = notes.find((n) => n._id === req.params.id);
  res.json(note);
});

app.use("/users", userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server is running on Port ${PORT}`));
