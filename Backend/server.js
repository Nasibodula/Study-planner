const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
require('dotenv').config();  // Load environment variables

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB using the URI from .env
const mongoURI = process.env.MONGO_URI; // MONGO_URI should be in your .env file

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

// Define Study Schema
const studySchema = new mongoose.Schema({
  date: { type: String, required: true },
  schedule: [{ time: String, activity: String, notes: String }],
  tasks: [String],
  waterAmount: Number,
  mood: Number,
  topPriorities: [String],
});

const Study = mongoose.model("Study", studySchema);

// Routes
// Save planner details to MongoDB
app.post("/api/save", async (req, res) => {
  try {
    const { date, schedule, tasks, waterAmount, mood, topPriorities } = req.body;

    const studyPlan = new Study({
      date,
      schedule,
      tasks,
      waterAmount,
      mood,
      topPriorities,
    });

    await studyPlan.save();
    res.status(200).json({ message: "Study plan saved!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error saving study plan" });
  }
});

// Get all saved study plans
app.get("/api/plans", async (req, res) => {
  try {
    const plans = await Study.find();
    res.status(200).json(plans);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error fetching study plans" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});