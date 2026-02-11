import { useState, useRef, useEffect } from 'react';

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      text: "Hello! 👋 Welcome to Intech System. How can I help you today?",
      options: [
        'Get a Quote',
        'Learn about Services',
        'Contact Support',
        'Schedule a Visit',
      ],
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleOptionClick = (option) => {
    const userMessage = { type: 'user', text: option };
    setMessages((prev) => [...prev, userMessage]);

    setTimeout(() => {
      let botResponse;
      switch (option) {
        case 'Get a Quote':
          botResponse = {
            type: 'bot',
            text: "Great! I'd be happy to help you get a quote. Please tell me:\n\n1. What services are you interested in?\n2. Approximate project size?\n3. Your preferred contact method?",
            options: ['CCTV Solutions', 'Access Control', 'Networking', 'Multiple Services'],
          };
          break;
        case 'Learn about Services':
          botResponse = {
            type: 'bot',
            text: "We offer comprehensive Security & IT Infrastructure solutions:\n\n✅ CCTV & Surveillance\n✅ Access Control & Biometrics\n✅ IP PBX & Telephony\n✅ Networking (LAN/WAN/WiFi)\n✅ Cybersecurity\n✅ Server & Storage\n\nWhich service interests you?",
            options: ['CCTV Details', 'Access Control Details', 'View All Solutions', 'Talk to Expert'],
          };
          break;
        case 'Contact Support':
          botResponse = {
            type: 'bot',
            text: "You can reach our support team through:\n\n📞 Phone: +91 98765 43210\n📧 Email: support@intechsystem.com\n⏰ Hours: Mon-Sat, 9 AM - 6 PM\n\nFor urgent issues, call our 24/7 helpline.",
            options: ['Call Now', 'Email Support', 'Back to Menu'],
          };
          break;
        case 'Schedule a Visit':
          botResponse = {
            type: 'bot',
            text: "We'd love to visit your site for a free assessment! Our engineers will:\n\n🔍 Survey your premises\n📋 Understand requirements\n💡 Propose solutions\n📊 Provide detailed quote\n\nPlease share your preferred date and location.",
            options: ['This Week', 'Next Week', 'Contact Me First'],
          };
          break;
        case 'CCTV Solutions':
        case 'CCTV Details':
          botResponse = {
            type: 'bot',
            text: "Our CCTV solutions include:\n\n📹 IP Cameras (2MP to 8MP)\n🖥️ NVR/DVR Systems\n☁️ Cloud Storage Options\n📱 Mobile App Access\n🤖 AI Analytics (Face, LPR)\n\nWe work with Hikvision, Dahua, CP Plus & more.",
            options: ['Get CCTV Quote', 'View Case Studies', 'Back to Menu'],
          };
          break;
        case 'Access Control Details':
          botResponse = {
            type: 'bot',
            text: "Our Access Control solutions:\n\n👆 Fingerprint Readers\n👤 Face Recognition\n💳 RFID Card Systems\n🚪 Door Controllers\n🚗 Boom Barriers\n📊 Attendance Reports\n\nWe design systems for offices, factories & residential.",
            options: ['Get Access Quote', 'View Case Studies', 'Back to Menu'],
          };
          break;
        case 'Back to Menu':
          botResponse = {
            type: 'bot',
            text: "Sure! How else can I assist you?",
            options: ['Get a Quote', 'Learn about Services', 'Contact Support', 'Schedule a Visit'],
          };
          break;
        default:
          botResponse = {
            type: 'bot',
            text: `Thanks for your interest in "${option}"! Let me connect you with our team for detailed information. You can also reach us at +91 98765 43210.`,
            options: ['Get a Quote', 'Back to Menu'],
          };
      }
      setMessages((prev) => [...prev, botResponse]);
    }, 500);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMessage = { type: 'user', text: inputValue };
    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');

    setTimeout(() => {
      const botResponse = {
        type: 'bot',
        text: "Thank you for your message! Our team will review your inquiry and get back to you shortly. For immediate assistance, please call +91 98765 43210.",
        options: ['Get a Quote', 'Schedule a Visit', 'Back to Menu'],
      };
      setMessages((prev) => [...prev, botResponse]);
    }, 800);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-[350px] max-w-[calc(100vw-48px)] bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 animate-fade-in-up">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#1e3b8a] to-[#0ea5e9] p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <span className="material-icons-round text-white">smart_toy</span>
              </div>
              <div className="flex-1">
                <h4 className="text-white font-bold">Intech Assistant</h4>
                <p className="text-white/70 text-xs flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-green-400"></span>
                  Online now
                </p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/70 hover:text-white transition-colors"
              >
                <span className="material-icons-round">close</span>
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="h-[350px] overflow-y-auto p-4 space-y-4 bg-[#f6f6f8]">
            {messages.map((message, index) => (
              <div key={index}>
                {message.type === 'bot' ? (
                  <div className="flex gap-2">
                    <div className="w-8 h-8 rounded-full bg-[#1e3b8a] flex items-center justify-center flex-shrink-0">
                      <span className="material-icons-round text-white text-sm">smart_toy</span>
                    </div>
                    <div className="flex-1">
                      <div className="bg-white rounded-2xl rounded-tl-md p-3 shadow-sm">
                        <p className="text-sm text-gray-700 whitespace-pre-line">{message.text}</p>
                      </div>
                      {message.options && (
                        <div className="mt-2 flex flex-wrap gap-2">
                          {message.options.map((option, i) => (
                            <button
                              key={i}
                              onClick={() => handleOptionClick(option)}
                              className="bg-white text-[#1e3b8a] text-xs font-medium px-3 py-1.5 rounded-full border border-[#1e3b8a]/20 hover:bg-[#1e3b8a] hover:text-white transition-colors"
                            >
                              {option}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ) : (
                  <div className="flex justify-end">
                    <div className="bg-[#1e3b8a] text-white rounded-2xl rounded-tr-md p-3 max-w-[80%]">
                      <p className="text-sm">{message.text}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={handleSendMessage} className="p-4 bg-white border-t border-gray-100">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type a message..."
                className="flex-1 bg-[#f6f6f8] border border-gray-200 rounded-full px-4 py-2 text-sm focus:ring-2 focus:ring-[#1e3b8a] focus:border-transparent outline-none"
              />
              <button
                type="submit"
                className="w-10 h-10 rounded-full bg-[#1e3b8a] text-white flex items-center justify-center hover:bg-[#0ea5e9] transition-colors"
              >
                <span className="material-icons-round text-lg">send</span>
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`relative flex items-center gap-3 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ${
          isOpen ? 'bg-gray-600' : 'bg-[#1e3b8a] hover:bg-[#0ea5e9]'
        }`}
        style={{
          padding: isHovered && !isOpen ? '16px 24px 16px 16px' : '16px',
        }}
      >
        <span className="material-icons-round text-2xl">
          {isOpen ? 'close' : 'chat'}
        </span>
        
        {/* Text (visible on hover when closed) */}
        {!isOpen && (
          <span
            className={`whitespace-nowrap font-semibold text-sm transition-all duration-300 overflow-hidden ${
              isHovered ? 'w-auto opacity-100' : 'w-0 opacity-0'
            }`}
          >
            Chat with us
          </span>
        )}

        {/* Notification Badge */}
        {!isOpen && (
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-xs font-bold">
            1
          </span>
        )}
      </button>
    </div>
  );
}
