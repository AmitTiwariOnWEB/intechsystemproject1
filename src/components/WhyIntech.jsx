export default function WhyIntech() {
  const reasons = [
    {
      icon: 'search',
      title: 'Site Survey & Design',
      description: 'Comprehensive site assessment and customized solution design.',
    },
    {
      icon: 'verified',
      title: 'Certified Installation',
      description: 'Professional installation by trained and certified engineers.',
    },
    {
      icon: 'cable',
      title: 'Clean Cabling & Rack Management',
      description: 'Organized infrastructure with proper labeling and documentation.',
    },
    {
      icon: 'support',
      title: 'SLA-based AMC & Support',
      description: 'Guaranteed response times with proactive maintenance contracts.',
    },
    {
      icon: 'cloud_sync',
      title: 'Remote Monitoring Options',
      description: 'Cloud-based monitoring and management for real-time visibility.',
    },
    {
      icon: 'gavel',
      title: 'Compliance & Best Practices',
      description: 'Adherence to industry standards and security compliance requirements.',
    },
  ];

  return (
    <section id="about" className="px-4 py-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-[#0ea5e9] text-sm font-bold uppercase tracking-widest mb-2">Our Approach</p>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Why Intech System</h2>
          <div className="w-16 h-1 bg-[#0ea5e9] mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-6 rounded-xl hover:bg-[#f6f6f8] transition-all group"
            >
              <div className="w-12 h-12 rounded-full bg-[#1e3b8a] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <span className="material-icons-round text-white">{reason.icon}</span>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">{reason.title}</h3>
                <p className="text-gray-600 text-sm">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
