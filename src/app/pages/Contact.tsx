import { useState } from "react";
import {
  Mail, Phone, MapPin, Clock, Send, CheckCircle, Shield,
} from "lucide-react";

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

export function Contact() {
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", organization: "",
    course: "", participants: "", message: "",
  });
  const [submitted, setSubmitted] = useState(false);

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

  const inputClass = "w-full px-4 py-3 bg-white border border-[#D1D5DB] rounded text-[#1F2937] text-sm placeholder-[#9CA3AF] focus:border-[#C9A96E] focus:outline-none focus:ring-1 focus:ring-[#C9A96E]/30 transition-colors";

  return (
    <div style={{ fontFamily: "'Lato', sans-serif", backgroundColor: "#FFFFFF" }}>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <div className="text-center mb-14">
            <span className="inline-block px-3 py-1 bg-[#C9A96E]/10 border border-[#C9A96E]/25 rounded text-[#C9A96E] text-xs font-bold uppercase tracking-widest mb-5">
              Get Started Today
            </span>
            <h1
              className="text-4xl sm:text-5xl font-bold text-[#1F2937] mb-5"
              style={{ fontFamily: "'Open Sans', sans-serif" }}
            >
              Contact <span className="text-[#C9A96E]">Us</span>
            </h1>
            <p className="text-[#6B7280] text-lg max-w-2xl mx-auto leading-relaxed">
              Ready to elevate your training? Contact us to discuss your needs, schedule a consultation, or enroll in one of our programs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

            {/* Contact info */}
            <div>
              <div className="bg-[#F5F7FA] border border-[#E5E7EB] rounded-lg p-7 mb-6">
                <div className="flex items-center gap-3 mb-5">
                  <Shield className="w-6 h-6 text-[#C9A96E]" />
                  <h2
                    className="text-xl font-bold text-[#1F2937]"
                    style={{ fontFamily: "'Open Sans', sans-serif" }}
                  >
                    Shadow Training Institute
                  </h2>
                </div>
                <p className="text-[#6B7280] text-sm leading-relaxed mb-6">
                  Professional training for security professionals, corporate teams, healthcare staff, and emergency responders.
                </p>

                <div className="space-y-5">
                  <a
                    href="https://maps.google.com/?q=3427+E+Trinity+Mills+Road+Dallas+Texas+75287"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 group hover:opacity-80 transition-opacity"
                  >
                    <div className="w-10 h-10 bg-white border border-[#E5E7EB] rounded flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-4 h-4 text-[#C9A96E]" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-[#1F2937] mb-0.5">Address</div>
                      <p className="text-[#6B7280] text-sm">3427 E Trinity Mills Road<br />Dallas, Texas 75287</p>
                    </div>
                  </a>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white border border-[#E5E7EB] rounded flex items-center justify-center flex-shrink-0">
                      <Phone className="w-4 h-4 text-[#C9A96E]" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-[#1F2937] mb-0.5">Phone</div>
                      <a href="tel:+12146132588" className="block text-[#6B7280] text-sm hover:text-[#C9A96E] transition-colors">
                        Office: +1 (214) 613-2588
                      </a>
                      <a href="tel:+19722002955" className="block text-[#6B7280] text-sm hover:text-[#C9A96E] transition-colors">
                        Dispatch: +1 (972) 200-2955
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white border border-[#E5E7EB] rounded flex items-center justify-center flex-shrink-0">
                      <Mail className="w-4 h-4 text-[#C9A96E]" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-[#1F2937] mb-0.5">Email</div>
                      <a href="mailto:info@shadowtraininginstitute.com" className="text-[#6B7280] text-sm hover:text-[#C9A96E] transition-colors">
                        info@shadowtraininginstitute.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white border border-[#E5E7EB] rounded flex items-center justify-center flex-shrink-0">
                      <Clock className="w-4 h-4 text-[#C9A96E]" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-[#1F2937] mb-0.5">Hours</div>
                      <p className="text-[#6B7280] text-sm">
                        Monday – Friday: 8:00 AM – 6:00 PM<br />
                        Saturday: 9:00 AM – 3:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick response */}
              <div className="bg-[#F5F7FA] border border-[#E5E7EB] rounded-lg p-6">
                <h3
                  className="text-base font-bold text-[#1F2937] mb-4"
                  style={{ fontFamily: "'Open Sans', sans-serif" }}
                >
                  Quick Response Guarantee
                </h3>
                <div className="space-y-2">
                  {["24-hour response time", "Custom solutions available", "No obligation consultation"].map((item) => (
                    <div key={item} className="flex items-center gap-2 text-sm text-[#374151]">
                      <CheckCircle className="w-4 h-4 text-[#C9A96E] flex-shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="bg-[#F5F7FA] border border-[#E5E7EB] rounded-lg p-7">
              <h2
                className="text-xl font-bold text-[#1F2937] mb-6"
                style={{ fontFamily: "'Open Sans', sans-serif" }}
              >
                Request Training Information
              </h2>

              {submitted ? (
                <div className="bg-[#C9A96E]/10 border border-[#C9A96E]/30 rounded-lg p-8 text-center">
                  <CheckCircle className="w-14 h-14 text-[#C9A96E] mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-[#1F2937] mb-2">Thank You!</h3>
                  <p className="text-[#6B7280] text-sm">
                    Your request has been received. We'll contact you within 24 hours to discuss your training needs.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-[#374151] mb-1.5">Full Name *</label>
                    <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} className={inputClass} placeholder="John Doe" />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-[#374151] mb-1.5">Email Address *</label>
                      <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} className={inputClass} placeholder="john@example.com" />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-[#374151] mb-1.5">Phone Number *</label>
                      <input type="tel" id="phone" name="phone" required value={formData.phone} onChange={handleChange} className={inputClass} placeholder="(555) 123-4567" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="organization" className="block text-sm font-semibold text-[#374151] mb-1.5">Organization / Company</label>
                    <input type="text" id="organization" name="organization" value={formData.organization} onChange={handleChange} className={inputClass} placeholder="Company Name" />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="course" className="block text-sm font-semibold text-[#374151] mb-1.5">Training Program *</label>
                      <select id="course" name="course" required value={formData.course} onChange={handleChange} className={inputClass}>
                        <option value="">Select a program...</option>
                        {courses.map((c) => <option key={c} value={c}>{c}</option>)}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="participants" className="block text-sm font-semibold text-[#374151] mb-1.5">Number of Participants</label>
                      <input type="text" id="participants" name="participants" value={formData.participants} onChange={handleChange} className={inputClass} placeholder="e.g., 1, 10, 50+" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-[#374151] mb-1.5">Additional Information</label>
                    <textarea id="message" name="message" rows={4} value={formData.message} onChange={handleChange} className={`${inputClass} resize-none`} placeholder="Tell us about your training needs, preferred dates, or any questions..." />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-[#C9A96E] text-white font-bold rounded hover:bg-[#B8965D] transition-all flex items-center justify-center gap-2 min-h-[48px]"
                  >
                    <Send className="w-4 h-4" />
                    Submit Request
                  </button>

                  <p className="text-xs text-[#9CA3AF] text-center">
                    By submitting this form, you agree to be contacted by Shadow Training Institute regarding your training inquiry.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
