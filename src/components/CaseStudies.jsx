export default function CaseStudies() {
  const projects = [
    {
      type: 'Corporate HQ',
      icon: 'domain',
      scope: 'CCTV + Access Control + Networking',
      before: ['Multiple standalone systems', 'Manual visitor logs', 'Network downtime issues'],
      after: ['Unified security platform', 'Automated visitor management', '99.9% network uptime'],
      outcome: 'Improved security and centralized monitoring across 5 floors.',
    },
    {
      type: 'Retail Chain',
      icon: 'store',
      scope: 'Surveillance + POS Integration + Analytics',
      before: ['Blind spots in coverage', 'Theft incidents', 'No remote access'],
      after: ['360° camera coverage', '40% theft reduction', 'Mobile monitoring app'],
      outcome: 'Centralized monitoring for 25 stores with real-time alerts.',
    },
    {
      type: 'Residential Tower',
      icon: 'apartment',
      scope: 'Access Control + Intercom + Parking',
      before: ['Manual gate operation', 'No visitor records', 'Parking disputes'],
      after: ['Automated boom barriers', 'Video intercom system', 'Slot-based parking'],
      outcome: 'Enhanced resident safety with 24/7 automated access control.',
    },
  ];

  return (
    <section id="projects" className="px-4 py-16 bg-[#f6f6f8]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-[#0ea5e9] text-sm font-bold uppercase tracking-widest mb-2">Success Stories</p>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Featured Projects</h2>
          <div className="w-16 h-1 bg-[#0ea5e9] mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl ios-shadow border border-gray-100 overflow-hidden hover:shadow-lg transition-all group"
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-[#1e3b8a] to-[#0ea5e9] p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center">
                    <span className="material-icons-round text-white">{project.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-white font-bold">{project.type}</h3>
                    <p className="text-white/70 text-xs">{project.scope}</p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-xs font-bold text-red-500 uppercase mb-2">Before</p>
                    <ul className="space-y-1">
                      {project.before.map((item, i) => (
                        <li key={i} className="text-xs text-gray-600 flex items-start gap-1">
                          <span className="material-icons-round text-red-400 text-sm">close</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-green-500 uppercase mb-2">After</p>
                    <ul className="space-y-1">
                      {project.after.map((item, i) => (
                        <li key={i} className="text-xs text-gray-600 flex items-start gap-1">
                          <span className="material-icons-round text-green-500 text-sm">check</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-100">
                  <p className="text-sm text-gray-700">
                    <span className="font-semibold text-[#1e3b8a]">Outcome:</span> {project.outcome}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
