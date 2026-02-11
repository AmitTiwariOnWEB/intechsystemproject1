export default function MapSection() {
  return (
    <section className="px-4 py-16 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-[#0ea5e9] text-sm font-bold uppercase tracking-widest mb-2">Find Us</p>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Location</h2>
          <div className="w-16 h-1 bg-[#0ea5e9] mx-auto rounded-full"></div>
        </div>

        <div className="bg-[#f6f6f8] rounded-2xl overflow-hidden ios-shadow border border-gray-100">
          {/* Map Container */}
          <div className="relative w-full h-[400px] md:h-[500px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.0137559766396!2d77.36814597549396!3d28.627208975665615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5456493d2c5%3A0x82d2f64a3ae80c67!2sSector%2062%2C%20Noida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1703123456789!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
            />
            
            {/* Map Overlay Card */}
            <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-auto md:max-w-sm bg-white rounded-xl p-5 ios-shadow">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#1e3b8a] flex items-center justify-center flex-shrink-0">
                  <span className="material-icons-round text-white">location_on</span>
                </div>
                <div>
                  <h4 className="font-bold text-[#1e3b8a] mb-1">Intech System</h4>
                  <p className="text-sm text-gray-600 mb-3">
                    123, Tech Park, Sector 62<br />
                    Noida, Uttar Pradesh 201301
                  </p>
                  <a
                    href="https://maps.google.com/?q=Sector+62+Noida"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-[#0ea5e9] text-sm font-medium hover:text-[#1e3b8a] transition-colors"
                  >
                    Get Directions
                    <span className="material-icons-round text-sm ml-1">arrow_forward</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Office Locations */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { city: 'Delhi NCR (HQ)', address: 'Sector 62, Noida', icon: 'business' },
            { city: 'Mumbai', address: 'Andheri East', icon: 'apartment' },
            { city: 'Bangalore', address: 'Whitefield', icon: 'domain' },
          ].map((office, index) => (
            <div
              key={index}
              className="bg-[#f6f6f8] rounded-xl p-5 flex items-center gap-4 hover:bg-[#1e3b8a]/5 transition-colors cursor-pointer group"
            >
              <div className="w-12 h-12 rounded-lg bg-[#1e3b8a]/10 flex items-center justify-center group-hover:bg-[#1e3b8a] transition-colors">
                <span className="material-icons-round text-[#1e3b8a] group-hover:text-white transition-colors">
                  {office.icon}
                </span>
              </div>
              <div>
                <h4 className="font-bold">{office.city}</h4>
                <p className="text-sm text-gray-600">{office.address}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
