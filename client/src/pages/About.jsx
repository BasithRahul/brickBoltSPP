import { useEffect } from "react";
import { Users, Wrench, ShieldCheck, Target, CheckCircle2, Building2, Award, Clock, Trophy, Star } from "lucide-react";
import "./About.css";

const teamRoles = [
  "Project Lead & Senior Civil Engineer",
  "Site Engineers",
  "AutoCAD & 3D Designers",
  "Structural Design Experts",
  "Elevation Designers",
];

const equipment = [
  "AutoCAD Visualization Software",
  "Quality Checking Tools",
  "Site Measuring Equipment",
  "Safety & PPE Gear",
];

const safety = [
  "PPE (Personal Protective Equipment)",
  "Environmental Safety Guidelines",
  "Site Safety Protocols",
  "Regular Safety Audits",
];

const serviceCategories = [
  {
    title: "Residential",
    items: ["Individual Houses", "Apartments", "Villas", "Row Houses"],
    icon: <Building2 size={28} />,
  },
  {
    title: "Commercial",
    items: ["Office Buildings", "Complexes", "Showrooms", "Hotels"],
    icon: <Building2 size={28} />,
  },
  {
    title: "Industrial",
    items: ["Warehouses", "Industrial Buildings", "Factories", "Plants"],
    icon: <Wrench size={28} />,
  },
  {
    title: "Additional",
    items: ["House Plotting", "Architecture & Design", "Approval Support", "3D Visualization"],
    icon: <Target size={28} />,
  },
];

const achievements = [
  { icon: <Clock size={40} />, value: "21+", label: "Years Experience" },
  { icon: <Trophy size={40} />, value: "40+", label: "Projects Delivered" },
  { icon: <Users size={40} />, value: "500+", label: "Happy Clients" },
  { icon: <Star size={40} />, value: "2018", label: "Established Year" },
];

export default function AboutPage() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.12 }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="about-page page-enter">
      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="about-hero">
        <div className="about-hero__bg">
          <div className="hero__grid" />
          <div className="hero__glow hero__glow--1" />
          <div className="hero__glow hero__glow--2" />
        </div>
        <div className="container about-hero__content">
          <span className="badge">Our Story</span>
          <h1 className="section-title">
            Who We <span className="gradient-text">Are</span>
          </h1>
          <p className="about-hero__desc">
            A professionally managed construction company, building trust since
            2018.
          </p>
        </div>
      </section>

      {/* ── CONTENT ─────────────────────────────────────── */}
      <section className="section-pad">
        <div className="container about-grid">
          <div className="about-text reveal">
            <span className="badge">Trust & Reliability</span>
            <h2 className="section-title" style={{ textAlign: "left", fontSize: "2.4rem" }}>
              Shree Pawanputra <br />
              <span className="gradient-text">Projects</span>
            </h2>
            <p>
              Shree Pawanputra Projects is a professionally managed construction company registered
              under the <strong>Government of Telangana as a Proprietorship (GSTIN: 36BIOPP9227R1Z3)</strong>.
            </p>
            <br />
            <p>
              With <strong>B.Tech Civil Engineering and over 21+ years of experience</strong> in the construction industry, we
              specialize in delivering high-quality residential, commercial, and industrial
              projects. Our foundation is built on <strong>strength, reliability, and customer
              satisfaction</strong>.
            </p>
            <br />
            <p>
              Established in <strong>2018</strong>, our mission is to provide durable and innovative
              construction solutions tailored to each client's unique needs and vision.
            </p>
            <div className="about-commitment">
              <div className="commitment-item">
                <CheckCircle2 size={18} /> Quality Construction
              </div>
              <div className="commitment-item">
                <CheckCircle2 size={18} /> On-Time Delivery
              </div>
              <div className="commitment-item">
                <CheckCircle2 size={18} /> Customer Satisfaction
              </div>
            </div>
          </div>

          <div className="about-stats">
            <div className="about-achievements reveal">
              {achievements.map((a) => (
                <div className="achievement-card card" key={a.label}>
                  <div className="achievement-card__value gradient-text">{a.value}</div>
                  <div className="achievement-card__label">{a.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Team */}
      <section className="section-pad">
        <div className="container">
          <div className="text-center">
            <span className="badge">Our Team</span>
            <h2 className="section-title">The People Behind <span className="gradient-text">Every Project</span></h2>
          </div>
          <div className="team-grid">
            {teamRoles.map((role, i) => (
              <div className="team-card card reveal" key={i} style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="team-card__icon">
                  <Users size={28} />
                </div>
                <p className="team-card__role">{role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Equipment & Safety side by side */}
      <section className="section-pad">
        <div className="container side-by-side">
          <div className="side-card card reveal">
            <div className="side-card__header">
              <Wrench size={28} />
              <h3>Equipment & Tools</h3>
            </div>
            <ul className="check-list">
              {equipment.map((e) => (
                <li key={e}><CheckCircle2 size={16} /> {e}</li>
              ))}
            </ul>
          </div>
          <div className="side-card card reveal">
            <div className="side-card__header">
              <ShieldCheck size={28} />
              <h3>Safety Measures</h3>
            </div>
            <p style={{ color: "var(--text-muted)", marginBottom: 16, fontSize: "0.92rem" }}>
              We strictly follow:
            </p>
            <ul className="check-list">
              {safety.map((s) => (
                <li key={s}><CheckCircle2 size={16} /> {s}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Services Overview */}
      <section className="section-pad">
        <div className="container">
          <div className="text-center">
            <span className="badge">What We Build</span>
            <h2 className="section-title">Our <span className="gradient-text">Service Categories</span></h2>
          </div>
          <div className="about-services-grid">
            {serviceCategories.map((cat, i) => (
              <div className="about-service-card card reveal" key={i} style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="service-card__icon">{cat.icon}</div>
                <h3 style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 700, marginBottom: 14 }}>{cat.title}</h3>
                <ul className="check-list">
                  {cat.items.map((item) => (
                    <li key={item}><CheckCircle2 size={14} /> {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Achievements Banner */}
      <section className="section-pad achievements-banner">
        <div className="container">
          <div className="text-center reveal">
            <Award size={48} style={{ color: "var(--accent)", margin: "0 auto 20px" }} />
            <h2 className="section-title">Our <span className="gradient-text">Achievements</span></h2>
            <p style={{ color: "var(--text-muted)", maxWidth: 600, margin: "0 auto" }}>
              We have successfully executed multiple projects across Telangana and India with
              exceptional client satisfaction and zero-defect delivery standards.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
