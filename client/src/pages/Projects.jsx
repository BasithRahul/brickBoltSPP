import { useEffect, useState } from "react";
import { ArrowRight, Home, Building2, Factory, X } from "lucide-react";
import "./Projects.css";

const projects = [
  { id: 1, title: "3BHK Luxury Villa", category: "Residential", location: "Kukatpally, Hyderabad", area: "2400 sqft", year: "2023", color: "#1a6fc4", icon: <Home size={40} />, desc: "Premium 3BHK villa with Italian marble, modular kitchen, and smart home systems." },
  { id: 2, title: "Tech Park Office Complex", category: "Commercial", location: "HITEC City, Hyderabad", area: "18,000 sqft", year: "2022", color: "#8b5cf6", icon: <Building2 size={40} />, desc: "Modern office complex with open-plan floors, conference rooms, and glass facades." },
  { id: 3, title: "Industrial Warehouse", category: "Industrial", location: "Patancheru, Hyderabad", area: "35,000 sqft", year: "2023", color: "#ef4444", icon: <Factory size={40} />, desc: "Heavy-duty warehouse with loading docks, fire safety systems, and solar roofing." },
  { id: 4, title: "Apartment Complex", category: "Residential", location: "Miyapur, Hyderabad", area: "42,000 sqft", year: "2021", color: "#22c55e", icon: <Home size={40} />, desc: "G+5 residential apartment complex with 24 units, car parking, and full amenities." },
  { id: 5, title: "Commercial Showroom", category: "Commercial", location: "Ameerpet, Hyderabad", area: "6,500 sqft", year: "2022", color: "#f59e0b", icon: <Building2 size={40} />, desc: "Premium showroom with glass-front façade, LED lighting, and modern interiors." },
  { id: 6, title: "Steel Factory Building", category: "Industrial", location: "Jeedimetla, Hyderabad", area: "28,000 sqft", year: "2023", color: "#06b6d4", icon: <Factory size={40} />, desc: "Pre-engineered industrial building for steel manufacturing with overhead cranes." },
  { id: 7, title: "Independent House", category: "Residential", location: "JNTU Road, Hyderabad", area: "1,800 sqft", year: "2023", color: "#1a6fc4", icon: <Home size={40} />, desc: "G+2 independent house with contemporary elevation and vastu-compliant layout." },
  { id: 8, title: "Corporate Office", category: "Commercial", location: "Gachibowli, Hyderabad", area: "12,000 sqft", year: "2022", color: "#8b5cf6", icon: <Building2 size={40} />, desc: "Corporate office with conference hall, executive cabins, and green building features." },
  { id: 9, title: "Cold Storage Facility", category: "Industrial", location: "Patancheru, Hyderabad", area: "15,000 sqft", year: "2021", color: "#ef4444", icon: <Factory size={40} />, desc: "Cold storage facility with insulated panels, refrigeration systems, and dock levelers." },
];

const filters = ["All", "Residential", "Commercial", "Industrial"];

export default function ProjectsPage() {
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState(null);

  const filtered = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.1 }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [filter]);

  return (
    <div className="projects-page page-enter">
      <section className="page-hero">
        <div className="page-hero__bg">
          <div className="hero__grid" />
          <div className="hero__glow hero__glow--1" />
          <div className="hero__glow hero__glow--2" />
        </div>
        <div className="container page-hero__content">
          <span className="badge">Our Work</span>
          <h1 className="section-title">Projects & <span className="gradient-text">Portfolio</span></h1>
          <p style={{ color: "var(--text-muted)", maxWidth: 540, margin: "0 auto", fontSize: "1.1rem" }}>
            100+ projects delivered across Telangana — every one built with pride.
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container">
          {/* Filter Tabs */}
          <div className="proj-filters reveal">
            {filters.map((f) => (
              <button key={f} id={`filter-${f.toLowerCase()}`}
                className={`proj-filter${filter === f ? " proj-filter--active" : ""}`}
                onClick={() => setFilter(f)}>
                {f}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="proj-grid">
            {filtered.map((p, i) => (
              <div key={p.id} className="proj-card card reveal"
                style={{ transitionDelay: `${i * 0.05}s` }}
                onClick={() => setSelected(p)}>
                <div className="proj-card__visual" style={{ background: `${p.color}15` }}>
                  <div className="proj-card__icon" style={{ color: p.color }}>{p.icon}</div>
                  <span className="proj-card__cat badge" style={{ color: p.color, borderColor: `${p.color}40`, background: `${p.color}12` }}>
                    {p.category}
                  </span>
                </div>
                <div className="proj-card__body">
                  <h3 className="proj-card__title">{p.title}</h3>
                  <p className="proj-card__meta">📍 {p.location}</p>
                  <p className="proj-card__meta">📐 {p.area} &nbsp;·&nbsp; 📅 {p.year}</p>
                  <button className="proj-card__link">
                    View Details <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selected && (
        <div className="proj-modal-overlay" onClick={() => setSelected(null)}>
          <div className="proj-modal glass" onClick={(e) => e.stopPropagation()}>
            <button className="proj-modal__close" onClick={() => setSelected(null)} id="modal-close">
              <X size={20} />
            </button>
            <div className="proj-modal__visual" style={{ background: `${selected.color}18` }}>
              <div style={{ color: selected.color }}>{selected.icon}</div>
            </div>
            <div className="proj-modal__body">
              <span className="badge" style={{ color: selected.color, borderColor: `${selected.color}40`, background: `${selected.color}12` }}>
                {selected.category}
              </span>
              <h2>{selected.title}</h2>
              <p style={{ color: "var(--text-muted)", lineHeight: 1.75 }}>{selected.desc}</p>
              <div className="proj-modal__info">
                <div><strong>Location:</strong> {selected.location}</div>
                <div><strong>Area:</strong> {selected.area}</div>
                <div><strong>Year:</strong> {selected.year}</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
