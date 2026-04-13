import { useEffect, useState } from "react";
import { ArrowRight, Home, Building2, Factory, X, ChevronLeft, ChevronRight } from "lucide-react";
import "./Projects.css";

const projects = [
  { 
    id: 1, 
    title: "Vasanth Nagar Site", 
    category: "Residential", 
    location: "1) Vasanth Nagar site", 
    area: "5 Floors, Each Floor 3BHK flats", 
    year: "Ongoing", 
    color: "#1a6fc4", 
    images: [
      "/projects/address1/img1.jpeg",
      "/projects/address1/img2.jpeg",
      "/projects/address1/img3.jpeg",
      "/projects/address1/img4.jpeg",
      "/projects/address1/img5.jpeg"
    ],
    desc: "Premium residential project in Vasanth Nagar featuring 5 floors with spacious 3BHK flats on each level. Modern construction with high-end structural integrity." 
  },
  { 
    id: 2, 
    title: "Vasanth Nagar Residence", 
    category: "Residential", 
    location: "Plot no: 733, Vasanth nagar, Road no: 21, near Kukatpally Housing Board, Hyderabad.", 
    area: "G + 4 Floors", 
    year: "2024", 
    color: "#1a6fc4", 
    images: [
      "/projects/vasanth-nagar/img1.jpg",
      "/projects/vasanth-nagar/img2.jpg"
    ],
    desc: "A sleek, modern residential building featuring a unique geometric facade. This project showcases our commitment to aesthetic excellence and functional design." 
  },
  { 
    id: 3, 
    title: "Nallagandla Residence", 
    category: "Residential", 
    location: "Nallagandla 167 sq.yds.", 
    area: "5 Floors + Penthouse (2BHK each)", 
    year: "Ongoing", 
    color: "#1a6fc4", 
    images: [
      "/projects/nallagandla-167/image1.jpeg",
      "/projects/nallagandla-167/image2.jpeg"
    ],
    desc: "A significant residential development on 167 sq.yds featuring 5 floors and a penthouse. Each floor is designed as a spacious 2BHK flat, maximizing space and ventilation." 
  },
  { 
    id: 4, 
    title: "Skanda Hospital Building", 
    category: "Commercial", 
    location: "Mig-140, Nallagandla HUDA layout", 
    area: "Site Area: 258 sq.yds.", 
    year: "2023", 
    color: "#8b5cf6", 
    images: [
      "/projects/Skanda/img1.jpeg",
      "/projects/Skanda/img2.jpeg",
      "/projects/Skanda/img3.jpeg"
    ],
    desc: "A specialized commercial construction project for a hospital facility. Optimized for medical operations with structural support for high-end equipment and patient flow." 
  },
  { 
    id: 5, 
    title: "Nallagandla Residential", 
    category: "Residential", 
    location: "Nallagandla 258 sq.yds.", 
    area: "4 Floors (3 BHK each)", 
    year: "Ongoing", 
    color: "#22c55e", 
    images: [
      "/projects/address5/img1.jpeg",
      "/projects/address5/img2.jpeg"
    ],
    desc: "A spacious residential 4-floor development situated on a 258 sq.yds plot. Each floor is meticulously designed to house a premium 3 BHK flat with modern amenities." 
  },
  { 
    id: 6, 
    title: "Nallagandla Guest House", 
    category: "Residential", 
    location: "Guesthouse, at Nallagandla HUDA layout", 
    area: "Total Area: 258 sq.yds.", 
    year: "2023", 
    color: "#06b6d4", 
    images: [
      "/projects/guest-house/img1.jpeg",
      "/projects/guest-house/img2.jpeg"
    ],
    desc: "A beautifully constructed guesthouse located in the prestigious Nallagandla HUDA layout. Designed for hospitality and comfort, featuring high-end finishes and efficient space planning." 
  },
  { 
    id: 7, 
    title: "Goutam Mondal School", 
    category: "Commercial", 
    location: "Nallagandla 620 sq.yds.", 
    area: "Parking + 5 Floors (PT Beams)", 
    year: "Ongoing", 
    color: "#1a6fc4", 
    images: [
      "/projects/nallagandla-school/img1.jpeg",
      "/projects/nallagandla-school/img2.jpeg"
    ],
    desc: "A major educational project in Nallagandla on a 620 sq.yds plot. Featuring a modern PT Beams normal slab structure with parking and 5 floors, designed for a high-capacity school building." 
  },
  { 
    id: 8, 
    title: "Kollur Commercial Building", 
    category: "Commercial", 
    location: "Kollur Commercial building, 1200 sq.yds.", 
    area: "Cellar + G + 4 Floors (PT Slab)", 
    year: "Ongoing", 
    color: "#8b5cf6", 
    images: [
      "/projects/Address8/img1.jpeg",
      "/projects/Address8/img2.jpeg",
      "/projects/Address8/img3.jpeg",
      "/projects/Address8/img4.jpeg",
      "/projects/Address8/img5.jpeg"
    ],
    desc: "A significant commercial construction project in Kollur spanning 1200 sq.yds. Featuring a robust Cellar + G + 4 floor structure using PT slab technology, currently under construction." 
  },
  { 
    id: 9, 
    title: "Ayyappa Society Residence", 
    category: "Residential", 
    location: "Ayyappa Society 300 sq.yds.", 
    area: "6 Floors + Penthouse", 
    year: "Ongoing", 
    color: "#1a6fc4", 
    images: [
      "/projects/Adress10/img1.jpeg",
      "/projects/Adress10/img2.jpeg",
      "/projects/Adress10/img3.jpeg",
      "/projects/Adress10/img4.jpeg",
      "/projects/Adress10/img5.jpeg"
    ],
    desc: "A massive 300 sq.yds residential project at Ayyappa Society. The development features 6 floors and a penthouse, with each floor housing multiple units (2x2BHK and 2x1BHK), optimized for maximum occupancy and modern living." 
  },
];

const filters = ["All", "Residential", "Commercial"];

export default function ProjectsPage() {
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState(null);
  const [cardIndices, setCardIndices] = useState({});

  const filtered = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.1 }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [filter]);

  const handleNext = (e, p) => {
    e.stopPropagation();
    if (!p.images || p.images.length <= 1) return;
    setCardIndices(prev => ({
      ...prev,
      [p.id]: (prev[p.id] === undefined ? 0 : prev[p.id] + 1) % p.images.length
    }));
  };

  const handlePrev = (e, p) => {
    e.stopPropagation();
    if (!p.images || p.images.length <= 1) return;
    setCardIndices(prev => ({
      ...prev,
      [p.id]: (prev[p.id] === undefined || prev[p.id] === 0 ? p.images.length - 1 : prev[p.id] - 1)
    }));
  };

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
            {filtered.map((p, i) => {
              const activeIdx = cardIndices[p.id] || 0;
              const hasImages = p.images && p.images.length > 0;
              
              return (
                <div key={p.id} className="proj-card card reveal"
                  style={{ transitionDelay: `${i * 0.05}s` }}
                  onClick={() => setSelected(p)}>
                  <div className="proj-card__visual" style={{ background: hasImages ? "none" : `${p.color}15` }}>
                    {hasImages ? (
                      <>
                        <img src={p.images[activeIdx]} alt={p.title} className="proj-card__img" />
                        {p.images.length > 1 && (
                          <div className="proj-card__nav">
                            <button className="proj-card__nav-btn" onClick={(e) => handlePrev(e, p)}>
                              <ChevronLeft size={16} />
                            </button>
                            <button className="proj-card__nav-btn" onClick={(e) => handleNext(e, p)}>
                              <ChevronRight size={16} />
                            </button>
                          </div>
                        )}
                      </>
                    ) : (
                      <div className="proj-card__icon" style={{ color: p.color }}>{p.icon}</div>
                    )}
                  </div>
                  <div className="proj-card__body">
                    <h3 className="proj-card__title">{p.title}</h3>
                    <p className="proj-card__meta">📍 {p.location}</p>
                    <p className="proj-card__meta">📐 {p.area}</p>
                    <button className="proj-card__link">
                      View Details <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              );
            })}
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
            <div className="proj-modal__visual-container">
              {selected.images && selected.images.length > 0 ? (
                <div className="proj-modal__gallery">
                  {selected.images.map((img, idx) => (
                    <img key={idx} src={img} alt={`${selected.title} ${idx + 1}`} className="proj-modal__img" />
                  ))}
                </div>
              ) : (
                <div className="proj-modal__visual" style={{ background: `${selected.color}18` }}>
                  <div style={{ color: selected.color }}>{selected.icon}</div>
                </div>
              )}
            </div>
            <div className="proj-modal__body">
              <span className="badge" style={{ color: selected.color, borderColor: `${selected.color}40`, background: `${selected.color}12` }}>
                {selected.category}
              </span>
              <h2>{selected.title}</h2>
              <p style={{ color: "var(--text-muted)", lineHeight: 1.75 }}>{selected.desc}</p>
              <div className="proj-modal__info">
                <div><strong>Location:</strong> {selected.location}</div>
                <div><strong>Details:</strong> {selected.area}</div>
                <div><strong>Year:</strong> {selected.year}</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
