export default function Solutions() {
  const solutions = [
    {
      icon: 'videocam',
      title: 'CCTV & Surveillance',
      description: 'IP Cameras, NVR/DVR, VMS solutions for comprehensive video monitoring and analytics.',
    },
    {
      icon: 'fingerprint',
      title: 'Access Control & Biometrics',
      description: 'Face recognition, fingerprint, RFID-based access systems for secure entry management.',
    },
    {
      icon: 'phone_in_talk',
      title: 'IP PBX & IP Telephony',
      description: 'Enterprise-grade IP phones, gateways, and unified communication solutions.',
    },
    {
      icon: 'router',
      title: 'Networking LAN/WAN/Wi-Fi',
      description: 'Complete network infrastructure including switching, routing, and wireless solutions.',
    },
    {
      icon: 'security',
      title: 'Firewalls & Cybersecurity',
      description: 'Next-gen firewalls, endpoint protection, VPN, and threat management systems.',
    },
    {
      icon: 'video_camera_front',
      title: 'Boardroom & Collaboration',
      description: 'Video/audio conferencing, PA systems, and smart boardroom automation.',
    },
    {
      icon: 'storage',
      title: 'Server/Storage/Backup',
      description: 'Enterprise servers, SAN/NAS storage, and comprehensive backup solutions.',
    },
    {
      icon: 'support_agent',
      title: 'AMC & Support',
      description: 'Annual maintenance contracts with SLA-based support and remote monitoring.',
    },
  ];

  return (
    <section id="solutions" className="px-4 py-16 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <p className="text-[#0ea5e9] text-sm font-bold uppercase tracking-widest mb-2">What We Offer</p>
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Solutions</h2>
        <div className="w-16 h-1 bg-[#0ea5e9] mx-auto rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {solutions.map((solution, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl ios-shadow border border-gray-100 group hover:border-[#1e3b8a]/20 hover:-translate-y-1 transition-all cursor-pointer"
          >
            <div className="w-12 h-12 bg-[#0ea5e9]/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#0ea5e9] transition-colors">
              <span className="material-icons-round text-[#0ea5e9] group-hover:text-white transition-colors">
                {solution.icon}
              </span>
            </div>
            <h3 className="text-lg font-bold mb-2 group-hover:text-[#1e3b8a] transition-colors">
              {solution.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">{solution.description}</p>
            <a href="#contact" className="inline-flex items-center text-[#0ea5e9] text-sm font-medium hover:text-[#1e3b8a] transition-colors">
              Learn more
              <span className="material-icons-round text-sm ml-1">arrow_forward</span>
            </a>
          </div>
        ))}
      </div>

      {/* CTA Row */}
      <div className="mt-12 bg-gradient-to-r from-[#1e3b8a] to-[#0ea5e9] rounded-2xl p-8 text-center">
        <h3 className="text-white text-xl md:text-2xl font-bold mb-4">
          Need a custom solution?
        </h3>
        <p className="text-white/80 mb-6">
          Our experts will design a tailored infrastructure solution for your business.
        </p>
        <a
          href="#contact"
          className="inline-flex items-center bg-white text-[#1e3b8a] px-6 py-3 rounded-lg font-bold hover:shadow-lg transition-all"
        >
          <span className="material-icons-round mr-2">support_agent</span>
          Talk to an Expert
        </a>
      </div>
    </section>
  );
}
