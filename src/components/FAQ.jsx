import { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: 'Do you provide AMC (Annual Maintenance Contract)?',
      answer: 'Yes, we offer comprehensive AMC packages with SLA-based support, including preventive maintenance, breakdown support, and remote monitoring options.',
    },
    {
      question: 'Can you handle multi-location deployments?',
      answer: 'Absolutely. We specialize in multi-site deployments with centralized management. Our team can coordinate installations across multiple cities with consistent quality.',
    },
    {
      question: 'Which brands do you support?',
      answer: 'We are authorized partners for leading brands including Hikvision, Dahua, Cisco, Fortinet, Ubiquiti, Yealink, and many more. We recommend solutions based on your specific requirements and budget.',
    },
    {
      question: 'Do you offer cloud/remote monitoring?',
      answer: 'Yes, we provide cloud-based monitoring solutions that allow you to access your security cameras, access control logs, and network status from anywhere using mobile apps or web dashboards.',
    },
    {
      question: 'How long does installation take?',
      answer: 'Installation timeline depends on project scope. Small projects (10-20 cameras) typically take 3-5 days. Larger enterprise deployments are planned with detailed project timelines shared upfront.',
    },
    {
      question: 'Do you provide post-installation training?',
      answer: 'Yes, we provide comprehensive training for your team on system operation, basic troubleshooting, and best practices. Training can be on-site or remote, with documentation provided.',
    },
  ];

  return (
    <section className="px-4 py-16 bg-white">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-[#0ea5e9] text-sm font-bold uppercase tracking-widest mb-2">Got Questions?</p>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          <div className="w-16 h-1 bg-[#0ea5e9] mx-auto rounded-full"></div>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`bg-[#f6f6f8] rounded-xl overflow-hidden transition-all ${
                openIndex === index ? 'ring-2 ring-[#1e3b8a]' : ''
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <span className="font-semibold text-[#0F172A] pr-4">{faq.question}</span>
                <span className={`material-icons-round text-[#1e3b8a] transition-transform ${
                  openIndex === index ? 'rotate-180' : ''
                }`}>
                  expand_more
                </span>
              </button>
              
              <div className={`overflow-hidden transition-all duration-300 ${
                openIndex === index ? 'max-h-48' : 'max-h-0'
              }`}>
                <p className="px-5 pb-5 text-gray-600 text-sm leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
