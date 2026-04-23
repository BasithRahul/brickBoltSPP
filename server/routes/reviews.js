const express = require("express");
const router = express.Router();

const initialTestimonials = [
  { id: "1", name: "Rajesh Kumar", location: "Hyderabad", rating: 5, text: "Excellent work! Shree Pawanputra Projects built our 3BHK house on time and within budget. The quality of construction is outstanding.", role: "Homeowner" },
  { id: "2", name: "Priya Reddy", location: "Kukatpally", rating: 5, text: "Very professional team. The 3D design they provided matched exactly what was constructed. Highly recommend for commercial projects.", role: "Business Owner" },
  { id: "3", name: "Venkat Rao", location: "JNTU Road", rating: 5, text: "I hired them for my warehouse construction. The structural quality and timely delivery exceeded my expectations. Great team!", role: "Entrepreneur" },
  { id: "4", name: "Sita Devi", location: "Miyapur", rating: 5, text: "From blueprint to handover, the team was transparent and professional. Best construction company in Hyderabad.", role: "Homeowner" },
];

let globalReviews = [...initialTestimonials];

// GET /api/reviews — retrieve all reviews
router.get("/", (req, res) => {
  try {
    res.json(globalReviews);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

// POST /api/reviews — add a new review
router.post("/", (req, res) => {
  try {
    const { name, location, rating, text, role } = req.body;
    if (!name || !text || !rating) {
      return res.status(400).json({ error: "Name, text, and rating are required." });
    }
    
    const newReview = { 
      id: Date.now().toString(),
      name, 
      location, 
      rating, 
      text, 
      role: role || "Customer",
      createdAt: new Date()
    };
    
    // Add to the top of the list
    globalReviews = [newReview, ...globalReviews];
    
    res.status(201).json({ success: true, review: newReview, reviews: globalReviews });
  } catch (err) {
    console.error("Review submission error:", err);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
