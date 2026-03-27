import {
  BarChart, Bar, LineChart, Line, AreaChart, Area, ComposedChart,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  ReferenceLine, Cell
} from 'recharts';
import { CHART_THEME } from './chartTheme';

const commonAxisProps = {
  tick: CHART_THEME.axis.tick,
  axisLine: CHART_THEME.axis.axisLine,
  tickLine: false,
};

const commonGridProps = {
  stroke: CHART_THEME.grid.stroke,
  strokeDasharray: CHART_THEME.grid.strokeDasharray,
  opacity: CHART_THEME.grid.opacity,
};

function CustomTooltip({ active, payload, label }) {
  if (!active || !payload?.length) return null;
  return (
    <div style={CHART_THEME.tooltip.contentStyle}>
      <p style={{ ...CHART_THEME.tooltip.labelStyle, margin: '0 0 4px' }}>{label}</p>
      {payload.map((entry, i) => (
        <p key={i} style={{ ...CHART_THEME.tooltip.itemStyle, margin: '2px 0' }}>
          <span style={{ color: entry.color, marginRight: 6 }}>●</span>
          {entry.name}: {typeof entry.value === 'number' ? entry.value.toLocaleString() : entry.value}
        </p>
      ))}
    </div>
  );
}

function renderBarChart(data, config) {
  const isVertical = config.layout === 'vertical';

  if (isVertical) {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} layout="vertical" margin={{ top: 5, right: 30, left: 10, bottom: 5 }}>
          <CartesianGrid {...commonGridProps} horizontal={false} />
          <XAxis type="number" {...commonAxisProps} />
          <YAxis type="category" dataKey={config.yKey || 'name'} {...commonAxisProps} width={120} fontSize={11} />
          <Tooltip content={<CustomTooltip />} />
          <Bar dataKey={config.xKey || 'value'} radius={[0, 4, 4, 0]} animationDuration={800}>
            {data.map((entry, index) => (
              <Cell key={index} fill={entry.fill || (entry.value >= 0 ? '#00C853' : '#FF5252')} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    );
  }

  const bars = config.bars || [{ dataKey: 'value', name: 'Value' }];
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
        <CartesianGrid {...commonGridProps} />
        <XAxis dataKey={config.xKey} {...commonAxisProps} angle={-35} textAnchor="end" height={60} fontSize={11} interval={0} />
        <YAxis {...commonAxisProps} />
        <Tooltip content={<CustomTooltip />} />
        {bars.length > 1 && <Legend wrapperStyle={{ color: '#B0BEC5', fontSize: 12 }} />}
        {bars.map((bar, i) => (
          <Bar key={i} dataKey={bar.dataKey} name={bar.name} radius={[4, 4, 0, 0]} animationDuration={800}
            fill={bar.fill || undefined}>
            {!bar.fill && data.map((entry, index) => (
              <Cell key={index} fill={entry.fill || '#00C853'} />
            ))}
          </Bar>
        ))}
      </BarChart>
    </ResponsiveContainer>
  );
}

function renderLineChart(data, config) {
  const lines = config.lines || [{ dataKey: 'value', name: 'Value', stroke: '#00C853' }];
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
        <CartesianGrid {...commonGridProps} />
        <XAxis dataKey={config.xKey} {...commonAxisProps} />
        <YAxis {...commonAxisProps} />
        <Tooltip content={<CustomTooltip />} />
        <Legend wrapperStyle={{ color: '#B0BEC5', fontSize: 12 }} />
        {lines.map((line, i) => (
          <Line
            key={i}
            type="monotone"
            dataKey={line.dataKey}
            name={line.name}
            stroke={line.stroke}
            strokeWidth={line.strokeWidth || 2}
            strokeDasharray={line.strokeDasharray}
            dot={{ r: 3, fill: line.stroke }}
            activeDot={{ r: 5, fill: line.stroke }}
            connectNulls={false}
            animationDuration={1000}
          />
        ))}
      </LineChart>
    </ResponsiveContainer>
  );
}

function renderAreaChart(data, config) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart data={data} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
        <defs>
          <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor={config.fill || '#00C853'} stopOpacity={0.3} />
            <stop offset="95%" stopColor={config.fill || '#00C853'} stopOpacity={0.02} />
          </linearGradient>
        </defs>
        <CartesianGrid {...commonGridProps} />
        <XAxis dataKey={config.xKey} {...commonAxisProps} />
        <YAxis {...commonAxisProps} domain={['auto', 'auto']} />
        <Tooltip content={<CustomTooltip />} />
        {config.referenceLines?.map((ref, i) => (
          <ReferenceLine
            key={i}
            y={ref.y}
            stroke={ref.stroke}
            strokeDasharray="6 4"
            label={{ value: ref.label, position: 'left', fill: ref.stroke, fontSize: 11 }}
          />
        ))}
        <Area
          type="monotone"
          dataKey={config.areaKey}
          name={config.areaName}
          stroke={config.stroke || '#00C853'}
          strokeWidth={2}
          fill="url(#areaGradient)"
          animationDuration={1000}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}

function renderComposedChart(data, config) {
  const lines = config.lines || [];
  const hasMultipleAxes = lines.some(l => l.yAxisId === 'right');

  return (
    <ResponsiveContainer width="100%" height="100%">
      <ComposedChart data={data} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
        <CartesianGrid {...commonGridProps} />
        <XAxis dataKey={config.xKey} {...commonAxisProps} />
        <YAxis yAxisId="left" {...commonAxisProps} domain={['auto', 'auto']} />
        {hasMultipleAxes && <YAxis yAxisId="right" orientation="right" {...commonAxisProps} domain={['auto', 'auto']} />}
        <Tooltip content={<CustomTooltip />} />
        <Legend wrapperStyle={{ color: '#B0BEC5', fontSize: 12 }} />
        {lines.map((line, i) => (
          <Line
            key={i}
            type="monotone"
            dataKey={line.dataKey}
            name={line.name}
            stroke={line.stroke}
            strokeWidth={line.strokeWidth || 2}
            yAxisId={line.yAxisId || 'left'}
            dot={{ r: 3, fill: line.stroke }}
            activeDot={{ r: 5, fill: line.stroke }}
            animationDuration={1000}
          />
        ))}
      </ComposedChart>
    </ResponsiveContainer>
  );
}

export default function ChartRenderer({ chartType, chartData, chartConfig, isVisible }) {
  if (!isVisible) return null;

  const renderers = {
    bar: renderBarChart,
    'horizontal-bar': renderBarChart,
    line: renderLineChart,
    area: renderAreaChart,
    composed: renderComposedChart,
  };

  const effectiveConfig = chartType === 'horizontal-bar'
    ? { ...chartConfig, layout: 'vertical' }
    : chartConfig;

  const render = renderers[chartType] || renderBarChart;

  return (
    <div className="animate-chart w-full h-full">
      {render(chartData, effectiveConfig)}
    </div>
  );
}
