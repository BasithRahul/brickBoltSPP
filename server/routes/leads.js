const express = require("express");
const router = express.Router();
const Lead = require("../models/Lead");

// POST /api/leads — create a new lead
router.post("/", async (req, res) => {
  try {
    const { name, phone, email, service, message } = req.body;
    if (!name || !phone) {
      return res.status(400).json({ error: "Name and phone are required." });
    }
    const lead = await Lead.create({ name, phone, email, service, message });
    res.status(201).json({ success: true, lead });
  } catch (err) {
    console.error("Lead creation error:", err);
    res.status(500).json({ error: "Server error" });
  }
});

// GET /api/leads — retrieve all leads (admin)
router.get("/", async (req, res) => {
  try {
    const leads = await Lead.find().sort({ createdAt: -1 });
    res.json(leads);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

// PATCH /api/leads/:id — update lead status
router.patch("/:id", async (req, res) => {
  try {
    const lead = await Lead.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(lead);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
