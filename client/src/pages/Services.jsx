import { useEffect, useState } from "react";
import { Home, Building2, Factory, Layers, Box, Settings, CheckCircle2 } from "lucide-react";
import "./Services.css";

const categories = [
  {
    id: "civil",
    icon: <Building2 size={32} />,
    title: "Civil Construction",
    color: "#1a6fc4",
    desc: "Complete civil construction services from foundation to finishing, ensuring structural integrity and quality.",
    points: [
      "Residential & commercial foundations",
      "RCC framing and masonry",
      "Brickwork & plastering",
      "Flooring & tiling",
      "Electrical & plumbing works",
      "Painting works",
      "Waterproofing",
    ],
  },
  {
    id: "mechanical",
    icon: <Settings size={32} />,
    title: "Mechanical Works",
    color: "#8b5cf6",
    desc: "Comprehensive mechanical installations covering HVAC and utility systems.",
    points: [
      "HVAC installations",
      "Water supply systems",
      "Fire protection systems",
      "Lift & escalator coordination",
      "Industrial machinery setup",
    ],
  },
  {
    id: "interior",
    icon: <Layers size={32} />,
    title: "Interior Design",
    color: "#ec4899",
    desc: "Innovative and aesthetic interior design solutions that reflect your personality and style.",
    points: [
      "Residential interior design",
      "Modular kitchen & wardrobes",
      "False ceiling & lighting",
      "Wall décor & paint finishes",
      "Office & retail interiors",
    ],
  },
  {
    id: "structural",
    icon: <Layers size={32} />,
    title: "Structural Design",
    color: "#22c55e",
    desc: "Expert structural analysis and design ensuring buildings are safe, durable, and code-compliant.",
    points: [
      "Structural analysis reports",
      "Foundation design",
      "Column & beam design",
      "Load calculations",
      "Seismic design (IS codes)",
      "Retaining wall design",
    ],
  },
  {
    id: "industrial",
    icon: <Factory size={32} />,
    title: "Industrial Projects",
    color: "#ef4444",
    desc: "Large-scale industrial construction with high structural demands and specialized requirements.",
    points: [
      "Warehouse construction",
      "Factory buildings",
      "Industrial sheds",
      "Pre-engineered buildings",
      "Loading dock construction",
      "Fire safety integration",
    ],
  },
  {
    id: "design",
    icon: <Box size={32} />,
    title: "AutoCAD & 3D Design",
    color: "#06b6d4",
    desc: "Professional CAD drafting, 3D modeling, and architectural visualization services.",
    points: [
      "Architectural floor plans",
      "Structural drawings",
      "3D exterior & interior models",
      "Elevation design",
      "Site layout plans",
      "Approval drawings",
    ],
  },
  {
    id: "execution",
    icon: <CheckCircle2 size={32} />,
    title: "Site Execution Works",
    color: "#1a6fc4",
    desc: "Professional site management and technical supervision ensuring projects are executed as per architectural and structural blueprints.",
    points: [
      "Providing of Engineers and Supervisors as per Drawings and Site Implementation",
      "Daily site progress monitoring",
      "Quality control & material verification",
      "Safety protocol enforcement",
      "Vendor coordination & management",
    ],
  },
];

export default function ServicesPage() {
  const [active, setActive] = useState("civil");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.12 }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [active]);

  const activeService = categories.find((c) => c.id === active);

  return (
    <div className="services-page page-enter">
      <section className="page-hero">
        <div className="page-hero__bg">
          <div className="hero__grid" />
          <div className="hero__glow hero__glow--1" />
          <div className="hero__glow hero__glow--2" />
        </div>
        <div className="container page-hero__content">
          <span className="badge">What We Offer</span>
          <h1 className="section-title">Our <span className="gradient-text">Services</span></h1>
          <p style={{ color: "var(--text-muted)", maxWidth: 550, margin: "0 auto", fontSize: "1.1rem" }}>
            End-to-end construction solutions built with precision, quality, and care.
          </p>
        </div>
      </section>

      {/* Service Tabs */}
      <section className="section-pad">
        <div className="container">
          {/* Tab Selector */}
          <div className="service-tabs reveal">
            {categories.map((cat) => (
              <button
                key={cat.id}
                id={`tab-${cat.id}`}
                className={`service-tab${active === cat.id ? " service-tab--active" : ""}`}
                onClick={() => setActive(cat.id)}
                style={active === cat.id ? { borderColor: cat.color, color: cat.color } : {}}
              >
                <span className="service-tab__icon" style={active === cat.id ? { color: cat.color } : {}}>{cat.icon}</span>
                <span>{cat.title}</span>
              </button>
            ))}
          </div>

          {/* Detail Panel */}
          {activeService && (
            <div className="service-detail reveal" key={active}>
              <div className="service-detail__icon" style={{ background: `${activeService.color}18`, color: activeService.color }}>
                {activeService.icon}
              </div>
              <h2 style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 800, fontSize: "1.8rem", marginBottom: 14 }}>
                {activeService.title}
              </h2>
              <p style={{ color: "var(--text-muted)", marginBottom: 28, maxWidth: 600 }}>{activeService.desc}</p>
              <div className="service-detail__points">
                {activeService.points.map((pt) => (
                  <div className="service-detail__point" key={pt}>
                    <CheckCircle2 size={18} style={{ color: activeService.color }} />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* All Services Grid */}
      <section className="section-pad">
        <div className="container">
          <div className="text-center">
            <span className="badge">All Services</span>
            <h2 className="section-title">Complete <span className="gradient-text">Service Portfolio</span></h2>
          </div>
          <div className="services-cards-grid">
            {categories.map((cat, i) => (
              <div className="srv-card card reveal" key={cat.id} style={{ transitionDelay: `${i * 0.08}s` }}>
                <div className="srv-card__icon" style={{ background: `${cat.color}15`, color: cat.color }}>
                  {cat.icon}
                </div>
                <h3 style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 700, marginBottom: 10 }}>{cat.title}</h3>
                <p style={{ color: "var(--text-muted)", fontSize: "0.88rem" }}>{cat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
