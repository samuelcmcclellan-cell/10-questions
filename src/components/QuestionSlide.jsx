import { SECTIONS } from '../data/questions';
import PlaceholderChart from './PlaceholderChart';

export default function QuestionSlide({ data, currentIndex, total, isVisible }) {
  const section = SECTIONS[data.section];

  return (
    <div className="w-full h-full flex flex-col px-6 md:px-12 lg:px-20 py-5 md:py-6 pb-12 md:pb-14">
      {/* Section + Question header */}
      <div className="mb-4 md:mb-5 animate-fade-in flex-shrink-0">
        {/* Section pill */}
        <div className="flex items-center gap-3 mb-2">
          <span
            className="inline-block text-[9px] md:text-[10px] font-bold tracking-[0.2em] uppercase px-2.5 py-0.5 rounded-full"
            style={{
              color: section.color,
              backgroundColor: `${section.color}15`,
              border: `1px solid ${section.color}30`,
            }}
          >
            {section.label}
          </span>
          <span className="text-text-muted text-[10px] md:text-xs tracking-[0.15em] uppercase font-medium">
            {data.label}
          </span>
        </div>

        {/* Question */}
        <h2 className="text-xl md:text-2xl lg:text-[28px] font-bold text-white leading-snug tracking-tight">
          {data.question}
        </h2>

        {/* Subtitle */}
        {data.subtitle && (
          <p className="text-text-muted text-xs md:text-sm mt-1.5 leading-relaxed max-w-3xl">
            {data.subtitle}
          </p>
        )}
      </div>

      {/* Content area: placeholder chart + bullets */}
      <div className="flex-1 flex flex-col md:flex-row gap-4 md:gap-6 min-h-0 overflow-hidden">
        {/* Placeholder Chart */}
        <div className="w-full md:w-[55%] min-h-0 flex-1 md:flex-initial md:h-full">
          <PlaceholderChart
            type={data.placeholderChart.type}
            title={data.placeholderChart.title}
            description={data.placeholderChart.description}
            sectionColor={section.color}
          />
        </div>

        {/* Bullets */}
        <div className="w-full md:w-[45%] flex flex-col justify-center overflow-y-auto min-h-0 pr-1">
          <ul className="space-y-3 md:space-y-4">
            {data.bullets.map((bullet, i) => (
              <li
                key={i}
                className="flex gap-2.5 text-[13px] md:text-sm text-text-secondary leading-relaxed animate-fade-in"
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
      <div className="mt-2.5 flex-shrink-0">
        <p className="text-text-muted text-[10px] md:text-xs opacity-60">
          {data.source}
        </p>
      </div>
    </div>
  );
}
