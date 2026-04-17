import { useEffect } from "react";
import { Users, Wrench, ShieldCheck, Target, CheckCircle2, Building2, Award, Clock, Trophy, Star, Mail } from "lucide-react";
import venkatImg from "../assets/venkat.jpg";
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

      {/* ── Leadership/Founder Profile ─────────────────────── */}
      <section className="section-pad bg-subtle">
        <div className="container">
          <div className="leadership-card card reveal">
            <div className="leadership-card__img-box">
              <img src={venkatImg} alt="P V V Rama Raju - Proprietor" className="leadership-card__img" />
              <div className="leadership-card__badge">Proprietor</div>
            </div>
            <div className="leadership-card__content">
              <span className="badge">Leadership</span>
              <h2 className="leadership-card__name">P V V Rama Raju</h2>
              <p className="leadership-card__tagline">B.Tech Civil Engineering | 21+ Years Experience</p>
              <div className="leadership-card__divider" />
              <p className="leadership-card__bio">
                As the visionary leader behind Shree Pawanputra Projects, P V V Rama Raju brings over 
                two decades of structural expertise and field experience to every project. 
                Under his guidance, the company has grown from a local proprietorship into 
                a trusted name in Telangana construction, known for zero-defect delivery 
                and absolute transparency.
              </p>
              <div className="leadership-card__commitment">
                <div className="commitment-tag"><CheckCircle2 size={16} /> Field Excellence</div>
                <div className="commitment-tag"><CheckCircle2 size={16} /> Technical Integrity</div>
                <div className="commitment-tag"><CheckCircle2 size={16} /> Client-First Vision</div>
              </div>
              <div className="leadership-card__actions">
                <a href="mailto:info@sreepawanputra.com" className="btn btn-secondary">
                  <Mail size={18} /> Contact Office
                </a>
                <div className="leadership-card__social">
                  <a href="mailto:info@sreepawanputra.com" className="social-link"><Mail size={20} /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Business Card Section ────────────────────────── */}
      <section className="business-card-section reveal">
        <div className="container">
          <div className="text-center" style={{ marginBottom: 40 }}>
            <span className="badge">Digital Reference</span>
            <h2 className="section-title">Official <span className="gradient-text">Business Card</span></h2>
          </div>
          
          <div className="business-card">
            <div className="business-card__header">
              <div className="business-card__branding">
                <div className="business-card__logo-box">
                  <svg width="60" height="60" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M50 5L90 35V45H50V5Z" fill="#1e73be" />
                    <path d="M10 35L50 5V45H18L10 35Z" fill="#ff9900" />
                    <path d="M10 45H90V95H10V45Z" fill="#555555" />
                    <path d="M20 55H42V63H30V68H42V85H20V77H32V71H20V55Z" fill="white" />
                    <path d="M54 55H78V75H64V85H54V55ZM64 63H68V67H64V63Z" fill="white" />
                  </svg>
                </div>
                <div className="business-card__company">SHREE PAWAN PUTRA PROJECTS</div>
                <div className="business-card__caption">Civil, Electrical & Mechanical Constructions</div>
              </div>
              
              <div className="business-card__person">
                <div className="business-card__name">P V V RAMA RAJU</div>
                <div className="business-card__title">Civil Engineer</div>
              </div>
            </div>

            <div className="business-card__contact">
              9000 100 889
            </div>

            <div className="business-card__details">
              <div className="business-card__info-row">
                <span className="business-card__info-label">Office:</span>
                <span className="business-card__info-value">
                  Unit.No.810 & 811, Sy. No.1050, Manjeera Trinity Corporate, JNTU Road, Kukatpally, Hyd.
                </span>
              </div>
              <div className="business-card__info-row">
                <span className="business-card__info-label">Email:</span>
                <span className="business-card__info-value">ramaraju.srkr@gmail.com</span>
              </div>
            </div>

            <div className="business-card__footer">
              <a href="https://www.spprojects.in" className="business-card__website" target="_blank" rel="noopener noreferrer">
                www.spprojects.in
              </a>
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
