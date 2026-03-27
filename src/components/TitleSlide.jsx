export default function TitleSlide({ onStart }) {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div
        className="absolute inset-0 animate-gradient opacity-30"
        style={{
          background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 25%, #0a2a3e 50%, #1a1a2e 75%, #16213e 100%)',
          backgroundSize: '400% 400%',
        }}
      />

      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full opacity-10 animate-float"
        style={{ background: 'radial-gradient(circle, #00C853 0%, transparent 70%)' }} />
      <div className="absolute bottom-1/3 right-1/4 w-48 h-48 rounded-full opacity-10 animate-float"
        style={{ background: 'radial-gradient(circle, #00BFA5 0%, transparent 70%)', animationDelay: '2s' }} />

      <div className="relative z-10 text-center px-8 animate-fade-in">
        {/* Eyebrow */}
        <p className="text-accent text-sm tracking-[0.3em] uppercase mb-6 font-medium">
          Spring 2026 Edition
        </p>

        {/* Main title */}
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-4 leading-[0.95]">
          10 Questions
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-text-secondary font-light mt-4 mb-12 max-w-xl mx-auto leading-relaxed">
          Spring 2026 Market Outlook
        </p>

        {/* Divider */}
        <div className="w-16 h-0.5 bg-accent mx-auto mb-12 opacity-60" />

        {/* CTA Button */}
        <button
          onClick={onStart}
          className="group inline-flex items-center gap-3 px-8 py-4 rounded-full border border-accent/30 bg-accent/5 text-accent text-lg font-medium transition-all duration-300 hover:bg-accent/15 hover:border-accent/60 hover:scale-105 cursor-pointer"
        >
          Start
          <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </button>

        {/* Attribution */}
        <p className="text-text-muted text-xs mt-16 tracking-wider">
          iSHARES ® BY BLACKROCK
        </p>
      </div>
    </div>
  );
}
