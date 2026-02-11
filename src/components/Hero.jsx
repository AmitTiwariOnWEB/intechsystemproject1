export default function Hero() {
  const trustBadges = [
    { icon: 'verified', text: 'Certified Partners' },
    { icon: 'engineering', text: 'Skilled Engineers' },
    { icon: 'schedule', text: 'On-Time Delivery' },
  ];

  return (
    <section className="relative px-4 py-16 md:py-24 text-center bg-gradient-to-b from-[#1e3b8a]/5 to-transparent overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#0ea5e9]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#1e3b8a]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="inline-flex items-center px-4 py-1.5 mb-6 rounded-full bg-[#1e3b8a]/10 text-[#1e3b8a] text-xs font-bold uppercase tracking-widest">
          <span className="material-icons-round text-sm mr-2">shield</span>
          Security & IT Infrastructure Solutions
        </div>

        <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-[#0F172A] leading-tight mb-6 animate-fade-in-up">
          Secure. Connected.{' '}
          <span className="text-[#1e3b8a]">Future-Ready.</span>
        </h1>

        <p className="text-base md:text-lg text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
          Intech System delivers end-to-end Security, Surveillance, Access Control, 
          Networking, and Communication solutions for modern businesses.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a
            href="#contact"
            className="w-full sm:w-auto bg-[#1e3b8a] text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-lg hover:shadow-[#1e3b8a]/20 transition-all flex items-center justify-center gap-2"
          >
            <span className="material-icons-round text-xl">assignment</span>
            Request Site Survey
          </a>
          <a
            href="#solutions"
            className="w-full sm:w-auto bg-white border border-gray-200 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-50 transition-all flex items-center justify-center gap-2"
          >
            View Solutions
            <span className="material-icons-round text-xl">arrow_forward</span>
          </a>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
          {trustBadges.map((badge, index) => (
            <div key={index} className="flex items-center gap-2 text-gray-600">
              <div className="w-10 h-10 rounded-full bg-[#0ea5e9]/10 flex items-center justify-center">
                <span className="material-icons-round text-[#0ea5e9]">{badge.icon}</span>
              </div>
              <span className="text-sm font-medium">{badge.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Hero Visual */}
      <div className="mt-16 max-w-5xl mx-auto relative">
        <div className="bg-gradient-to-br from-[#1e3b8a] to-[#0ea5e9] rounded-2xl p-1">
          <div className="bg-white rounded-xl p-6 md:p-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { icon: 'videocam', label: 'CCTV Surveillance' },
                { icon: 'fingerprint', label: 'Access Control' },
                { icon: 'router', label: 'Networking' },
                { icon: 'security', label: 'Cybersecurity' },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-[#f6f6f8] rounded-xl p-4 text-center hover:bg-[#1e3b8a]/5 transition-colors"
                >
                  <span className="material-icons-round text-3xl text-[#1e3b8a] mb-2">
                    {item.icon}
                  </span>
                  <p className="text-xs md:text-sm font-medium text-gray-700">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
