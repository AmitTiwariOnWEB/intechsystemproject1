import { useState, useEffect, useRef } from 'react';

function AnimatedCounter({ end, duration = 2000, suffix = '' }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime;
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [isVisible, end, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function TrustMetrics() {
  const metrics = [
    { value: 12, suffix: '+', label: 'Years of Experience', icon: 'calendar_month' },
    { value: 500, suffix: '+', label: 'Successful Projects', icon: 'task_alt' },
    { value: 200, suffix: '+', label: 'Trusted Clients', icon: 'groups' },
    { value: 25, suffix: '+', label: 'Partner Brands', icon: 'handshake' },
  ];

  return (
    <section className="py-12 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center group">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-[#0ea5e9]/10 flex items-center justify-center group-hover:bg-[#0ea5e9] transition-colors">
                <span className="material-icons-round text-[#0ea5e9] group-hover:text-white transition-colors">
                  {metric.icon}
                </span>
              </div>
              <div className="text-3xl md:text-4xl font-extrabold text-[#1e3b8a] mb-2">
                <AnimatedCounter end={metric.value} suffix={metric.suffix} />
              </div>
              <p className="text-sm text-gray-600">{metric.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
