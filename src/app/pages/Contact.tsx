import { useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { WaveDivider } from "../components/WaveDivider";
import {
  Mail, Phone, MapPin, Clock, Send, CheckCircle, Shield,
} from "lucide-react";

const BG      = "rgb(248, 250, 252)";
const SURFACE = "rgb(237, 242, 250)";
const CARD    = "#ffffff";
const BORDER  = "rgba(0,0,0,0.07)";
const BLUE    = "rgb(37, 99, 235)";
const BLUE_S  = "rgba(37,99,235,0.08)";
const NAVY    = "rgb(15, 35, 75)";
const TEXT    = "rgb(15, 23, 42)";
const BODY    = "rgb(71, 85, 105)";
const MUTED   = "rgb(148, 163, 184)";
const EASE    = [0.22, 1, 0.36, 1] as const;

const courses = [
  "CPR / AED / First Aid",
  "Stop the Bleed",
  "CPI – Crisis Prevention Intervention",
  "Active Shooter Response",
  "Tactical Training",
  "Continuing Education",
  "Custom Training Solution",
  "General Inquiry",
];

const contactItems = [
  {
    icon: MapPin,
    label: "Address",
    content: "3427 E Trinity Mills Road\nDallas, Texas 75287",
    href: "https://maps.google.com/?q=3427+E+Trinity+Mills+Road+Dallas+Texas+75287",
    external: true,
  },
  {
    icon: Phone,
    label: "Phone",
    lines: [
      { text: "Office: +1 (214) 613-2588", href: "tel:+12146132588" },
      { text: "Dispatch: +1 (972) 200-2955", href: "tel:+19722002955" },
    ],
  },
  {
    icon: Mail,
    label: "Email",
    lines: [{ text: "info@shadowtraininginstitute.com", href: "mailto:info@shadowtraininginstitute.com" }],
  },
  {
    icon: Clock,
    label: "Hours",
    content: "Mon – Fri: 8:00 AM – 6:00 PM\nSaturday: 9:00 AM – 3:00 PM\nSunday: Closed",
  },
];

export function Contact() {
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", organization: "",
    course: "", participants: "", message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const headerRef  = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true });
  const formRef    = useRef<HTMLDivElement>(null);
  const formInView = useInView(formRef, { once: true, margin: "-60px" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", email: "", phone: "", organization: "", course: "", participants: "", message: "" });
      setSubmitted(false);
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "11px 14px",
    backgroundColor: BG,
    border: `1px solid rgba(0,0,0,0.10)`,
    borderRadius: "8px",
    color: TEXT,
    fontSize: "14px",
    outline: "none",
    transition: "border-color 200ms ease, box-shadow 200ms ease",
    fontFamily: "'Lato', sans-serif",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontSize: "13px",
    fontWeight: 600,
    color: TEXT,
    marginBottom: "6px",
  };

  return (
    <div style={{ fontFamily: "'Lato', sans-serif", backgroundColor: BG }}>

      {/* ── Hero header ── */}
      <section style={{ background: "linear-gradient(135deg, rgb(15, 35, 75) 0%, rgb(22, 52, 110) 100%)", paddingBottom: 0 }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-10">
          <motion.div
            ref={headerRef}
            className="text-center"
            initial={{ opacity: 0, y: 24 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: EASE }}
          >
            <span className="inline-block px-3 py-1 rounded text-xs font-bold uppercase tracking-widest mb-5"
              style={{ backgroundColor: "rgba(37,99,235,0.20)", border: "1px solid rgba(37,99,235,0.35)", color: "rgb(147,197,253)" }}>
              Get Started Today
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4" style={{ fontFamily: "'Open Sans', sans-serif", color: "#fff" }}>
              Contact <span style={{ color: "rgb(147,197,253)" }}>Us</span>
            </h1>
            <p className="text-base max-w-xl mx-auto leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
              Ready to elevate your training? Reach out to discuss your needs, schedule a consultation, or enroll in a program.
            </p>
          </motion.div>
        </div>
        <WaveDivider topGradient bottomColor={CARD} />
      </section>

      {/* ── Contact info cards ── */}
      <section style={{ backgroundColor: CARD }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {contactItems.map((item, i) => (
              <motion.div
                key={item.label}
                className="rounded-2xl p-6"
                style={{ backgroundColor: SURFACE, border: `1px solid ${BORDER}` }}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.09, ease: EASE }}
                whileHover={{ y: -5, boxShadow: "0 12px 32px rgba(37,99,235,0.10)" }}
              >
                <motion.div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: BLUE }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2, ease: EASE }}
                >
                  <item.icon className="w-5 h-5" style={{ color: "#fff" }} />
                </motion.div>
                <div className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: BLUE }}>{item.label}</div>
                {item.content && (
                  item.href ? (
                    <a href={item.href} target={item.external ? "_blank" : undefined} rel="noopener noreferrer"
                      className="text-sm leading-relaxed transition-colors"
                      style={{ color: BODY, whiteSpace: "pre-line" }}
                      onMouseEnter={(e) => { e.currentTarget.style.color = BLUE; }}
                      onMouseLeave={(e) => { e.currentTarget.style.color = BODY; }}>
                      {item.content}
                    </a>
                  ) : (
                    <p className="text-sm leading-relaxed" style={{ color: BODY, whiteSpace: "pre-line" }}>{item.content}</p>
                  )
                )}
                {item.lines && (
                  <div className="space-y-1">
                    {item.lines.map((l) => (
                      <a key={l.href} href={l.href} className="block text-sm transition-colors" style={{ color: BODY }}
                        onMouseEnter={(e) => { e.currentTarget.style.color = BLUE; }}
                        onMouseLeave={(e) => { e.currentTarget.style.color = BODY; }}>
                        {l.text}
                      </a>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
        <WaveDivider topColor={CARD} bottomColor={SURFACE} />
      </section>

      {/* ── Main form + info section ── */}
      <section style={{ backgroundColor: SURFACE }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div ref={formRef} className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">

            {/* Left — info panel */}
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, x: -40 }}
              animate={formInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.65, ease: EASE }}
            >
              <div className="rounded-2xl p-7 mb-5" style={{ backgroundColor: CARD, border: `1px solid ${BORDER}`, boxShadow: "0 4px 20px rgba(37,99,235,0.06)" }}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: BLUE }}>
                    <Shield className="w-5 h-5" style={{ color: "#fff" }} />
                  </div>
                  <h2 className="text-lg font-bold" style={{ fontFamily: "'Open Sans', sans-serif", color: TEXT }}>
                    Shadow Training Institute
                  </h2>
                </div>
                <p className="text-sm leading-relaxed mb-5" style={{ color: BODY }}>
                  Professional training for security professionals, corporate teams, healthcare staff, and emergency responders.
                </p>
                <div className="space-y-3">
                  {["24-hour response time", "Custom solutions available", "No obligation consultation"].map((item, i) => (
                    <motion.div
                      key={item}
                      className="flex items-center gap-2.5 text-sm"
                      style={{ color: BODY }}
                      initial={{ opacity: 0, x: -10 }}
                      animate={formInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.35, delay: 0.3 + i * 0.08, ease: EASE }}
                    >
                      <CheckCircle className="w-4 h-4 flex-shrink-0" style={{ color: BLUE }} />
                      {item}
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Map placeholder */}
              <div className="rounded-2xl overflow-hidden" style={{ height: "180px", border: `1px solid ${BORDER}`, backgroundColor: CARD }}>
                <iframe
                  title="Shadow Training Institute location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3348.0!2d-96.8!3d32.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzLCsDU0JzAwLjAiTiA5NsKwNDgnMDAuMCJX!5e0!3m2!1sen!2sus!4v1"
                  width="100%"
                  height="180"
                  style={{ border: 0, display: "block", filter: "grayscale(20%)" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </motion.div>

            {/* Right — form */}
            <motion.div
              className="lg:col-span-3"
              initial={{ opacity: 0, x: 40 }}
              animate={formInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.1, ease: EASE }}
            >
              <div className="rounded-2xl p-8" style={{ backgroundColor: CARD, border: `1px solid ${BORDER}`, boxShadow: "0 4px 20px rgba(37,99,235,0.06)" }}>
                <h2 className="text-xl font-bold mb-6" style={{ fontFamily: "'Open Sans', sans-serif", color: TEXT }}>
                  Request Training Information
                </h2>

                {submitted ? (
                  <motion.div
                    className="rounded-xl p-10 text-center"
                    style={{ backgroundColor: BLUE_S, border: `1px solid rgba(37,99,235,0.20)` }}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.35, ease: EASE }}
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.4, delay: 0.1, type: "spring", stiffness: 200 }}
                    >
                      <CheckCircle className="w-14 h-14 mx-auto mb-4" style={{ color: BLUE }} />
                    </motion.div>
                    <h3 className="text-xl font-bold mb-2" style={{ color: TEXT }}>Thank You!</h3>
                    <p className="text-sm" style={{ color: BODY }}>
                      Your request has been received. We'll contact you within 24 hours.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label htmlFor="name" style={labelStyle}>Full Name *</label>
                      <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange}
                        style={inputStyle} placeholder="John Doe"
                        onFocus={(e) => { e.currentTarget.style.borderColor = BLUE; e.currentTarget.style.boxShadow = "0 0 0 3px rgba(37,99,235,0.10)"; }}
                        onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(0,0,0,0.10)"; e.currentTarget.style.boxShadow = "none"; }} />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="email" style={labelStyle}>Email Address *</label>
                        <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange}
                          style={inputStyle} placeholder="john@example.com"
                          onFocus={(e) => { e.currentTarget.style.borderColor = BLUE; e.currentTarget.style.boxShadow = "0 0 0 3px rgba(37,99,235,0.10)"; }}
                          onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(0,0,0,0.10)"; e.currentTarget.style.boxShadow = "none"; }} />
                      </div>
                      <div>
                        <label htmlFor="phone" style={labelStyle}>Phone Number *</label>
                        <input type="tel" id="phone" name="phone" required value={formData.phone} onChange={handleChange}
                          style={inputStyle} placeholder="(555) 123-4567"
                          onFocus={(e) => { e.currentTarget.style.borderColor = BLUE; e.currentTarget.style.boxShadow = "0 0 0 3px rgba(37,99,235,0.10)"; }}
                          onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(0,0,0,0.10)"; e.currentTarget.style.boxShadow = "none"; }} />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="organization" style={labelStyle}>Organization / Company</label>
                      <input type="text" id="organization" name="organization" value={formData.organization} onChange={handleChange}
                        style={inputStyle} placeholder="Company Name"
                        onFocus={(e) => { e.currentTarget.style.borderColor = BLUE; e.currentTarget.style.boxShadow = "0 0 0 3px rgba(37,99,235,0.10)"; }}
                        onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(0,0,0,0.10)"; e.currentTarget.style.boxShadow = "none"; }} />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="course" style={labelStyle}>Training Program *</label>
                        <select id="course" name="course" required value={formData.course} onChange={handleChange}
                          style={{ ...inputStyle, cursor: "pointer" }}
                          onFocus={(e) => { e.currentTarget.style.borderColor = BLUE; e.currentTarget.style.boxShadow = "0 0 0 3px rgba(37,99,235,0.10)"; }}
                          onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(0,0,0,0.10)"; e.currentTarget.style.boxShadow = "none"; }}>
                          <option value="">Select a program...</option>
                          {courses.map((c) => <option key={c} value={c}>{c}</option>)}
                        </select>
                      </div>
                      <div>
                        <label htmlFor="participants" style={labelStyle}>Number of Participants</label>
                        <input type="text" id="participants" name="participants" value={formData.participants} onChange={handleChange}
                          style={inputStyle} placeholder="e.g., 1, 10, 50+"
                          onFocus={(e) => { e.currentTarget.style.borderColor = BLUE; e.currentTarget.style.boxShadow = "0 0 0 3px rgba(37,99,235,0.10)"; }}
                          onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(0,0,0,0.10)"; e.currentTarget.style.boxShadow = "none"; }} />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" style={labelStyle}>Additional Information</label>
                      <textarea id="message" name="message" rows={4} value={formData.message} onChange={handleChange}
                        style={{ ...inputStyle, resize: "none" }}
                        placeholder="Tell us about your training needs, preferred dates, or any questions..."
                        onFocus={(e) => { e.currentTarget.style.borderColor = BLUE; e.currentTarget.style.boxShadow = "0 0 0 3px rgba(37,99,235,0.10)"; }}
                        onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(0,0,0,0.10)"; e.currentTarget.style.boxShadow = "none"; }} />
                    </div>

                    <motion.button
                      type="submit"
                      className="w-full py-3.5 font-bold rounded-xl flex items-center justify-center gap-2"
                      style={{ backgroundColor: BLUE, color: "#fff", boxShadow: "0 4px 16px rgba(37,99,235,0.30)", fontSize: "14px", transition: "box-shadow 0.2s" }}
                      whileHover={{ y: -2, boxShadow: "0 8px 24px rgba(37,99,235,0.45)" }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ duration: 0.18, ease: EASE }}
                    >
                      <Send className="w-4 h-4" />
                      Submit Request
                    </motion.button>

                    <p className="text-xs text-center" style={{ color: MUTED }}>
                      By submitting, you agree to be contacted by Shadow Training Institute regarding your inquiry.
                    </p>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
        <WaveDivider topColor={SURFACE} bottomColor={NAVY} flip />
      </section>

      {/* ── CTA footer ── */}
      <section style={{ background: "linear-gradient(135deg, rgb(15, 35, 75) 0%, rgb(22, 52, 110) 100%)" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: EASE }}
          >
            <h2 className="text-2xl font-bold mb-3" style={{ fontFamily: "'Open Sans', sans-serif", color: "#fff" }}>
              Prefer to call us directly?
            </h2>
            <p className="text-sm mb-6" style={{ color: "rgba(255,255,255,0.60)" }}>
              Our team is available Monday – Friday, 8 AM – 6 PM
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <motion.a
                href="tel:+12146132588"
                className="inline-flex items-center justify-center gap-2 px-7 py-3 font-bold rounded-xl text-sm"
                style={{ backgroundColor: BLUE, color: "#fff", boxShadow: "0 4px 16px rgba(37,99,235,0.35)" }}
                whileHover={{ y: -2, boxShadow: "0 8px 24px rgba(37,99,235,0.50)" }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.18, ease: EASE }}
              >
                <Phone className="w-4 h-4" /> +1 (214) 613-2588
              </motion.a>
              <motion.a
                href="mailto:info@shadowtraininginstitute.com"
                className="inline-flex items-center justify-center gap-2 px-7 py-3 font-bold rounded-xl text-sm"
                style={{ border: "1px solid rgba(255,255,255,0.25)", color: "#fff", backgroundColor: "transparent" }}
                whileHover={{ y: -2, backgroundColor: "rgba(255,255,255,0.08)" }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.18, ease: EASE }}
              >
                <Mail className="w-4 h-4" /> Send Email
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
