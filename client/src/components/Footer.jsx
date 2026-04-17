import { Link } from "react-router-dom";
import {
  Building2, Phone, Mail, MapPin, ArrowRight
} from "lucide-react";
import "./Footer.css";

// Inline social icons to avoid lucide-react version issues
const FacebookIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);
const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);
const YoutubeIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.54C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/>
  </svg>
);
const TwitterIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
  </svg>
);

const quickLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/packages", label: "Packages" },
  { to: "/contact", label: "Contact" },
];

const services = [
  "Residential Construction",
  "Commercial Buildings",
  "Industrial Projects",
  "Structural Design",
  "AutoCAD & 3D Design",
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top container">
        <div className="footer__brand">
          <div className="footer__logo">
            <div className="footer__logo-box">
              <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Roof Right (Teal/Blue) */}
                <path d="M50 5L90 35V45H50V5Z" fill="#1e73be" />
                {/* Roof Left Peak (Orange) */}
                <path d="M10 35L50 5V45H18L10 35Z" fill="#ff9900" />
                {/* Body (Gray) */}
                <path d="M10 45H90V95H10V45Z" fill="#555555" />
                {/* Stylized 'S' */}
                <path d="M20 55H42V63H30V68H42V85H20V77H32V71H20V55Z" fill="white" />
                {/* Stylized 'P' */}
                <path d="M54 55H78V75H64V85H54V55ZM64 63H68V67H64V63Z" fill="white" />
              </svg>
            </div>
            <div className="footer__logo-divider" />
            <div>
              <div className="footer__logo-name">SHREE PAWAN PUTRA PROJECTS</div>
              <div className="footer__logo-caption">Civil, Electrical & Mechanical Constructions</div>
            </div>
          </div>
          <p className="footer__desc">
            Shree Pawan Putra Projects is a registered Proprietorship under the Government of Telangana (GSTIN: 36BIOPP9227R1Z3). 21+ years of
            excellence in infrastructure development.
          </p>
          <div className="footer__socials">
            <a href="#" aria-label="Facebook" className="footer__social-btn"><FacebookIcon /></a>
            <a href="#" aria-label="Instagram" className="footer__social-btn"><InstagramIcon /></a>
            <a href="#" aria-label="YouTube" className="footer__social-btn"><YoutubeIcon /></a>
            <a href="#" aria-label="Twitter" className="footer__social-btn"><TwitterIcon /></a>
          </div>
        </div>

        <div className="footer__col">
          <h4 className="footer__title">Quick Links</h4>
          <ul className="footer__links">
            {quickLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="footer__link">
                  <ArrowRight size={14} /> {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h4 className="footer__title">Our Services</h4>
          <ul className="footer__links">
            {services.map((s) => (
              <li key={s}>
                <span className="footer__link">
                  <ArrowRight size={14} /> {s}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h4 className="footer__title">Contact Us</h4>
          <ul className="footer__contact-list">
            <li>
              <MapPin size={16} className="footer__contact-icon" />
              <span>Unit No 810 & 811, Manjeera Trinity Corporate, JNTU Road, Kukatpally, Hyderabad</span>
            </li>
            <li>
              <Phone size={16} className="footer__contact-icon" />
              <a href="tel:+919000100889">+91 90001 00889</a>
            </li>
            <li>
              <Mail size={16} className="footer__contact-icon" />
              <a href="mailto:info@sreepawanputra.com">info@sreepawanputra.com</a>
            </li>
          </ul>
          <a
            href="https://wa.me/919000100889"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp footer__wa-btn"
          >
            WhatsApp Us
          </a>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p>© 2024 Shree Pawanputra Projects. All Rights Reserved.</p>
          <p>Registered LLP | GSTIN: 36BIOPP9227R1Z3 | Govt. of Telangana</p>
        </div>
      </div>
    </footer>
  );
}
