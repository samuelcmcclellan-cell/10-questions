export default function ClosingSlide({ onRestart }) {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 animate-gradient opacity-15"
        style={{
          background: 'linear-gradient(135deg, #1a1a2e 0%, #0a2a3e 50%, #1a1a2e 100%)',
          backgroundSize: '400% 400%',
        }}
      />

      <div className="relative z-10 text-center px-8 animate-fade-in max-w-xl">
        <div className="w-10 h-px bg-white/15 mx-auto mb-10" />

        <p className="text-text-muted text-xs tracking-[0.3em] uppercase mb-6 font-medium">
          Thank You
        </p>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight tracking-tight">
          Stay Invested.<br />Stay Informed.
        </h2>

        <p className="text-text-secondary text-base md:text-lg leading-relaxed mb-10 max-w-md mx-auto">
          Markets reward patience and discipline. Review the data, stress-test your assumptions, and position accordingly.
        </p>

        <button
          onClick={onRestart}
          className="group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-white/15 bg-white/5 text-white/80 text-sm font-medium transition-all duration-300 hover:bg-white/10 hover:border-white/25 cursor-pointer"
        >
          <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:-translate-x-1 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
          </svg>
          Review Again
        </button>

        <div className="mt-16 space-y-2">
          <p className="text-text-muted text-[10px] tracking-[0.15em] uppercase opacity-50">
            10 Questions — Spring 2026
          </p>
          <p className="text-text-muted text-[9px] leading-relaxed max-w-sm mx-auto opacity-40">
            This material is for informational purposes only and does not constitute investment advice.
            Past performance is not indicative of future results. Investing involves risk.
          </p>
        </div>
      </div>
    </div>
  );
}
