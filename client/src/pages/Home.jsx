import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight, Phone, MessageSquare, Home, Building2,
  Factory, Layers, Box, CheckCircle2, Star, ChevronLeft, ChevronRight,
  Trophy, Clock, Users, ShieldCheck, Send
} from "lucide-react";
import "./Home.css";

/* ── Data ──────────────────────────────────────────────── */
const stats = [
  { icon: <Clock size={32} />, value: "21+", label: "Years Experience" },
  { icon: <Trophy size={32} />, value: "40+", label: "Projects Completed" },
  { icon: <Users size={32} />, value: "500+", label: "Happy Clients" },
  { icon: <ShieldCheck size={32} />, value: "100%", label: "Quality Assured" },
];

const services = [
  { icon: <Home size={28} />, title: "Residential Construction", desc: "Individual homes, villas, and apartments built with precision and care." },
  { icon: <Building2 size={28} />, title: "Commercial Buildings", desc: "Office complexes, malls, and commercial spaces tailored to your business." },
  { icon: <Factory size={28} />, title: "Industrial Projects", desc: "Warehouses, factories, and industrial buildings with structural excellence." },
  { icon: <Layers size={28} />, title: "Interior Design", desc: "Innovative and aesthetic interior design solutions for modern living spaces." },
  { icon: <Layers size={28} />, title: "Structural Design", desc: "Expert structural planning and engineering for buildings of all scales." },
  { icon: <Box size={28} />, title: "AutoCAD & 3D Design", desc: "Detailed AutoCAD drawings, 3D visualizations, and elevation designs." },
];

const steps = [
  { num: "01", title: "Connect with Us", desc: "Reach out via call, WhatsApp or our website form." },
  { num: "02", title: "Requirement Analysis", desc: "Our experts understand your vision, budget & timeline." },
  { num: "03", title: "Design Approval", desc: "Detailed plans, 3D models & blueprints for your approval." },
  { num: "04", title: "Construction Execution", desc: "Skilled team builds with quality materials & safety protocols." },
  { num: "05", title: "Final Delivery", desc: "Handover with zero-defect guarantee and full documentation." },
];

const initialTestimonials = [
  { name: "Rajesh Kumar", location: "Hyderabad", rating: 5, text: "Excellent work! Shree Pawanputra Projects built our 3BHK house on time and within budget. The quality of construction is outstanding.", role: "Homeowner" },
  { name: "Priya Reddy", location: "Kukatpally", rating: 5, text: "Very professional team. The 3D design they provided matched exactly what was constructed. Highly recommend for commercial projects.", role: "Business Owner" },
  { name: "Venkat Rao", location: "JNTU Road", rating: 5, text: "I hired them for my warehouse construction. The structural quality and timely delivery exceeded my expectations. Great team!", role: "Entrepreneur" },
  { name: "Sita Devi", location: "Miyapur", rating: 5, text: "From blueprint to handover, the team was transparent and professional. Best construction company in Hyderabad.", role: "Homeowner" },
];

/* ── Component ─────────────────────────────────────────── */
export default function HomePage() {
  const [reviewsList, setReviewsList] = useState(initialTestimonials);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", service: "", message: "" });
  const [formStatus, setFormStatus] = useState("");
  const [reviewForm, setReviewForm] = useState({ name: "", location: "", rating: 0, text: "", role: "Homeowner" });
  const [showReviewForm, setShowReviewForm] = useState(false);
  const heroRef = useRef(null);

  // Parallax hero
  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        heroRef.current.style.transform = `translateY(${window.scrollY * 0.3}px)`;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fetch reviews from server
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await fetch("/api/reviews");
        if (res.ok) {
          const data = await res.json();
          if (data && data.length > 0) {
            setReviewsList(data);
          }
        }
      } catch (err) {
        console.error("Failed to fetch reviews", err);
      }
    };
    fetchReviews();
  }, []);

  // Auto-rotate testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      if (reviewsList.length > 0) {
        setCurrentTestimonial((c) => (c + 1) % reviewsList.length);
      }
    }, 4500);
    return () => clearInterval(timer);
  }, [reviewsList.length]);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.12 }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleReviewSubmit = async (e) => {
    e.preventDefault();
    if (!reviewForm.name || !reviewForm.text || reviewForm.rating === 0) {
      alert("Please provide a rating, your name, and a review.");
      return;
    }
    
    try {
      // Save globally to backend first
      const res = await fetch("/api/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(reviewForm),
      });

      if (res.ok) {
        const data = await res.json();
        // Update UI with the actual database record
        setReviewsList((prev) => [data.review, ...prev]);
        setReviewForm({ name: "", location: "", rating: 0, text: "", role: "Homeowner" });
        setShowReviewForm(false);
        setCurrentTestimonial(0);
        
        // Show success message to the user
        alert("Review added successfully!");
      } else {
        alert("Failed to submit review. Please try again.");
      }
    } catch (err) {
      console.error("Failed to submit review", err);
      alert("Error submitting review. Please try again later.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus("loading");
    try {
      const res = await fetch("https://formsubmit.co/ajax/sppprojects9@gmail.com", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setFormStatus("success");
        setFormData({ name: "", phone: "", email: "", service: "", message: "" });
      } else throw new Error();
    } catch {
      setFormStatus("error");
    }
    setTimeout(() => setFormStatus(""), 4000);
  };

  return (
    <div className="home">
      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="hero">
        <div className="hero__bg" ref={heroRef}>
          <div className="hero__grid" />
          <div className="hero__glow hero__glow--1" />
          <div className="hero__glow hero__glow--2" />
          <div className="hero__glow hero__glow--3" />
        </div>
        <div className="container hero__content">
          <div className="hero__badge badge animate-fadeUp">
            ✦ Registered Proprietorship · Govt of Telangana ✦
          </div>
          <h1 className="hero__title animate-fadeUp anim-delay-1">
            Build Your<br />
            <span className="gradient-text">Dream Project</span><br />
            with Confidence
          </h1>
          <p className="hero__subtitle animate-fadeUp anim-delay-2">
            B.Tech Civil Engineering — Civil, Electrical & Mechanical Experts — 21+ Years of Trust
          </p>
          <div className="hero__ctas animate-fadeUp anim-delay-3">
            <Link to="/contact" className="btn btn-primary hero__cta-btn">
              Get Free Consultation <ArrowRight size={18} />
            </Link>
            <a href="https://wa.me/919000100889" target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
              <MessageSquare size={18} /> WhatsApp
            </a>
          </div>

          {/* Floating badge cards */}
          <div className="hero__badges animate-fadeUp anim-delay-4">
            <div className="hero__badge-card glass">
              <Star size={16} className="hero__badge-star" />
              <span>4.9 ⭐ Rating</span>
            </div>
            <div className="hero__badge-card glass">
              <CheckCircle2 size={16} className="hero__badge-check" />
              <span>ISO Certified</span>
            </div>
            <div className="hero__badge-card glass">
              <ShieldCheck size={16} className="hero__badge-shield" />
              <span>Quality Guarantee</span>
            </div>
          </div>
        </div>
        <div className="hero__scroll-indicator">
          <div className="hero__scroll-dot" />
        </div>
      </section>

      {/* ── STATS ────────────────────────────────────────── */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((s, i) => (
              <div className="stat-card reveal" key={i} style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="stat-card__icon">{s.icon}</div>
                <div className="stat-card__value">{s.value}</div>
                <div className="stat-card__label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ─────────────────────────────────────── */}
      <section className="section-pad services-section">
        <div className="container">
          <div className="text-center">
            <span className="badge">What We Do</span>
            <h2 className="section-title">Our Core <span className="gradient-text">Services</span></h2>
            <p className="section-subtitle">End-to-end construction solutions from concept to completion</p>
          </div>
          <div className="services-grid">
            {services.map((s, i) => (
              <div className="service-card card reveal" key={i} style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="service-card__icon">{s.icon}</div>
                <h3 className="service-card__title">{s.title}</h3>
                <p className="service-card__desc">{s.desc}</p>
                <Link to="/services" className="service-card__link">
                  Learn More <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────────── */}
      <section className="section-pad process-section">
        <div className="container">
          <div className="text-center">
            <span className="badge">Our Process</span>
            <h2 className="section-title">How It <span className="gradient-text">Works</span></h2>
            <p className="section-subtitle">A transparent and streamlined construction journey</p>
          </div>
          <div className="process-steps">
            {steps.map((step, i) => (
              <div className="process-step reveal" key={i} style={{ transitionDelay: `${i * 0.12}s` }}>
                <div className="process-step__number">{step.num}</div>
                <div className="process-step__connector" />
                <div className="process-step__body">
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ────────────────────────────────── */}
      <section className="section-pad why-section">
        <div className="container why-container">
          <div className="why-left reveal">
            <span className="badge">Why Choose Us</span>
            <h2 className="section-title" style={{ textAlign: "left", margin: "0 0 24px" }}>
              Trusted by <span className="gradient-text">Hundreds</span> of Families
            </h2>
            <p style={{ color: "var(--text-muted)", marginBottom: 32, lineHeight: 1.8 }}>
              With B.Tech Civil Engineering and 21+ years of dedicated service and a passionate team of engineers and designers, we deliver projects that stand the test of time. We are registered under Govt. of Telangana as a trusted Proprietorship.
            </p>
            <ul className="why-list">
              {["Government Registered Proprietorship", "21+ Years Track Record", "PPE & Site Safety Compliance", "On-Time Project Delivery", "Post-Handover Support"].map((item) => (
                <li key={item}><CheckCircle2 size={18} /> {item}</li>
              ))}
            </ul>
            <Link to="/about" className="btn btn-primary" style={{ marginTop: 32 }}>
              Know More About Us <ArrowRight size={16} />
            </Link>
          </div>
          <div className="why-right reveal">
            <div className="why-visual">
              <div className="why-visual__inner">
                <Building2 size={96} className="why-visual__icon" />
                <div className="why-visual__ring why-visual__ring--1" />
                <div className="why-visual__ring why-visual__ring--2" />
                <div className="why-visual__ring why-visual__ring--3" />
              </div>
              <div className="why-float-card why-float-card--1 glass">
                <Trophy size={22} /> <span>40+ Projects</span>
              </div>
              <div className="why-float-card why-float-card--2 glass">
                <Star size={22} className="hero__badge-star" /> <span>4.9 Rating</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────── */}
      <section className="section-pad testimonials-section">
        <div className="container">
          <div className="text-center">
            <span className="badge">Client Reviews</span>
            <h2 className="section-title">What Our <span className="gradient-text">Clients Say</span></h2>
          </div>
          <div className="testimonials-slider">
            {reviewsList.length > 0 && (
              <div className="testimonial-card glass reveal">
                <div className="testimonial-card__stars">
                  {[...Array(Number(reviewsList[currentTestimonial]?.rating) || 5)].map((_, i) => (
                    <Star key={i} size={18} fill="currentColor" />
                  ))}
                </div>
                <p className="testimonial-card__text">"{reviewsList[currentTestimonial]?.text}"</p>
                <div className="testimonial-card__author">
                  <div className="testimonial-card__avatar">
                    {reviewsList[currentTestimonial]?.name?.[0] || "U"}
                  </div>
                  <div>
                    <div className="testimonial-card__name">{reviewsList[currentTestimonial]?.name}</div>
                    <div className="testimonial-card__loc">{reviewsList[currentTestimonial]?.location} · {reviewsList[currentTestimonial]?.role}</div>
                  </div>
                </div>
              </div>
            )}
            <div className="testimonial-nav">
              <button onClick={() => setCurrentTestimonial((c) => (c - 1 + reviewsList.length) % reviewsList.length)} id="testimonial-prev">
                <ChevronLeft size={20} />
              </button>
              <div className="testimonial-dots">
                {reviewsList.map((_, i) => (
                  <button key={i} className={`dot${i === currentTestimonial ? " dot--active" : ""}`}
                    onClick={() => setCurrentTestimonial(i)} />
                ))}
              </div>
              <button onClick={() => setCurrentTestimonial((c) => (c + 1) % reviewsList.length)} id="testimonial-next">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          {/* Add Review Section */}
          <div className="add-review-section reveal" style={{ marginTop: 40, textAlign: "center" }}>
            {!showReviewForm ? (
              <button onClick={() => setShowReviewForm(true)} className="btn btn-primary" style={{ margin: "0 auto" }}>
                <Star size={16} /> Leave a Review
              </button>
            ) : (
              <form className="add-review-form card" onSubmit={handleReviewSubmit} style={{ maxWidth: 600, margin: "0 auto", textAlign: "left" }}>
                <h3 style={{ marginBottom: 16 }}>Share your experience</h3>
                <div className="form-group" style={{ marginBottom: 16 }}>
                  <label style={{ display: 'block', marginBottom: 8, fontSize: '0.9rem', color: 'var(--text-muted)' }}>Rating</label>
                  <div style={{ display: "flex", gap: 8, cursor: "pointer" }}>
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star 
                        key={star} 
                        size={28} 
                        fill={star <= reviewForm.rating ? "var(--primary)" : "none"}
                        color={star <= reviewForm.rating ? "var(--primary)" : "var(--text-muted)"}
                        onClick={() => setReviewForm({ ...reviewForm, rating: star })}
                      />
                    ))}
                  </div>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
                  <input type="text" placeholder="Your Name *" required value={reviewForm.name} onChange={(e) => setReviewForm({ ...reviewForm, name: e.target.value })} style={{ padding: '12px 16px', borderRadius: 8, border: "1px solid var(--border)", width: "100%", background: 'var(--glass-bg)', color: 'var(--text)' }} />
                  <input type="text" placeholder="Location (e.g., Hyderabad)" value={reviewForm.location} onChange={(e) => setReviewForm({ ...reviewForm, location: e.target.value })} style={{ padding: '12px 16px', borderRadius: 8, border: "1px solid var(--border)", width: "100%", background: 'var(--glass-bg)', color: 'var(--text)' }} />
                </div>
                <textarea placeholder="Write your review here... *" required value={reviewForm.text} onChange={(e) => setReviewForm({ ...reviewForm, text: e.target.value })} style={{ width: "100%", padding: '12px 16px', borderRadius: 8, border: "1px solid var(--border)", minHeight: 120, marginBottom: 24, background: 'var(--glass-bg)', color: 'var(--text)', resize: 'vertical' }} />
                <div style={{ display: "flex", gap: 12, justifyContent: "flex-end" }}>
                  <button type="button" className="btn" onClick={() => setShowReviewForm(false)} style={{ background: "transparent", color: "var(--text)", border: "1px solid var(--border)" }}>Cancel</button>
                  <button type="submit" className="btn btn-primary">Submit Review</button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ── LEAD FORM ─────────────────────────────────────── */}
      <section className="section-pad lead-section">
        <div className="container">
          <div className="lead-wrapper">
            <div className="lead-left reveal">
              <span className="badge">Get In Touch</span>
              <h2 className="section-title" style={{ textAlign: "left" }}>
                Start Your <span className="gradient-text">Project Today</span>
              </h2>
              <p style={{ color: "var(--text-muted)", lineHeight: 1.8 }}>
                Fill in the form and our team will reach out within 24 hours with a free consultation.
              </p>
              <div style={{ marginTop: 28 }}>
                <a href="tel:+919000100889" className="btn btn-primary" style={{ width: "100%", justifyContent: "center", marginBottom: 12 }}>
                  <Phone size={18} /> Call: +91 90001 00889
                </a>
                <a href="https://wa.me/919000100889" target="_blank" rel="noopener noreferrer"
                  className="btn btn-whatsapp" style={{ width: "100%", justifyContent: "center" }}>
                  <MessageSquare size={18} /> WhatsApp Now
                </a>
              </div>
            </div>
            <form className="lead-form card reveal" onSubmit={handleSubmit}>
              <h3 className="lead-form__title">Free Consultation</h3>
              <div className="lead-form__grid">
                <input id="lead-name" type="text" placeholder="Your Name *" required
                  value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                <input id="lead-phone" type="tel" placeholder="Phone Number *" required
                  value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
                <input id="lead-email" type="email" placeholder="Email Address"
                  value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                <select id="lead-service" value={formData.service} onChange={(e) => setFormData({ ...formData, service: e.target.value })}>
                  <option value="">Select Service</option>
                  <option>Residential Construction</option>
                  <option>Commercial Buildings</option>
                  <option>Industrial Projects</option>
                  <option>Interior Design</option>
                  <option>Structural Design</option>
                  <option>AutoCAD & 3D Design</option>
                </select>
              </div>
              <textarea id="lead-message" placeholder="Tell us about your project..."
                value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} />
              <button type="submit" id="lead-submit" className="btn btn-primary lead-form__submit" disabled={formStatus === "loading"}>
                {formStatus === "loading" ? "Sending..." : <><Send size={16} /> Send Request</>}
              </button>
              {formStatus === "success" && <p className="lead-form__msg lead-form__msg--success">✅ We'll contact you within 24 hours!</p>}
              {formStatus === "error" && <p className="lead-form__msg lead-form__msg--error">❌ Failed to send. Please call us directly.</p>}
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
