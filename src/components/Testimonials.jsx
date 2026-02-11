import { useState } from 'react';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      quote: "Intech System transformed our security infrastructure completely. Their team's professionalism and technical expertise made the entire process seamless. We now have centralized monitoring across all our branches.",
      name: 'Rajesh Kumar',
      role: 'IT Director, TechCorp Industries',
      rating: 5,
    },
    {
      quote: "The access control system installed by Intech has significantly improved our building security. The biometric integration works flawlessly, and their support team is always responsive.",
      name: 'Priya Sharma',
      role: 'Facility Manager, Skyline Towers',
      rating: 5,
    },
    {
      quote: "We chose Intech for our multi-location networking project, and they delivered beyond expectations. The structured cabling and documentation were top-notch. Highly recommended for enterprise projects.",
      name: 'Vikram Patel',
      role: 'CTO, RetailMax Chain',
      rating: 5,
    },
  ];

  return (
    <section className="px-4 py-16 bg-[#f6f6f8]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-[#0ea5e9] text-sm font-bold uppercase tracking-widest mb-2">What Clients Say</p>
          <h2 className="text-2xl md:text-3xl font-bold">Client Testimonials</h2>
        </div>

        <div className="bg-white p-8 md:p-10 rounded-2xl ios-shadow border border-gray-100 relative">
          <span className="material-icons-round text-[#1e3b8a]/10 text-6xl absolute top-6 left-6">format_quote</span>
          
          <div className="relative z-10">
            <div className="flex gap-1 mb-4">
              {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                <span key={i} className="material-icons-round text-yellow-400 text-xl">star</span>
              ))}
            </div>
            
            <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed italic">
              "{testimonials[activeIndex].quote}"
            </p>
            
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#1e3b8a] to-[#0ea5e9] flex items-center justify-center text-white font-bold text-lg">
                {testimonials[activeIndex].name.charAt(0)}
              </div>
              <div>
                <h4 className="font-bold text-lg">{testimonials[activeIndex].name}</h4>
                <p className="text-sm text-gray-500">{testimonials[activeIndex].role}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === activeIndex 
                  ? 'bg-[#1e3b8a] w-8' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
