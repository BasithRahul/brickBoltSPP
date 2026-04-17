import { useEffect, useState } from "react";
import { ArrowRight, Home, Building2, Factory, X, ChevronLeft, ChevronRight } from "lucide-react";
import "./Projects.css";

const projects = [
  { 
    id: 1, 
    title: "Vasanth Nagar Residence", 
    category: "Residential", 
    location: "Plot no: 733, Vasanth nagar, Road no: 21, near Kukatpally Housing Board, Hyderabad.", 
    area: "G + 4 Floors", 
    year: "Ongoing", 
    color: "#1a6fc4", 
    images: [
      "/projects/address1/img1.jpeg",
      "/projects/address1/img2.jpeg"
    ],
    desc: "A sleek, modern residential building in Vasanth Nagar featuring a unique geometric facade. This project showcases our commitment to aesthetic excellence and functional structural design." 
  },
  { 
    id: 3, 
    title: "Nallagandla Residence", 
    category: "Residential", 
    location: "Plot no. MIG 533, Nallagandla 167 sq.yds.", 
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
    location: "Plot no. MIG 774, Nallagandla 258 sq.yds.", 
    area: "4 Floors (3 BHK each) - Completed", 
    year: "", 
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
    category: "Guest House", 
    location: "Plot no. MIG 532, Nallagandla HUDA layout", 
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
    title: "Goutam Model School", 
    category: "Commercial", 
    location: "Nallagandla 620 sq.yds.", 
    area: "Parking + 5 Floors (PT Beams) - Completed", 
    year: "", 
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
    year: "Completed", 
    color: "#1a6fc4", 
    images: [
      "/projects/Adress10/img3.jpeg",
      "/projects/Adress10/img4.jpeg",
      "/projects/Adress10/img5.jpeg"
    ],
    desc: "A massive 300 sq.yds residential project at Ayyappa Society. The development features 6 floors and a penthouse, with each floor housing multiple units (2x2BHK and 2x1BHK), optimized for maximum occupancy and modern living." 
  },
  { 
    id: 10, 
    title: "Nallagandla Double Duplex", 
    category: "Residential", 
    location: "Nallagandla 258 SQ.YD, PLOT NO. MIG-533", 
    area: "Double Duplex House", 
    year: "Ongoing", 
    color: "#22c55e", 
    images: [
      "/projects/New Nallagandla/shared image.jpg",
      "/projects/New Nallagandla/shared image (1).jpg",
      "/projects/New Nallagandla/shared image (2).jpg"
    ],
    desc: "A prestigious residential development in Nallagandla featuring a double duplex house on a 258 SQ.YD plot. Designed for maximum space utilization and premium living experience." 
  },
  { 
    id: 11, 
    title: "Vizag Layout Venture", 
    category: "Ventures", 
    location: "Vizag layout", 
    area: "Luxury Residential Venture", 
    year: "Ongoing", 
    color: "#f59e0b", 
    images: [
      "/projects/venture/shared image (3).jpg",
      "/projects/venture/shared image (4).jpg",
      "/projects/venture/shared image (5).jpg",
      "/projects/venture/shared image (6).jpg",
      "/projects/venture/shared image (7).jpg"
    ],
    desc: "A sprawling luxury venture located in a prime Vizag layout. This project focuses on high-end infrastructure, landscaping, and community-centric urban planning." 
  },
  { 
    id: 12, 
    title: "Fab India Commercial", 
    category: "Commercial", 
    location: "Commercial HIG 92/C", 
    area: "Parking + 5 Floors - Completed", 
    year: "", 
    color: "#8b5cf6", 
    images: ["/projects/fab india/shared image (10).jpg"],
    desc: "A significant commercial project for Fab India featuring a Parking + 5 floor structure. Designed for premium retail and commercial space utilization in a prime HIG location." 
  },
  { 
    id: 13, 
    title: "Chennai Airport Hanger", 
    category: "Ventures", 
    location: "Arrakonam, near Chennai", 
    area: "200' x 200' opening, Height 100'", 
    year: "Completed", 
    color: "#f59e0b", 
    images: ["/projects/airport/shared image (11).jpg"],
    desc: "A monumental aviation infrastructure venture featuring a massive airport hanger with 200' x 200' openings and 100' height. Specialized structural engineering for large-scale industrial projects." 
  },
  { 
    id: 14, 
    title: "Nallagandla HIG 97/E Residence", 
    category: "Residential", 
    location: "Nallagandla HIG 97/E", 
    area: "517 sq.yds., Parking + 5 Floors", 
    year: "Completed", 
    color: "#1a6fc4", 
    images: [
      "/projects/new_1/image.jpg",
      "/projects/new_1/image.png"
    ],
    desc: "A premium residential development at Nallagandla HIG 97/E featuring a Parking + 5 floor structure on a 517 sq.yds plot. Each floor is meticulously designed to house two spacious 3BHK units." 
  },
  { 
    id: 15, 
    title: "LB Nagar Residential Development", 
    category: "Residential", 
    location: "LB Nagar", 
    area: "400 sq.yds., Parking + 5 Floors", 
    year: "Completed", 
    color: "#1a6fc4", 
    images: [
      "/projects/new_2/image (1).png",
      "/projects/new_2/image (2).png"
    ],
    desc: "An upcoming residential development in LB Nagar on a 400 sq.yds plot. Featuring a Parking + 5 floor structure, each floor consists of two well-designed 2BHK flats, optimized for urban living." 
  },
  { 
    id: 16, 
    title: "Sriram Nagar Residential Development", 
    category: "Residential", 
    location: "Sriram Nagar, Kondapur", 
    area: "200 sq.yds., Parking + 3 Floors", 
    year: "Completed", 
    color: "#1a6fc4", 
    images: [
      "/projects/new_3/image.png",
      "/projects/new_3/image (1).png"
    ],
    desc: "A boutique residential project in Sriram Nagar, Kondapur on a 200 sq.yds plot. This development features a Parking + 3 floor structure, with each floor dedicated to a spacious 3BHK flat, combining comfort with modern urban design." 
  },
];

const filters = ["All", "Residential", "Commercial", "Guest House", "Ventures"];

export default function ProjectsPage() {
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState(null);
  const [modalImgIdx, setModalImgIdx] = useState(0);
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

  // Reset modal image index when selection changes
  useEffect(() => {
    setModalImgIdx(0);
  }, [selected]);

  const nextModalImg = (e) => {
    e.stopPropagation();
    if (!selected.images) return;
    setModalImgIdx((prev) => (prev + 1) % selected.images.length);
  };

  const prevModalImg = (e) => {
    e.stopPropagation();
    if (!selected.images) return;
    setModalImgIdx((prev) => (prev === 0 ? selected.images.length - 1 : prev - 1));
  };

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
    <>
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
              40+ projects delivered across Telangana — every one built with pride.
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
      </div>

      {/* Modal - Moved outside transformed container */}
      {selected && (
        <div className="proj-modal-overlay" onClick={() => setSelected(null)}>
          <div className="proj-modal card" onClick={(e) => e.stopPropagation()}>
            <button className="proj-modal__close" onClick={() => setSelected(null)} id="modal-close">
              <X size={20} />
            </button>
            <div className="proj-modal__container">
              {/* Image Slider (Left) */}
              <div className="proj-modal__slider">
                {selected.images && selected.images.length > 0 ? (
                  <>
                    <img src={selected.images[modalImgIdx]} alt={selected.title} className="proj-modal__slider-img" />
                    {selected.images.length > 1 && (
                      <div className="proj-modal__slider-nav">
                        <button className="proj-modal__slider-btn" onClick={prevModalImg}>
                          <ChevronLeft size={24} />
                        </button>
                        <button className="proj-modal__slider-btn" onClick={nextModalImg}>
                          <ChevronRight size={24} />
                        </button>
                      </div>
                    )}
                    <div className="proj-modal__slider-counter">
                      {modalImgIdx + 1} / {selected.images.length}
                    </div>
                  </>
                ) : (
                  <div className="proj-modal__placeholder" style={{ background: `${selected.color}15` }}>
                    <Building2 size={64} style={{ color: selected.color }} />
                  </div>
                )}
              </div>

              {/* Project Details (Right) */}
              <div className="proj-modal__details">
                <div className="proj-modal__header">
                  <span className="badge" style={{ 
                    color: selected.color, 
                    borderColor: `${selected.color}40`, 
                    background: `${selected.color}12` 
                  }}>
                    {selected.category}
                  </span>
                  <h2 className="proj-modal__title">{selected.title}</h2>
                </div>
                
                <div className="proj-modal__body">
                  <p className="proj-modal__desc">{selected.desc}</p>
                  
                  <div className="proj-modal__meta">
                    <div className="proj-modal__meta-item">
                      <span className="label">Location</span>
                      <span className="value">{selected.location}</span>
                    </div>
                    <div className="proj-modal__meta-item">
                      <span className="label">Scope/Size</span>
                      <span className="value">{selected.area}</span>
                    </div>
                    {selected.year && (
                      <div className="proj-modal__meta-item">
                        <span className="label">Project Year</span>
                        <span className="value">{selected.year}</span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="proj-modal__footer">
                  <a href="tel:+919000100889" className="btn btn-primary">
                    Enquire Now <ArrowRight size={18} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
