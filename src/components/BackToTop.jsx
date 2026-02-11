export default function BackToTop() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-24 right-6 z-40 w-12 h-12 bg-gray-800/80 hover:bg-[#1e3b8a] text-white rounded-full shadow-lg hover:shadow-xl transition-all flex items-center justify-center group"
      aria-label="Back to top"
    >
      <span className="material-icons-round group-hover:-translate-y-0.5 transition-transform">
        keyboard_arrow_up
      </span>
    </button>
  );
}
