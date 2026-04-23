const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// ── Serverless Database Connection Middleware ──────────────
let cachedDb = null;

async function connectToDatabase() {
  if (mongoose.connection.readyState >= 1) {
    return;
  }
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ MongoDB Connected (Serverless)");
  } catch (err) {
    console.error("❌ MongoDB Connection Error:", err);
    throw err;
  }
}

app.use(async (req, res, next) => {
  // Only connect to DB for API routes
  if (req.path.startsWith('/api')) {
    try {
      await connectToDatabase();
    } catch (err) {
      return res.status(500).json({ error: "Database connection failed", details: err.message });
    }
  }
  next();
});

// ── Middleware ────────────────────────────────────────────
app.use(cors({
  origin: ["http://localhost:5173", "http://localhost:3000"],
  credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ── Routes ────────────────────────────────────────────────
app.use("/api/leads", require("./routes/leads"));
app.use("/api/reviews", require("./routes/reviews"));

app.get("/", (req, res) => {
  res.json({ message: "Shree Pawanputra Projects API is running ✅" });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

// ── Export/Start ──────────────────────────────────────────
// Only listen if not running in a Vercel/Production environment
if (process.env.NODE_ENV !== 'production' || !process.env.VERCEL) {
  app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
  });
}

module.exports = app;
