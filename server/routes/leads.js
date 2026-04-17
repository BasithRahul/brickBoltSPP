const express = require("express");
const router = express.Router();

// Memory store (Temporary - will be reset on server restart)
let leads = [];

// POST /api/leads — create a new lead
router.post("/", async (req, res) => {
  try {
    const { name, phone, email, service, message } = req.body;
    if (!name || !phone) {
      return res.status(400).json({ error: "Name and phone are required." });
    }
    const lead = { 
      id: Date.now().toString(),
      name, 
      phone, 
      email, 
      service, 
      message,
      createdAt: new Date()
    };
    
    console.log("📝 Lead received (No DB connected):", lead);
    leads.push(lead);
    
    res.status(201).json({ success: true, message: "Lead logged (Memory only)", lead });
  } catch (err) {
    console.error("Lead submission error:", err);
    res.status(500).json({ error: "Server error" });
  }
});

// GET /api/leads — retrieve all leads (admin)
router.get("/", async (req, res) => {
  try {
    res.json(leads);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

// PATCH /api/leads/:id — update lead status
router.patch("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const index = leads.findIndex(l => l.id === id);
    if (index !== -1) {
      leads[index] = { ...leads[index], ...req.body };
      res.json(leads[index]);
    } else {
      res.status(404).json({ error: "Lead not found" });
    }
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
