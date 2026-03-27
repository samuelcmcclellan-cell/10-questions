export const QUESTIONS_DATA = [
  {
    id: 1,
    label: "QUESTION 01",
    question: "How does the Iran war impact the economy?",
    bullets: [
      "<strong>Oil supply shock is the primary channel:</strong> The conflict has disrupted ~2.5 million barrels/day of transit through the Strait of Hormuz, pushing Brent crude above $105 and adding an estimated 0.6–0.9% drag on global GDP over the next 12 months.",
      "<strong>Supply chains are rerouting at a cost:</strong> Shipping diversions around the Cape of Good Hope have added 10–14 days to Asia-Europe transit times, increasing freight costs by ~35% and pressuring margins for import-dependent sectors.",
      "<strong>Defense spending is rising across NATO:</strong> U.S. supplemental defense appropriations are running $45B above baseline, adding modest fiscal stimulus but crowding out other discretionary priorities heading into FY2027 budget talks.",
      "<strong>Portfolio implication — diversify energy exposure:</strong> We favor broad commodity baskets over pure crude plays, and see select defense and energy infrastructure names as structural beneficiaries. Duration risk is elevated given the inflationary impulse."
    ],
    chartType: "bar",
    chartData: [
      { name: "1973 Arab Oil Embargo", gdpImpact: -3.2, oilSpike: 230, fill: "#FF5252" },
      { name: "1979 Iran Revolution", gdpImpact: -2.5, oilSpike: 135, fill: "#FF5252" },
      { name: "1990 Gulf War", gdpImpact: -1.1, oilSpike: 85, fill: "#FF7043" },
      { name: "2011 Libya", gdpImpact: -0.3, oilSpike: 25, fill: "#FFB300" },
      { name: "2022 Russia-Ukraine", gdpImpact: -0.8, oilSpike: 55, fill: "#FF7043" },
      { name: "2026 Iran (est.)", gdpImpact: -0.7, oilSpike: 45, fill: "#00C853" }
    ],
    chartConfig: {
      xKey: "name",
      bars: [
        { dataKey: "gdpImpact", name: "GDP Impact (%)", fill: "#FF5252" },
        { dataKey: "oilSpike", name: "Oil Price Spike (%)", fill: "#FFB300" }
      ]
    },
    source: "Source: Bloomberg, IMF, BlackRock estimates, as of March 2026"
  },
  {
    id: 2,
    label: "QUESTION 02",
    question: "What do higher oil prices mean for inflation and the Fed?",
    bullets: [
      "<strong>Energy is reigniting headline inflation:</strong> WTI crude at $102 is feeding through to gasoline (+18% YoY) and airfares, pushing headline CPI back above 4.0% — well above the Fed's 2% target and the 3.1% level seen in late 2025.",
      "<strong>Core inflation is stickier than expected:</strong> Excluding food and energy, core PCE has reaccelerated to 3.2%, driven by shelter costs and services inflation that remain stubbornly above pre-pandemic norms.",
      "<strong>The Fed is in a bind:</strong> Higher oil prices act as both an inflation accelerant and a growth headwind. The FOMC has paused at 4.75%, signaling patience, but markets are now pricing fewer than two cuts for 2026.",
      "<strong>Breakeven inflation tells the story:</strong> 5-year breakevens have climbed to 2.85%, their highest since mid-2022, suggesting markets see the inflationary impulse as more persistent than transitory."
    ],
    chartType: "composed",
    chartData: [
      { month: "Jan 25", wti: 73, cpi: 2.9 },
      { month: "Mar 25", wti: 69, cpi: 2.8 },
      { month: "May 25", wti: 72, cpi: 3.0 },
      { month: "Jul 25", wti: 78, cpi: 3.1 },
      { month: "Sep 25", wti: 74, cpi: 3.0 },
      { month: "Nov 25", wti: 71, cpi: 3.1 },
      { month: "Jan 26", wti: 89, cpi: 3.6 },
      { month: "Mar 26", wti: 102, cpi: 4.1 }
    ],
    chartConfig: {
      xKey: "month",
      lines: [
        { dataKey: "wti", name: "WTI Crude ($/bbl)", stroke: "#FFB300", yAxisId: "left" },
        { dataKey: "cpi", name: "CPI YoY (%)", stroke: "#FF5252", yAxisId: "right" }
      ]
    },
    source: "Source: Bureau of Labor Statistics, EIA, as of March 2026"
  },
  {
    id: 3,
    label: "QUESTION 03",
    question: "What will the next Fed move be?",
    bullets: [
      "<strong>Markets see a prolonged hold:</strong> Fed funds futures imply a 65% probability the FOMC stays at 4.75% through June, with the first cut not fully priced until Q4 2026 — a stark reversal from the six cuts priced in early 2025.",
      "<strong>The dot plot is hawkish relative to markets:</strong> The March 2026 SEP median projects just one 25bp cut this year, down from three in December. Two FOMC members now see the next move as a hike.",
      "<strong>Data dependency is the mantra:</strong> Chair Powell has emphasized that the committee needs \"clear and convincing\" evidence that the oil-driven inflation impulse is fading before resuming the easing cycle.",
      "<strong>Our base case: one cut in Q4:</strong> We expect the Fed to hold through summer, with a 25bp cut in November if core PCE decelerates to ~2.7%. The risk is skewed toward no cuts at all in 2026."
    ],
    chartType: "line",
    chartData: [
      { date: "Jan 24", actual: 5.50, implied: null },
      { date: "May 24", actual: 5.50, implied: null },
      { date: "Sep 24", actual: 5.00, implied: null },
      { date: "Dec 24", actual: 4.50, implied: null },
      { date: "Jan 25", actual: 4.50, implied: null },
      { date: "May 25", actual: 4.75, implied: null },
      { date: "Sep 25", actual: 4.75, implied: null },
      { date: "Mar 26", actual: 4.75, implied: 4.75 },
      { date: "Jun 26", actual: null, implied: 4.75 },
      { date: "Sep 26", actual: null, implied: 4.65 },
      { date: "Dec 26", actual: null, implied: 4.50 },
      { date: "Mar 27", actual: null, implied: 4.35 }
    ],
    chartConfig: {
      xKey: "date",
      lines: [
        { dataKey: "actual", name: "Actual Fed Funds Rate (%)", stroke: "#00C853", strokeWidth: 3 },
        { dataKey: "implied", name: "Market-Implied Path (%)", stroke: "#00BFA5", strokeDasharray: "8 4", strokeWidth: 2 }
      ]
    },
    source: "Source: Federal Reserve, CME FedWatch, as of March 2026"
  },
  {
    id: 4,
    label: "QUESTION 04",
    question: "Why are stocks down this year?",
    bullets: [
      "<strong>A triple headwind:</strong> Equities face a trifecta of geopolitical risk premium, reaccelerating inflation that delays rate cuts, and valuation compression as the 10-year yield pushes above 4.8%.",
      "<strong>Mega-cap tech is finally correcting:</strong> The Magnificent 7 are down 14% YTD as AI monetization timelines extend and antitrust actions weigh. The equal-weight S&P 500 has outperformed cap-weighted by 600bp.",
      "<strong>International markets are diverging:</strong> European equities are up modestly on defense spending tailwinds and cheaper valuations. EM is mixed — commodity exporters are outperforming, while Asian manufacturers struggle with higher input costs.",
      "<strong>It's a stock-picker's market:</strong> Dispersion is at the highest level since 2020. We favor quality factors, defensive sectors (utilities, healthcare), and select energy infrastructure over broad index exposure."
    ],
    chartType: "horizontal-bar",
    chartData: [
      { name: "S&P 500", value: -8.2, fill: "#FF5252" },
      { name: "Nasdaq 100", value: -12.5, fill: "#FF5252" },
      { name: "Russell 2000", value: -11.8, fill: "#FF5252" },
      { name: "MSCI EAFE", value: 2.1, fill: "#00C853" },
      { name: "MSCI EM", value: -3.4, fill: "#FF7043" },
      { name: "Energy", value: 9.6, fill: "#00C853" },
      { name: "Utilities", value: 4.2, fill: "#00C853" },
      { name: "Healthcare", value: 1.8, fill: "#00C853" },
      { name: "Technology", value: -15.3, fill: "#FF5252" },
      { name: "Consumer Disc.", value: -9.7, fill: "#FF5252" }
    ],
    chartConfig: {
      xKey: "value",
      yKey: "name",
      layout: "vertical"
    },
    source: "Source: Bloomberg, as of March 25, 2026"
  },
  {
    id: 5,
    label: "QUESTION 05",
    question: "Is AI a bubble?",
    bullets: [
      "<strong>Valuations are elevated but not dot-com extreme:</strong> The Mag 7 trade at ~28x forward earnings, well below the 60–80x multiples seen at the 2000 peak. Crucially, these companies have real, growing earnings — unlike the revenue-less dot-com darlings.",
      "<strong>Capex is outrunning revenue — for now:</strong> Hyperscaler AI capex is running at $280B annualized, but AI-attributed revenue is ~$95B. The gap needs to close within 18 months or write-down risk rises materially.",
      "<strong>The pick-and-shovel trade is crowded:</strong> NVIDIA trades at 22x sales, and the semiconductor supply chain is priced for perfection. Any deceleration in data center orders could trigger a sharp de-rating.",
      "<strong>Not a bubble, but a reality check is underway:</strong> We're trimming pure AI momentum plays and rotating toward companies deploying AI to drive productivity — think enterprise software, healthcare AI, and industrial automation."
    ],
    chartType: "line",
    chartData: [
      { year: "Yr 0", dotcom: 100, ai: 100 },
      { year: "Yr 1", dotcom: 155, ai: 148 },
      { year: "Yr 2", dotcom: 230, ai: 210 },
      { year: "Yr 3", dotcom: 380, ai: 285 },
      { year: "Yr 4", dotcom: 510, ai: 320 },
      { year: "Yr 5", dotcom: 420, ai: null },
      { year: "Yr 6", dotcom: 180, ai: null },
      { year: "Yr 7", dotcom: 140, ai: null }
    ],
    chartConfig: {
      xKey: "year",
      lines: [
        { dataKey: "dotcom", name: "Dot-Com Rally (1996–2003)", stroke: "#FF5252", strokeWidth: 2 },
        { dataKey: "ai", name: "AI Rally (2023–Present)", stroke: "#00C853", strokeWidth: 3 }
      ]
    },
    source: "Source: Bloomberg, indexed to 100 at rally start, as of March 2026"
  },
  {
    id: 6,
    label: "QUESTION 06",
    question: "What parts of fixed income have performed well this year?",
    bullets: [
      "<strong>Short duration is king:</strong> With the curve steepening and long-end yields rising, short-duration strategies (1–3yr Treasuries, floating-rate notes) have delivered positive returns while long bonds are down ~5%.",
      "<strong>Credit is holding up — selectively:</strong> IG spreads have widened modestly to 115bp but remain well below recession levels. High yield is more bifurcated, with BB-rated outperforming CCC by ~400bp YTD.",
      "<strong>TIPS are the standout:</strong> Inflation-linked bonds have returned +3.8% YTD as breakevens repriced higher. Real yields above 2% remain attractive from a historical perspective.",
      "<strong>Munis offer value after the selloff:</strong> The muni/Treasury ratio has risen to 85%, making tax-exempt income attractive for high-bracket investors. We favor revenue bonds with essential-service backing."
    ],
    chartType: "horizontal-bar",
    chartData: [
      { name: "TIPS", value: 3.8, fill: "#00C853" },
      { name: "1-3yr Treasuries", value: 2.1, fill: "#00C853" },
      { name: "Floating Rate", value: 2.8, fill: "#00C853" },
      { name: "IG Corporate", value: 0.4, fill: "#00BFA5" },
      { name: "High Yield (BB)", value: 1.2, fill: "#00C853" },
      { name: "High Yield (CCC)", value: -2.9, fill: "#FF5252" },
      { name: "Munis", value: -0.8, fill: "#FF7043" },
      { name: "Long Treasuries (20+yr)", value: -5.1, fill: "#FF5252" },
      { name: "EM Debt (USD)", value: -1.3, fill: "#FF7043" },
      { name: "MBS", value: -0.6, fill: "#FF7043" }
    ],
    chartConfig: {
      xKey: "value",
      yKey: "name",
      layout: "vertical"
    },
    source: "Source: Bloomberg Barclays, ICE BofA, as of March 25, 2026"
  },
  {
    id: 7,
    label: "QUESTION 07",
    question: "Are yields attractive at these levels?",
    bullets: [
      "<strong>Yields are near 20-year highs:</strong> The 10-year Treasury at 4.85% sits in the 92nd percentile of readings since 2005. For income-oriented investors, this is a generationally attractive entry point for high-quality duration.",
      "<strong>Real yields are doing the heavy lifting:</strong> 10-year TIPS yield 2.25% real, well above the -1% to +0.5% range that prevailed for most of 2015–2022. Real income is back.",
      "<strong>Credit yields are compelling across the stack:</strong> IG corporates yield 5.7%, high yield 8.4%, and senior secured loans 7.9%. Even after accounting for expected defaults, carry-adjusted returns look attractive.",
      "<strong>We're extending duration tactically:</strong> At 4.85% on the 10-year, we're adding intermediate duration in portfolios. Our target range for the 10-year is 4.25–5.00% over the next 12 months."
    ],
    chartType: "area",
    chartData: [
      { year: "2005", yield: 4.29 },
      { year: "2007", yield: 4.63 },
      { year: "2008", yield: 3.66 },
      { year: "2010", yield: 3.22 },
      { year: "2012", yield: 1.80 },
      { year: "2014", yield: 2.17 },
      { year: "2016", yield: 2.45 },
      { year: "2018", yield: 2.91 },
      { year: "2020", yield: 0.93 },
      { year: "2021", yield: 1.52 },
      { year: "2022", yield: 3.88 },
      { year: "2023", yield: 3.96 },
      { year: "2024", yield: 4.25 },
      { year: "2025", yield: 4.58 },
      { year: "2026", yield: 4.85 }
    ],
    chartConfig: {
      xKey: "year",
      areaKey: "yield",
      areaName: "10-Year Treasury Yield (%)",
      fill: "#00C853",
      stroke: "#00C853",
      referenceLines: [
        { y: 3.45, label: "20-Year Average: 3.45%", stroke: "#FFB300" }
      ]
    },
    source: "Source: Federal Reserve, Bloomberg, as of March 2026"
  },
  {
    id: 8,
    label: "QUESTION 08",
    question: "Why hasn't gold worked as a geopolitical hedge since the Iran war?",
    bullets: [
      "<strong>The dollar surge is the culprit:</strong> DXY has rallied 6% since the conflict began as flight-to-safety flows favored the USD over gold. A stronger dollar mechanically suppresses gold prices for non-USD buyers.",
      "<strong>Real yields are too high for gold to shine:</strong> With 10-year TIPS yielding 2.25%, the opportunity cost of holding a zero-yielding asset like gold is elevated. Gold thrives when real yields are negative or near zero.",
      "<strong>Central bank buying has slowed:</strong> After record purchases in 2023–2024, EM central banks have moderated gold accumulation as their own currencies face pressure and they deploy reserves to defend FX.",
      "<strong>Gold isn't broken, just overshadowed:</strong> At $2,180/oz, gold is down ~8% from its 2025 highs but up 25% over 3 years. We see it as a long-term portfolio stabilizer, not a short-term geopolitical trade."
    ],
    chartType: "composed",
    chartData: [
      { date: "Oct 25", gold: 2380, dxy: 103.2, realYield: 1.85 },
      { date: "Nov 25", gold: 2340, dxy: 104.1, realYield: 1.92 },
      { date: "Dec 25", gold: 2290, dxy: 105.5, realYield: 2.00 },
      { date: "Jan 26", gold: 2250, dxy: 107.8, realYield: 2.10 },
      { date: "Feb 26", gold: 2210, dxy: 109.0, realYield: 2.18 },
      { date: "Mar 26", gold: 2180, dxy: 109.5, realYield: 2.25 }
    ],
    chartConfig: {
      xKey: "date",
      lines: [
        { dataKey: "gold", name: "Gold ($/oz)", stroke: "#FFB300", yAxisId: "left", strokeWidth: 3 },
        { dataKey: "dxy", name: "DXY Index", stroke: "#00BFA5", yAxisId: "right", strokeWidth: 2 }
      ]
    },
    source: "Source: Bloomberg, World Gold Council, as of March 2026"
  },
  {
    id: 9,
    label: "QUESTION 09",
    question: "Which alternative strategies have done well this year?",
    bullets: [
      "<strong>Managed futures lead the pack:</strong> Trend-following strategies are up ~9% YTD, profiting from persistent trends in energy (long), bonds (short), and USD (long). This is exactly the environment these strategies are designed for.",
      "<strong>Global macro is thriving on dispersion:</strong> Divergent central bank policies, commodity dislocations, and FX volatility have created rich opportunities for discretionary macro managers, up ~7% YTD.",
      "<strong>Private credit continues to compound:</strong> Senior direct lending yields of 10–12% with first-lien protection look attractive, though we're watching CCC-rated vintages from 2021 for stress as rates stay higher for longer.",
      "<strong>Merger arb is a mixed bag:</strong> Deal spreads are wide (~6%) on regulatory uncertainty, but completion rates have fallen. We prefer event-driven strategies with catalyst visibility over passive spread collection."
    ],
    chartType: "bar",
    chartData: [
      { name: "Managed Futures", value: 9.2, fill: "#00C853" },
      { name: "Global Macro", value: 7.1, fill: "#00C853" },
      { name: "Private Credit", value: 5.4, fill: "#00BFA5" },
      { name: "Multi-Strategy", value: 4.8, fill: "#00BFA5" },
      { name: "Long/Short Equity", value: 2.3, fill: "#00BFA5" },
      { name: "Merger Arb", value: 1.1, fill: "#FFB300" },
      { name: "Risk Parity", value: -2.4, fill: "#FF7043" },
      { name: "Equity Market Neutral", value: -0.8, fill: "#FF7043" }
    ],
    chartConfig: {
      xKey: "name",
      bars: [
        { dataKey: "value", name: "YTD Return (%)" }
      ]
    },
    source: "Source: HFR, Bloomberg, as of March 25, 2026"
  },
  {
    id: 10,
    label: "QUESTION 10",
    question: "What is investor risk appetite right now?",
    bullets: [
      "<strong>Sentiment is bearish but not capitulatory:</strong> The AAII bull-bear spread is at -18%, firmly pessimistic, but nowhere near the -40% readings seen at true market bottoms in 2020 and 2022.",
      "<strong>The VIX is elevated but orderly:</strong> At 26, the VIX reflects heightened uncertainty without panic. Notably, the VIX term structure is in contango — markets expect volatility to fade, not spike further.",
      "<strong>Fund flows tell a defensive story:</strong> Money market funds have attracted $380B YTD, while equity funds have seen $120B of outflows. Investors are de-risking, not panicking — a meaningful distinction.",
      "<strong>Contrarian signal is building:</strong> Extreme pessimism historically precedes above-average 12-month returns. We're not calling the bottom, but we're building watchlists of quality names for staged re-entry."
    ],
    chartType: "bar",
    chartData: [
      { name: "AAII Bull %", value: 24, benchmark: 38, fill: "#FF7043" },
      { name: "AAII Bear %", value: 42, benchmark: 31, fill: "#FF5252" },
      { name: "VIX Level", value: 26, benchmark: 20, fill: "#FFB300" },
      { name: "Put/Call Ratio", value: 1.15, benchmark: 0.95, fill: "#FFB300" },
      { name: "IG Spreads (bp)", value: 115, benchmark: 100, fill: "#FFB300" }
    ],
    chartConfig: {
      xKey: "name",
      bars: [
        { dataKey: "value", name: "Current", fill: "#FF7043" },
        { dataKey: "benchmark", name: "Historical Avg", fill: "#78909C" }
      ]
    },
    source: "Source: AAII, CBOE, Bloomberg, as of March 25, 2026"
  }
];
