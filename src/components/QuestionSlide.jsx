import { SECTIONS } from '../data/questions';
import PlaceholderChart from './PlaceholderChart';
import ForwardPEChart from './ForwardPEChart';

export default function QuestionSlide({ data, currentIndex, total, isVisible }) {
  const section = SECTIONS[data.section];

  return (
    <div className="w-full h-full flex flex-col px-4 sm:px-6 md:px-12 lg:px-20 py-4 md:py-6 pb-14 md:pb-14 overflow-y-auto md:overflow-hidden">
      {/* Section + Question header */}
      <div className="mb-3 md:mb-5 animate-fade-in flex-shrink-0">
        {/* Section pill + Owner */}
        <div className="flex items-center gap-2 sm:gap-3 mb-1.5 md:mb-2">
          <span
            className="inline-block text-[8px] sm:text-[9px] md:text-[10px] font-bold tracking-[0.2em] uppercase px-2 sm:px-2.5 py-0.5 rounded-full"
            style={{
              color: section.color,
              backgroundColor: `${section.color}15`,
              border: `1px solid ${section.color}30`,
            }}
          >
            {section.label}
          </span>
          <span className="text-text-muted text-[9px] sm:text-[10px] md:text-xs tracking-[0.15em] uppercase font-medium">
            {data.label}
          </span>
          {data.owner && (
            <span className="text-text-muted text-[9px] sm:text-[10px] md:text-xs tracking-wide font-medium ml-auto opacity-60">
              Owner: {data.owner}
            </span>
          )}
        </div>

        {/* Question */}
        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-[28px] font-bold text-white leading-snug tracking-tight">
          {data.question}
        </h2>

        {/* Subtitle */}
        {data.subtitle && (
          <p className="text-text-muted text-[11px] sm:text-xs md:text-sm mt-1 md:mt-1.5 leading-relaxed max-w-3xl">
            {data.subtitle}
          </p>
        )}
      </div>

      {/* Content area: placeholder chart + bullets */}
      <div className="flex-1 flex flex-col md:flex-row gap-3 md:gap-6 min-h-0 md:overflow-hidden">
        {/* Placeholder Chart — compact on mobile */}
        <div className="w-full md:w-[55%] flex-shrink-0 md:flex-shrink md:flex-initial md:h-full flex flex-col gap-2 md:gap-3">
          <div className="h-36 sm:h-44 md:h-auto md:flex-1 min-h-0">
            {data.id === 5 ? (
              <ForwardPEChart />
            ) : (
              <PlaceholderChart
                type={data.placeholderChart.type}
                title={data.placeholderChart.title}
                description={data.placeholderChart.description}
                sectionColor={section.color}
              />
            )}
          </div>

          {/* ETF Ticker Placeholders */}
          {data.tickers && data.tickers.length > 0 && (
            <div className="flex gap-2 flex-shrink-0">
              {data.tickers.map((ticker) => (
                <div
                  key={ticker}
                  className="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg"
                  style={{
                    backgroundColor: `${section.color}08`,
                    border: `1px solid ${section.color}20`,
                  }}
                >
                  <span
                    className="text-[8px] sm:text-[9px] font-bold tracking-[0.1em] uppercase"
                    style={{ color: `${section.color}90` }}
                  >
                    ETF
                  </span>
                  <span
                    className="text-xs sm:text-sm font-semibold tracking-wide"
                    style={{ color: section.color }}
                  >
                    {ticker}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Bullets — scrollable on both mobile and desktop */}
        <div className="w-full md:w-[45%] flex flex-col justify-start md:justify-center overflow-y-auto min-h-0 pr-1">
          <ul className="space-y-2.5 sm:space-y-3 md:space-y-4">
            {data.bullets.map((bullet, i) => (
              <li
                key={i}
                className="flex gap-2 sm:gap-2.5 text-[12px] sm:text-[13px] md:text-sm text-text-secondary leading-relaxed animate-fade-in"
                style={{ animationDelay: `${(i + 1) * 80}ms` }}
              >
                <span
                  className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full"
                  style={{ backgroundColor: section.color, opacity: 0.7 }}
                />
                <span dangerouslySetInnerHTML={{ __html: bullet }} />
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Source line */}
      <div className="mt-2 md:mt-2.5 flex-shrink-0">
        <p className="text-text-muted text-[9px] sm:text-[10px] md:text-xs opacity-60">
          {data.source}
        </p>
      </div>
    </div>
  );
}
