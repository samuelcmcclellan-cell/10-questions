import ChartRenderer from './charts/ChartRenderer';

export default function QuestionSlide({ data, currentIndex, total, isVisible }) {
  return (
    <div className="w-full h-full flex flex-col px-6 md:px-12 lg:px-20 py-4 md:py-6 pb-12 md:pb-14">
      {/* Question header */}
      <div className="mb-3 md:mb-4 animate-fade-in flex-shrink-0">
        <p className="text-accent text-[10px] md:text-xs tracking-[0.25em] uppercase font-semibold mb-1">
          {data.label}
        </p>
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white leading-tight">
          {data.question}
        </h2>
      </div>

      {/* Content area: chart + bullets */}
      <div className="flex-1 flex flex-col md:flex-row gap-4 md:gap-6 min-h-0 overflow-hidden">
        {/* Chart */}
        <div className="w-full md:w-[58%] min-h-0 flex-1 md:flex-initial md:h-full">
          <div className="h-full min-h-[200px] max-h-[300px] md:max-h-full">
            <ChartRenderer
              chartType={data.chartType}
              chartData={data.chartData}
              chartConfig={data.chartConfig}
              isVisible={isVisible}
            />
          </div>
        </div>

        {/* Bullets */}
        <div className="w-full md:w-[42%] flex flex-col justify-center overflow-y-auto min-h-0">
          <ul className="space-y-2 md:space-y-3">
            {data.bullets.map((bullet, i) => (
              <li
                key={i}
                className="flex gap-2 text-xs md:text-sm text-text-secondary leading-relaxed animate-fade-in"
                style={{ animationDelay: `${(i + 1) * 100}ms` }}
              >
                <span className="text-accent mt-1 flex-shrink-0 text-[8px]">●</span>
                <span dangerouslySetInnerHTML={{ __html: bullet }} />
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Source line */}
      <div className="mt-2 flex-shrink-0">
        <p className="text-text-muted text-[10px] md:text-xs">
          {data.source}
        </p>
      </div>
    </div>
  );
}
