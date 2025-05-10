const express = require("express");
const Task = require("../models/Task");

const router = express.Router();

router.get("/", async (req, res) => {
  const tasks = await Task.find({ userId: req.userId });
  res.json(tasks);
});

router.post("/", async (req, res) => {
  const newTask = new Task({ title: req.body.title, userId: req.userId });
  await newTask.save();
  res.status(201).json(newTask);
});

router.put("/:id", async (req, res) => {
  const updated = await Task.findOneAndUpdate(
    { _id: req.params.id, userId: req.userId },
    { title: req.body.title },
    { new: true }
  );
  res.json(updated);
});

router.delete("/:id", async (req, res) => {
  await Task.findOneAndDelete({ _id: req.params.id, userId: req.userId });
  res.json("Deleted");
});

module.exports = router;
