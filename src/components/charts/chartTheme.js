export const CHART_COLORS = {
  green: '#00C853',
  teal: '#00BFA5',
  amber: '#FFB300',
  coral: '#FF7043',
  negative: '#FF5252',
  positive: '#00C853',
  muted: '#78909C',
  grid: '#2a3a5e',
  background: '#16213e',
};

export const CHART_THEME = {
  axis: {
    tick: { fill: '#78909C', fontSize: 12 },
    axisLine: { stroke: '#2a3a5e' },
  },
  tooltip: {
    contentStyle: {
      backgroundColor: '#16213e',
      border: '1px solid #2a3a5e',
      borderRadius: 8,
      boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
      color: '#FFFFFF',
      fontSize: 13,
    },
    labelStyle: { color: '#FFFFFF', fontWeight: 600 },
    itemStyle: { color: '#B0BEC5' },
  },
  grid: {
    stroke: '#2a3a5e',
    strokeDasharray: '3 3',
    opacity: 0.3,
  },
};
