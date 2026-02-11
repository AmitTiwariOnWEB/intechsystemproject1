import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    requirement: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const requirements = [
    'CCTV & Surveillance',
    'Access Control & Biometrics',
    'IP PBX & Telephony',
    'Networking (LAN/WAN/Wi-Fi)',
    'Cybersecurity & Firewall',
    'Video Conferencing',
    'Server & Storage',
    'AMC & Support',
    'Other',
  ];

  return (
    <section id="contact" className="px-4 py-16 bg-[#f6f6f8]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-[#0ea5e9] text-sm font-bold uppercase tracking-widest mb-2">Get Started</p>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Contact Us</h2>
          <div className="w-16 h-1 bg-[#0ea5e9] mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="bg-gradient-to-br from-[#1e3b8a] to-[#0ea5e9] rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
            <p className="text-white/80 mb-8">
              Ready to secure your infrastructure? Reach out to us for a free consultation and site survey.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                  <span className="material-icons-round">phone</span>
                </div>
                <div>
                  <p className="font-semibold mb-1">Phone</p>
                  <a href="tel:+919876543210" className="text-white/80 hover:text-white">+91 98765 43210</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                  <span className="material-icons-round">email</span>
                </div>
                <div>
                  <p className="font-semibold mb-1">Email</p>
                  <a href="mailto:info@intechsystem.com" className="text-white/80 hover:text-white">info@intechsystem.com</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                  <span className="material-icons-round">location_on</span>
                </div>
                <div>
                  <p className="font-semibold mb-1">Address</p>
                  <p className="text-white/80">
                    123, Tech Park, Sector 62<br />
                    Noida, Uttar Pradesh 201301
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                  <span className="material-icons-round">schedule</span>
                </div>
                <div>
                  <p className="font-semibold mb-1">Business Hours</p>
                  <p className="text-white/80">Mon - Sat: 9:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-white/20">
              <p className="font-semibold mb-4">Follow Us</p>
              <div className="flex gap-3">
                {['facebook', 'share', 'language', 'smart_display'].map((icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                  >
                    <span className="material-icons-round text-sm">{icon}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 ios-shadow border border-gray-100">
            <h3 className="text-xl font-bold mb-2">Request a Quote</h3>
            <p className="text-gray-600 text-sm mb-6">We respond within 24 hours.</p>

            {submitted ? (
              <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
                <span className="material-icons-round text-green-500 text-4xl mb-2">check_circle</span>
                <p className="text-green-700 font-semibold">Thank you for your inquiry!</p>
                <p className="text-green-600 text-sm">We'll get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold mb-1.5">Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full bg-[#f6f6f8] border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#1e3b8a] focus:border-transparent outline-none transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-1.5">Company</label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                      className="w-full bg-[#f6f6f8] border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#1e3b8a] focus:border-transparent outline-none transition-all"
                      placeholder="Company Name"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold mb-1.5">Phone *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full bg-[#f6f6f8] border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#1e3b8a] focus:border-transparent outline-none transition-all"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-1.5">Email *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full bg-[#f6f6f8] border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#1e3b8a] focus:border-transparent outline-none transition-all"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-1.5">Requirement</label>
                  <select
                    value={formData.requirement}
                    onChange={(e) => setFormData({...formData, requirement: e.target.value})}
                    className="w-full bg-[#f6f6f8] border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#1e3b8a] focus:border-transparent outline-none transition-all"
                  >
                    <option value="">Select a service</option>
                    {requirements.map((req, index) => (
                      <option key={index} value={req}>{req}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-1.5">Message</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows="4"
                    className="w-full bg-[#f6f6f8] border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#1e3b8a] focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <button
                    type="submit"
                    className="flex-1 bg-[#1e3b8a] text-white font-bold py-3 rounded-xl hover:bg-[#1e3b8a]/90 transition-all flex items-center justify-center gap-2"
                  >
                    <span className="material-icons-round text-xl">send</span>
                    Get Quote
                  </button>
                  <button
                    type="button"
                    className="flex-1 bg-[#0ea5e9] text-white font-bold py-3 rounded-xl hover:bg-[#0ea5e9]/90 transition-all flex items-center justify-center gap-2"
                  >
                    <span className="material-icons-round text-xl">calendar_month</span>
                    Schedule Visit
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
