export default function Partners() {
  const partners = [
    { name: 'Hikvision', color: '#E4002B' },
    { name: 'Dahua', color: '#1565C0' },
    { name: 'Cisco', color: '#049FD9' },
    { name: 'Fortinet', color: '#DA291C' },
    { name: 'Ubiquiti', color: '#006FFF' },
    { name: 'Yealink', color: '#00A0E9' },
    { name: 'Dell', color: '#007DB8' },
    { name: 'HPE', color: '#01A982' },
    { name: 'Synology', color: '#B5B5B6' },
    { name: 'Sophos', color: '#2B5797' },
    { name: 'Matrix', color: '#E31E24' },
    { name: 'CP Plus', color: '#ED1C24' },
  ];

  return (
    <section id="partners" className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-[#0ea5e9] text-sm font-bold uppercase tracking-widest mb-2">Trusted Brands</p>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Partners We Work With</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We collaborate with leading OEMs to deliver reliable, scalable deployments.
          </p>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="bg-[#f6f6f8] rounded-xl p-6 flex items-center justify-center hover:bg-gray-100 transition-all group cursor-pointer"
            >
              <span
                className="font-bold text-gray-400 group-hover:text-[#1e3b8a] transition-colors text-sm md:text-base"
              >
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
