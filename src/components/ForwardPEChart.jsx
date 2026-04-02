import { useRef, useCallback } from 'react';
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
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
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
  const chartContainerRef = useRef(null);

  const handleDownload = useCallback(async () => {
    const wb = XLSX.utils.book_new();

    // --- Sheet 1: Chart Data ---
    const headerRows = [
      ['S&P 500 Forward 12-Month P/E Ratio'],
      ['Monthly data, Jan 2021 – Mar 2026'],
      [`5-Year Average: ${FIVE_YEAR_AVG}x`],
      [],
      ['Month', 'Forward P/E (NTM)', '5-Year Average'],
    ];
    const dataRows = forwardPEData.map((d) => [d.month, d.pe, FIVE_YEAR_AVG]);
    const wsData = [...headerRows, ...dataRows];
    const ws = XLSX.utils.aoa_to_sheet(wsData);

    // Column widths
    ws['!cols'] = [{ wch: 14 }, { wch: 20 }, { wch: 16 }];

    XLSX.utils.book_append_sheet(wb, ws, 'Forward PE Data');

    // --- Sheet 2: Key Metrics ---
    const metricsRows = [
      ['Key Metrics'],
      [],
      ['Metric', 'Value', 'As Of'],
      ['Current Forward P/E', '19.9x', 'Late Mar 2026'],
      ['5-Year High', '~23.4x', 'Oct 2025'],
      ['5-Year Low', '~15.3x', 'Oct 2022'],
      ['5-Year Average', '19.9x', 'Jan 2021 – Mar 2026'],
    ];
    const wsMetrics = XLSX.utils.aoa_to_sheet(metricsRows);
    wsMetrics['!cols'] = [{ wch: 22 }, { wch: 12 }, { wch: 22 }];
    XLSX.utils.book_append_sheet(wb, wsMetrics, 'Key Metrics');

    // --- Sheet 3: Sources ---
    const sourcesRows = [
      ['Sources & Methodology'],
      [],
      ['Data Sources:'],
      ['  • FactSet Earnings Insight (weekly consensus estimates)'],
      ['  • MacroMicro (macroeconomic data aggregation)'],
      ['  • S&P Dow Jones Indices (index price data)'],
      [],
      ['Methodology:'],
      ['  Forward P/E = S&P 500 Price ÷ Next-Twelve-Month (NTM) Consensus EPS Estimate'],
      ['  Monthly values represent end-of-month snapshots'],
      ['  5-Year Average calculated over Jan 2021 – Mar 2026'],
      [],
      ['Exported from Q1 2026 Market Update – Question 05: "Should I be concerned about valuations?"'],
    ];
    const wsSources = XLSX.utils.aoa_to_sheet(sourcesRows);
    wsSources['!cols'] = [{ wch: 80 }];
    XLSX.utils.book_append_sheet(wb, wsSources, 'Sources');

    // --- Also embed chart as image if possible ---
    if (chartContainerRef.current) {
      try {
        const { default: html2canvas } = await import('html2canvas');
        const canvas = await html2canvas(chartContainerRef.current, {
          backgroundColor: '#1a1a2e',
          scale: 2,
        });
        const imgData = canvas.toDataURL('image/png');

        // Add chart image sheet with instructions
        const imgRows = [
          ['Chart Image'],
          [],
          ['The chart has been saved as a separate PNG file alongside this workbook.'],
          ['Filename: SP500_Forward_PE_Chart.png'],
        ];
        const wsImg = XLSX.utils.aoa_to_sheet(imgRows);
        wsImg['!cols'] = [{ wch: 70 }];
        XLSX.utils.book_append_sheet(wb, wsImg, 'Chart Image');

        // Save the chart image as a separate PNG
        const blob = await (await fetch(imgData)).blob();
        saveAs(blob, 'SP500_Forward_PE_Chart.png');
      } catch {
        // html2canvas not available — skip image export silently
      }
    }

    // Write and save the workbook
    const wbOut = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
    const xlsxBlob = new Blob([wbOut], { type: 'application/octet-stream' });
    saveAs(xlsxBlob, 'SP500_Forward_PE_Data.xlsx');
  }, []);

  return (
    <div className="w-full h-full flex flex-col" ref={chartContainerRef}>
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

      {/* Legend + Source + Download */}
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
          <button
            onClick={handleDownload}
            className="ml-auto flex items-center gap-1 px-2 py-0.5 rounded text-[9px] sm:text-[10px] font-medium transition-all duration-200 cursor-pointer"
            style={{
              color: '#1D9E75',
              backgroundColor: 'rgba(29,158,117,0.1)',
              border: '1px solid rgba(29,158,117,0.25)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(29,158,117,0.2)';
              e.currentTarget.style.borderColor = 'rgba(29,158,117,0.5)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(29,158,117,0.1)';
              e.currentTarget.style.borderColor = 'rgba(29,158,117,0.25)';
            }}
            title="Download chart data and image as Excel + PNG"
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Download Data
          </button>
        </div>
        <p className="text-[8px] sm:text-[9px] text-white/30 mt-1 leading-relaxed">
          Sources: FactSet Earnings Insight, MacroMicro, S&P Dow Jones Indices. Forward P/E = price &divide; NTM consensus EPS.
        </p>
      </div>
    </div>
  );
}
