import { SECTIONS } from '../data/questions';

const sectionList = Object.values(SECTIONS);

export default function TitleSlide({ onStart }) {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div
        className="absolute inset-0 animate-gradient opacity-25"
        style={{
          background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 25%, #0a2a3e 50%, #1a1a2e 75%, #16213e 100%)',
          backgroundSize: '400% 400%',
        }}
      />

      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/5 w-72 h-72 rounded-full opacity-8 animate-float"
        style={{ background: 'radial-gradient(circle, #00C853 0%, transparent 70%)' }} />
      <div className="absolute bottom-1/4 right-1/5 w-56 h-56 rounded-full opacity-8 animate-float"
        style={{ background: 'radial-gradient(circle, #BB86FC 0%, transparent 70%)', animationDelay: '3s' }} />

      <div className="relative z-10 text-center px-8 animate-fade-in">
        {/* Edition tag */}
        <p className="text-text-muted text-xs tracking-[0.3em] uppercase mb-8 font-medium">
          Spring 2026 Edition
        </p>

        {/* Main title */}
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-3 leading-[0.9] tracking-tight">
          13 Questions
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-text-secondary font-light mt-3 mb-8 max-w-lg mx-auto leading-relaxed">
          A data-driven market outlook for advisors
        </p>

        {/* Section pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-10 max-w-md mx-auto">
          {sectionList.map((s) => (
            <span
              key={s.label}
              className="text-[9px] font-semibold tracking-[0.12em] uppercase px-2.5 py-1 rounded-full"
              style={{
                color: s.color,
                backgroundColor: `${s.color}10`,
                border: `1px solid ${s.color}20`,
              }}
            >
              {s.label}
            </span>
          ))}
        </div>

        {/* Divider */}
        <div className="w-12 h-px bg-white/10 mx-auto mb-8" />

        {/* CTA Button */}
        <button
          onClick={onStart}
          className="group inline-flex items-center gap-3 px-8 py-3.5 rounded-full border border-white/15 bg-white/5 text-white text-base font-medium transition-all duration-300 hover:bg-white/10 hover:border-white/25 hover:scale-[1.02] cursor-pointer backdrop-blur-sm"
        >
          Begin
          <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 opacity-60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </button>
      </div>
    </div>
  );
}
