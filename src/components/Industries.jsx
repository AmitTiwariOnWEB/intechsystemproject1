export default function Industries() {
  const industries = [
    {
      icon: 'business',
      title: 'Corporate Offices',
      description: 'Secure access, seamless connectivity, and smart meeting rooms.',
    },
    {
      icon: 'storefront',
      title: 'Retail',
      description: 'Loss prevention, POS integration, and customer analytics.',
    },
    {
      icon: 'factory',
      title: 'Manufacturing & Warehouses',
      description: 'Industrial surveillance, safety monitoring, and inventory tracking.',
    },
    {
      icon: 'apartment',
      title: 'Residential Societies',
      description: 'Visitor management, perimeter security, and intercom systems.',
    },
    {
      icon: 'local_hospital',
      title: 'Healthcare & Education',
      description: 'Campus security, attendance systems, and emergency response.',
    },
    {
      icon: 'hotel',
      title: 'Hospitality',
      description: 'Guest experience, keyless entry, and centralized management.',
    },
  ];

  return (
    <section id="industries" className="bg-[#1e3b8a] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-[#0ea5e9] text-sm font-bold uppercase tracking-widest mb-2">Sectors</p>
          <h2 className="text-white text-2xl md:text-3xl font-bold mb-4">Industries We Serve</h2>
          <div className="w-16 h-1 bg-[#0ea5e9] mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all group cursor-pointer"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-[#0ea5e9]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#0ea5e9] transition-colors">
                  <span className="material-icons-round text-[#0ea5e9] group-hover:text-white transition-colors">
                    {industry.icon}
                  </span>
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-2">{industry.title}</h3>
                  <p className="text-white/70 text-sm">{industry.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
