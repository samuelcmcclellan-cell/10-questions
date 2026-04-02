import {
  ComposedChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ReferenceLine,
  ResponsiveContainer,
} from 'recharts';
import { forwardPEData, FIVE_YEAR_AVG } from '../data/forward-pe-data';

const METRICS = [
  { label: 'Current fwd P/E', value: '19.9x', sub: 'FactSet, late Mar 2026' },
  { label: '5-year high', value: '~23.4x', sub: 'Oct 2025' },
  { label: '5-year low', value: '~15.3x', sub: 'Oct 2022' },
  { label: '5-year average', value: '19.9x', sub: 'FactSet' },
];

function CustomTooltip({ active, payload, label }) {
  if (!active || !payload?.length) return null;
  return (
    <div
      className="rounded-lg px-3 py-2 text-xs shadow-lg"
      style={{
        backgroundColor: '#1a1a2e',
        border: '1px solid rgba(29,158,117,0.4)',
      }}
    >
      <p className="text-white/70 mb-1 font-medium">{label}</p>
      <p className="text-white">
        Fwd P/E: <span className="font-semibold" style={{ color: '#1D9E75' }}>{payload[0].value}x</span>
      </p>
      <p className="text-white/60">5-yr avg: {FIVE_YEAR_AVG}x</p>
    </div>
  );
}

function xAxisTickFormatter(month) {
  if (month.startsWith('Jan') || month.startsWith('Jul')) return month;
  return '';
}

export default function ForwardPEChart() {
  return (
    <div className="w-full h-full flex flex-col">
      {/* Metric cards */}
      <div className="grid grid-cols-4 gap-1.5 sm:gap-2 mb-2 sm:mb-3 flex-shrink-0">
        {METRICS.map((m) => (
          <div
            key={m.label}
            className="rounded-lg px-1.5 sm:px-2.5 py-1.5 sm:py-2"
            style={{
              backgroundColor: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.1)',
            }}
          >
            <p className="text-[8px] sm:text-[9px] text-white/50 uppercase tracking-wider leading-tight">{m.label}</p>
            <p className="text-sm sm:text-base font-bold text-white leading-tight mt-0.5">{m.value}</p>
            <p className="text-[7px] sm:text-[8px] text-white/35 leading-tight mt-0.5">{m.sub}</p>
          </div>
        ))}
      </div>

      {/* Chart */}
      <div className="flex-1 min-h-0">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart data={forwardPEData} margin={{ top: 10, right: 10, left: -10, bottom: 35 }}>
            <defs>
              <linearGradient id="peAreaGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#1D9E75" stopOpacity={0.2} />
                <stop offset="100%" stopColor="#1D9E75" stopOpacity={0.02} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" />
            <XAxis
              dataKey="month"
              tickFormatter={xAxisTickFormatter}
              tick={{ fill: 'rgba(255,255,255,0.45)', fontSize: 9 }}
              angle={-45}
              textAnchor="end"
              axisLine={{ stroke: 'rgba(255,255,255,0.1)' }}
              tickLine={false}
              interval={0}
              height={40}
            />
            <YAxis
              domain={[14, 25]}
              tickFormatter={(v) => `${v}x`}
              tick={{ fill: 'rgba(255,255,255,0.45)', fontSize: 10 }}
              axisLine={{ stroke: 'rgba(255,255,255,0.1)' }}
              tickLine={false}
              width={35}
            />
            <Tooltip content={<CustomTooltip />} />
            <ReferenceLine
              y={FIVE_YEAR_AVG}
              stroke="#e2504a"
              strokeDasharray="6 3"
              strokeWidth={1.5}
              label={{
                value: `5-yr avg: ${FIVE_YEAR_AVG}x`,
                position: 'right',
                fill: '#e2504a',
                fontSize: 9,
                fontWeight: 600,
              }}
            />
            <Area
              type="monotone"
              dataKey="pe"
              stroke="#1D9E75"
              strokeWidth={2}
              fill="url(#peAreaGradient)"
              dot={false}
              activeDot={{ r: 4, fill: '#1D9E75', stroke: '#fff', strokeWidth: 1.5 }}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>

      {/* Legend + Source */}
      <div className="flex-shrink-0 mt-1.5 sm:mt-2">
        <div className="flex items-center gap-4 text-[9px] sm:text-[10px] text-white/60">
          <span className="flex items-center gap-1.5">
            <span className="inline-block w-2.5 h-2.5 rounded-sm" style={{ backgroundColor: '#1D9E75' }} />
            Forward 12-mo P/E (NTM)
          </span>
          <span className="flex items-center gap-1.5">
            <span className="inline-block w-2.5 h-2.5 rounded-sm" style={{ backgroundColor: '#e2504a' }} />
            5-yr avg (19.9x)
          </span>
        </div>
        <p className="text-[8px] sm:text-[9px] text-white/30 mt-1 leading-relaxed">
          Sources: FactSet Earnings Insight, MacroMicro, S&P Dow Jones Indices. Forward P/E = price &divide; NTM consensus EPS.
        </p>
      </div>
    </div>
  );
}
