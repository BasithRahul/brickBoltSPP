const express = require("express");
const router = express.Router();
const Review = require("../models/Review");

const initialTestimonials = [
  { name: "Rajesh Kumar", location: "Hyderabad", rating: 5, text: "Excellent work! Shree Pawanputra Projects built our 3BHK house on time and within budget. The quality of construction is outstanding.", role: "Homeowner" },
  { name: "Priya Reddy", location: "Kukatpally", rating: 5, text: "Very professional team. The 3D design they provided matched exactly what was constructed. Highly recommend for commercial projects.", role: "Business Owner" },
  { name: "Venkat Rao", location: "JNTU Road", rating: 5, text: "I hired them for my warehouse construction. The structural quality and timely delivery exceeded my expectations. Great team!", role: "Entrepreneur" },
  { name: "Sita Devi", location: "Miyapur", rating: 5, text: "From blueprint to handover, the team was transparent and professional. Best construction company in Hyderabad.", role: "Homeowner" },
];

// GET /api/reviews — retrieve all reviews
router.get("/", async (req, res) => {
  try {
    const reviews = await Review.find().sort({ createdAt: -1 });
    
    // Seed initial reviews if database is completely empty
    if (reviews.length === 0) {
      await Review.insertMany(initialTestimonials);
      const seededReviews = await Review.find().sort({ createdAt: -1 });
      return res.json(seededReviews);
    }
    
    res.json(reviews);
  } catch (err) {
    console.error("Fetch reviews error:", err);
    res.status(500).json({ error: "Server error" });
  }
});

// POST /api/reviews — add a new review
router.post("/", async (req, res) => {
  try {
    const { name, location, rating, text, role } = req.body;
    if (!name || !text || !rating) {
      return res.status(400).json({ error: "Name, text, and rating are required." });
    }
    
    const newReview = new Review({
      name,
      location,
      rating,
      text,
      role: role || "Customer",
    });
    
    await newReview.save();
    res.status(201).json({ success: true, review: newReview });
  } catch (err) {
    console.error("Review submission error:", err);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
