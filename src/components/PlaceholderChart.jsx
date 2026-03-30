// Chart type icons as simple SVG shapes
const CHART_ICONS = {
  bar: (color) => (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
      <rect x="4" y="28" width="8" height="16" rx="1.5" fill={color} opacity="0.4" />
      <rect x="15" y="18" width="8" height="26" rx="1.5" fill={color} opacity="0.6" />
      <rect x="26" y="8" width="8" height="36" rx="1.5" fill={color} opacity="0.8" />
      <rect x="37" y="22" width="8" height="22" rx="1.5" fill={color} opacity="0.5" />
    </svg>
  ),
  line: (color) => (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
      <polyline points="4,36 14,28 24,18 34,24 44,10" stroke={color} strokeWidth="2.5" fill="none" opacity="0.7" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="4" cy="36" r="2.5" fill={color} opacity="0.5" />
      <circle cx="14" cy="28" r="2.5" fill={color} opacity="0.5" />
      <circle cx="24" cy="18" r="2.5" fill={color} opacity="0.5" />
      <circle cx="34" cy="24" r="2.5" fill={color} opacity="0.5" />
      <circle cx="44" cy="10" r="2.5" fill={color} opacity="0.5" />
    </svg>
  ),
  area: (color) => (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
      <defs>
        <linearGradient id="areaFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.3" />
          <stop offset="100%" stopColor={color} stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <path d="M4,36 L14,28 L24,18 L34,24 L44,10 L44,44 L4,44 Z" fill="url(#areaFill)" />
      <polyline points="4,36 14,28 24,18 34,24 44,10" stroke={color} strokeWidth="2" fill="none" opacity="0.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  pie: (color) => (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
      <path d="M24,4 A20,20 0 0,1 44,24 L24,24 Z" fill={color} opacity="0.7" />
      <path d="M44,24 A20,20 0 0,1 12,40 L24,24 Z" fill={color} opacity="0.4" />
      <path d="M12,40 A20,20 0 0,1 24,4 L24,24 Z" fill={color} opacity="0.2" />
    </svg>
  ),
  timeline: (color) => (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
      <line x1="4" y1="24" x2="44" y2="24" stroke={color} strokeWidth="2" opacity="0.4" />
      <circle cx="10" cy="24" r="4" fill={color} opacity="0.6" />
      <circle cx="24" cy="24" r="4" fill={color} opacity="0.8" />
      <circle cx="38" cy="24" r="4" fill={color} opacity="0.5" />
    </svg>
  ),
  funnel: (color) => (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
      <rect x="4" y="6" width="40" height="8" rx="1.5" fill={color} opacity="0.7" />
      <rect x="10" y="18" width="28" height="8" rx="1.5" fill={color} opacity="0.5" />
      <rect x="16" y="30" width="16" height="8" rx="1.5" fill={color} opacity="0.3" />
    </svg>
  ),
  "dual-axis-line": (color) => (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
      <polyline points="4,32 14,28 24,20 34,24 44,14" stroke={color} strokeWidth="2.5" fill="none" opacity="0.7" strokeLinecap="round" strokeLinejoin="round" />
      <polyline points="4,22 14,18 24,26 34,16 44,20" stroke={color} strokeWidth="2" fill="none" opacity="0.35" strokeDasharray="4 3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
};

export default function PlaceholderChart({ type, title, description, sectionColor }) {
  const iconRenderer = CHART_ICONS[type] || CHART_ICONS.bar;

  return (
    <div
      className="w-full h-full rounded-xl flex flex-col items-center justify-center animate-fade-in relative overflow-hidden"
      style={{
        background: `linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)`,
        border: '1px solid rgba(255,255,255,0.06)',
      }}
    >
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '24px 24px',
        }}
      />

      {/* Corner accent */}
      <div
        className="absolute top-0 left-0 w-16 h-16 opacity-10"
        style={{
          background: `radial-gradient(circle at top left, ${sectionColor}, transparent 70%)`,
        }}
      />

      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-sm">
        {/* Chart icon */}
        <div className="mb-4 opacity-80">
          {iconRenderer(sectionColor)}
        </div>

        {/* Chart type tag */}
        <span
          className="text-[9px] font-bold tracking-[0.2em] uppercase mb-3 px-2 py-0.5 rounded"
          style={{
            color: sectionColor,
            backgroundColor: `${sectionColor}12`,
          }}
        >
          {type.replace(/-/g, ' ')} chart
        </span>

        {/* Title */}
        <h3 className="text-sm md:text-base font-semibold text-white/80 mb-2 leading-snug">
          {title}
        </h3>

        {/* Description */}
        <p className="text-[11px] md:text-xs text-text-muted leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
