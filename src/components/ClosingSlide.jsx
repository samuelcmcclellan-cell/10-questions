export default function ClosingSlide({ onRestart }) {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden">
      {/* Background accent */}
      <div
        className="absolute inset-0 animate-gradient opacity-20"
        style={{
          background: 'linear-gradient(135deg, #1a1a2e 0%, #0a2a3e 50%, #1a1a2e 100%)',
          backgroundSize: '400% 400%',
        }}
      />

      <div className="relative z-10 text-center px-8 animate-fade-in max-w-2xl">
        <div className="w-12 h-0.5 bg-accent mx-auto mb-10 opacity-60" />

        <p className="text-accent text-sm tracking-[0.3em] uppercase mb-6 font-medium">
          Thank You
        </p>

        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          Stay Invested.<br />Stay Informed.
        </h2>

        <p className="text-text-secondary text-lg md:text-xl leading-relaxed mb-10 max-w-lg mx-auto">
          Markets reward patience and discipline. Review the data, stress-test your assumptions, and position accordingly.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={onRestart}
            className="group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-accent/30 bg-accent/5 text-accent text-sm font-medium transition-all duration-300 hover:bg-accent/15 hover:border-accent/60 cursor-pointer"
          >
            <svg className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
            </svg>
            Review Again
          </button>
        </div>

        <div className="mt-16 space-y-2">
          <p className="text-text-muted text-xs tracking-wider">
            10 QUESTIONS — SPRING 2026
          </p>
          <p className="text-text-muted text-[10px] leading-relaxed max-w-md mx-auto">
            This material is for informational purposes only and does not constitute investment advice.
            Past performance is not indicative of future results. Investing involves risk.
          </p>
        </div>
      </div>
    </div>
  );
}
