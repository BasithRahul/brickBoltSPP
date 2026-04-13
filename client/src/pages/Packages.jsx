import { useEffect } from "react";
import { Link } from "react-router-dom";
import { CheckCircle2, ArrowRight, Phone, MessageSquare } from "lucide-react";
import "./Packages.css";

const plans = [
  {
    id: "basic",
    name: "Basic",
    price: "₹1,800",
    unit: "/sqft",
    popular: false,
    color: "#6b7280",
    desc: "Ideal for budget-conscious construction with quality materials.",
    features: [
      "Standard Grade Materials",
      "Basic Architectural Design",
      "Standard Flooring",
      "Basic Electrical Fittings",
      "Standard Sanitary Ware",
      "Construction Timeline: Standard",
      "Post-Delivery Support: 6 Months",
    ],
    cta: "Get Started",
  },
  {
    id: "classic",
    name: "Classic",
    price: "₹2,200",
    unit: "/sqft",
    popular: true,
    color: "#1a6fc4",
    desc: "Our most popular package — premium quality with stunning design.",
    features: [
      "Premium Grade Materials",
      "3D Design Included",
      "Italian / Vitrified Flooring",
      "Branded Electrical Fittings",
      "Premium Sanitary Ware",
      "Modular Kitchen",
      "Construction Timeline: Expedited",
      "Post-Delivery Support: 12 Months",
    ],
    cta: "Most Popular",
  },
  {
    id: "premium",
    name: "Premium",
    price: "₹2,500+",
    unit: "/sqft",
    popular: false,
    color: "#f59e0b",
    desc: "High-end luxury construction with full customization and finest materials.",
    features: [
      "Luxury Grade Materials",
      "Full 3D + VR Walkthrough",
      "Imported Marble / Hardwood",
      "Smart Home Integration",
      "Designer Sanitary Ware",
      "Full Modular Kitchen & Wardrobes",
      "Landscaping & Exterior Design",
      "Construction Timeline: Priority",
      "Post-Delivery Support: 24 Months",
    ],
    cta: "Go Premium",
  },
];

const addons = [
  { name: "AutoCAD & Structural Drawing", price: "₹15,000 onwards" },
  { name: "3D Exterior Visualization", price: "₹8,000 onwards" },
  { name: "Interior 3D Rendering", price: "₹12,000 onwards" },
  { name: "Soil Testing & Report", price: "₹5,000 onwards" },
  { name: "Building Plan Approval", price: "As per actuals" },
  { name: "Architecture Consultation", price: "₹2,500/hour" },
];

export default function PackagesPage() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.1 }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="packages-page page-enter">
      <section className="page-hero">
        <div className="page-hero__bg">
          <div className="hero__grid" />
          <div className="hero__glow hero__glow--1" />
          <div className="hero__glow hero__glow--2" />
        </div>
        <div className="container page-hero__content">
          <span className="badge">Pricing</span>
          <h1 className="section-title">Transparent <span className="gradient-text">Packages</span></h1>
          <p style={{ color: "var(--text-muted)", maxWidth: 550, margin: "0 auto", fontSize: "1.1rem" }}>
            No hidden costs. We believe in complete pricing transparency.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="section-pad">
        <div className="container">
          <div className="pricing-grid">
            {plans.map((plan, i) => (
              <div key={plan.id}
                className={`pricing-card card reveal${plan.popular ? " pricing-card--popular" : ""}`}
                style={{ transitionDelay: `${i * 0.12}s` }}>
                {plan.popular && <div className="pricing-card__badge">Most Popular</div>}
                <div className="pricing-card__header">
                  <h3 className="pricing-card__name" style={{ color: plan.color }}>{plan.name}</h3>
                  <div className="pricing-card__price">
                    <span className="pricing-card__amount">{plan.price}</span>
                    <span className="pricing-card__unit">{plan.unit}</span>
                  </div>
                  <p className="pricing-card__desc">{plan.desc}</p>
                </div>
                <ul className="pricing-card__features">
                  {plan.features.map((f) => (
                    <li key={f}>
                      <CheckCircle2 size={16} style={{ color: plan.color }} />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/contact" id={`pkg-cta-${plan.id}`}
                  className={`btn ${plan.popular ? "btn-primary" : "btn-outline"} pricing-card__cta`}
                  style={plan.id === "premium" ? { borderColor: plan.color, color: plan.color } : {}}>
                  {plan.cta} <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="section-pad">
        <div className="container">
          <div className="text-center">
            <span className="badge">Extra Services</span>
            <h2 className="section-title">Add-on <span className="gradient-text">Services</span></h2>
            <p className="section-subtitle">Enhance your project with these additional services</p>
          </div>
          <div className="addons-grid">
            {addons.map((a, i) => (
              <div className="addon-card card reveal" key={a.name} style={{ transitionDelay: `${i * 0.08}s` }}>
                <div>
                  <div className="addon-card__name">{a.name}</div>
                  <div className="addon-card__price">{a.price}</div>
                </div>
                <CheckCircle2 size={20} style={{ color: "var(--primary)" }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="section-pad pkg-cta-section">
        <div className="container">
          <div className="pkg-cta-banner card reveal">
            <h2 className="section-title" style={{ margin: 0 }}>
              Not Sure Which <span className="gradient-text">Package?</span>
            </h2>
            <p style={{ color: "var(--text-muted)", maxWidth: 480, margin: "16px auto 0" }}>
              Call us for a free consultation. We'll help you choose the right package for your dream project.
            </p>
            <div className="pkg-cta-actions">
              <a href="tel:+919000100889" className="btn btn-primary">
                <Phone size={18} /> Call Now
              </a>
              <a href="https://wa.me/919000100889" target="_blank" rel="noopener noreferrer" className="btn btn-accent">
                <MessageSquare size={18} /> WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
