import { SECTIONS, QUESTIONS_DATA } from '../data/questions';

export default function Navigation({ currentSlide, totalSlides, onNavigate, onDotClick }) {
  const showArrows = totalSlides > 1;
  const isFirst = currentSlide === 0;
  const isLast = currentSlide === totalSlides - 1;

  // Get section color for the current question dot
  const getDotColor = (slideIndex) => {
    if (slideIndex === 0 || slideIndex === totalSlides - 1) return null;
    const q = QUESTIONS_DATA[slideIndex - 1];
    return q ? SECTIONS[q.section]?.color : null;
  };

  return (
    <>
      {/* Left Arrow — hidden on mobile, use swipe instead */}
      {showArrows && !isFirst && (
        <button
          onClick={() => onNavigate(-1)}
          className="fixed left-2 sm:left-3 md:left-6 top-1/2 -translate-y-1/2 z-50 w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 hidden sm:flex items-center justify-center rounded-full bg-white/[0.03] border border-white/[0.06] text-white/30 hover:text-white/70 hover:bg-white/[0.06] hover:border-white/[0.12] transition-all duration-300 cursor-pointer backdrop-blur-sm"
          aria-label="Previous slide"
        >
          <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      )}

      {/* Right Arrow — hidden on mobile */}
      {showArrows && !isLast && (
        <button
          onClick={() => onNavigate(1)}
          className="fixed right-2 sm:right-3 md:right-6 top-1/2 -translate-y-1/2 z-50 w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 hidden sm:flex items-center justify-center rounded-full bg-white/[0.03] border border-white/[0.06] text-white/30 hover:text-white/70 hover:bg-white/[0.06] hover:border-white/[0.12] transition-all duration-300 cursor-pointer backdrop-blur-sm"
          aria-label="Next slide"
        >
          <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      )}

      {/* Dot pagination with section colors — scrollable on mobile */}
      <div className="fixed bottom-3 sm:bottom-4 md:bottom-5 left-1/2 -translate-x-1/2 z-50 flex items-center gap-1 sm:gap-1.5 max-w-[85vw] overflow-x-auto px-2">
        {Array.from({ length: totalSlides }).map((_, i) => {
          const isActive = i === currentSlide;
          const dotColor = getDotColor(i);

          return (
            <button
              key={i}
              onClick={() => onDotClick(i)}
              className="rounded-full transition-all duration-300 cursor-pointer flex-shrink-0"
              style={{
                width: isActive ? 16 : 5,
                height: 5,
                backgroundColor: isActive
                  ? (dotColor || 'rgba(255,255,255,0.6)')
                  : (dotColor ? `${dotColor}30` : 'rgba(255,255,255,0.12)'),
              }}
              aria-label={`Go to slide ${i + 1}`}
            />
          );
        })}
      </div>
    </>
  );
}
