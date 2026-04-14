import { useState } from "react";
import { Phone, Mail, MapPin, MessageSquare, Send, Clock, CheckCircle2 } from "lucide-react";
import "./Contact.css";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", service: "", message: "" });
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("http://localhost:5000/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", phone: "", email: "", service: "", message: "" });
      } else throw new Error();
    } catch {
      setStatus("error");
    }
    setTimeout(() => setStatus(""), 5000);
  };

  return (
    <div className="contact-page page-enter">
      <section className="page-hero">
        <div className="page-hero__bg">
          <div className="hero__grid" />
          <div className="hero__glow hero__glow--1" />
          <div className="hero__glow hero__glow--2" />
        </div>
        <div className="container page-hero__content">
          <span className="badge">Contact Us</span>
          <h1 className="section-title">Let's <span className="gradient-text">Build Together</span></h1>
          <p style={{ color: "var(--text-muted)", maxWidth: 520, margin: "0 auto", fontSize: "1.1rem" }}>
            Reach out and our team will contact you within 24 hours.
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container">
          <div className="contact-grid">
            {/* Info Column */}
            <div className="contact-info">
              <div className="contact-info-card card">
                <h3 className="contact-info-card__title">Our Office</h3>
                <div className="contact-info-item">
                  <div className="contact-info-icon"><MapPin size={22} /></div>
                  <div>
                    <strong>Address</strong>
                    <p>Unit No 810, 811 Sy No 1050, Near Manjeera Corporate Office,<br />Manjeera Trinity Corporate, Jntu Kukat Pally, Hyderabad-500085</p>
                  </div>
                </div>
                <div className="contact-info-item">
                  <div className="contact-info-icon"><Phone size={22} /></div>
                  <div>
                    <strong>Phone</strong>
                    <p><a href="tel:+919000100889">+91 90001 00889</a></p>
                  </div>
                </div>
                <div className="contact-info-item">
                  <div className="contact-info-icon"><Mail size={22} /></div>
                  <div>
                    <strong>Email</strong>
                    <p><a href="mailto:info@sreepawanputra.com">info@sreepawanputra.com</a></p>
                  </div>
                </div>
                <div className="contact-info-item">
                  <div className="contact-info-icon"><Clock size={22} /></div>
                  <div>
                    <strong>Working Hours</strong>
                    <p>Mon – Sat: 9:00 AM – 7:00 PM</p>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="contact-quick-actions">
                <a href="tel:+919000100889" className="btn btn-primary" id="contact-call">
                  <Phone size={18} /> Call Directly
                </a>
                <a href="https://wa.me/919000100889" target="_blank" rel="noopener noreferrer"
                  className="btn btn-whatsapp" id="contact-whatsapp">
                  <MessageSquare size={18} /> WhatsApp
                </a>
              </div>

              {/* Why Contact Us */}
              <div className="why-contact card">
                <h4>Why Choose Us?</h4>
                {["Free Consultation", "Response within 24 hours", "No hidden charges", "Trusted for 21+ Years"].map((item) => (
                  <div key={item} className="why-contact__item">
                    <CheckCircle2 size={16} /> <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Form Column */}
            <div>
              <form className="contact-form card" onSubmit={handleSubmit}>
                <h3 className="contact-form__title">Send Us a Message</h3>
                <p className="contact-form__sub">We'll respond within 24 hours</p>
                <div className="contact-form__row">
                  <div className="form-group">
                    <label htmlFor="c-name">Full Name *</label>
                    <input id="c-name" type="text" placeholder="Your full name" required
                      value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="c-phone">Phone *</label>
                    <input id="c-phone" type="tel" placeholder="Your phone number" required
                      value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="c-email">Email</label>
                  <input id="c-email" type="email" placeholder="Your email address"
                    value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                </div>
                <div className="form-group">
                  <label htmlFor="c-service">Service Required</label>
                  <select id="c-service" value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })}>
                    <option value="">Select a service...</option>
                    <option>Residential Construction</option>
                    <option>Commercial Buildings</option>
                    <option>Industrial Projects</option>
                    <option>Structural Design</option>
                    <option>AutoCAD & 3D Design</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="c-message">Message</label>
                  <textarea id="c-message" placeholder="Tell us about your project, budget, and timeline..."
                    value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
                </div>
                <button type="submit" id="c-submit" className="btn btn-primary contact-form__submit"
                  disabled={status === "loading"}>
                  {status === "loading" ? "Sending..." : <><Send size={16} /> Send Message</>}
                </button>
                {status === "success" && (
                  <div className="form-msg form-msg--success">
                    <CheckCircle2 size={18} /> Message sent! We'll contact you within 24 hours.
                  </div>
                )}
                {status === "error" && (
                  <div className="form-msg form-msg--error">
                    Failed to send. Please call us at +91 90001 00889
                  </div>
                )}
              </form>
            </div>
          </div>

          {/* Map */}
          <div className="map-container card">
            <h3 style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 700, marginBottom: 20 }}>
              📍 Find Us on Map
            </h3>
            <div className="map-embed">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.379201503348!2d78.39008137397686!3d17.48938139999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb918dab342375%3A0x180a04af0c47f594!2sManjeera%20Trinity%20Corporate!5e0!3m2!1sen!2sin!4v1713002077052!5m2!1sen!2sin"
                width="100%" height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Shree Pawanputra Projects Location"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
