export const QUESTIONS_DATA = [
  {
    id: 1,
    label: "QUESTION 01",
    question: "How does the Iran war impact the economy?",
    bullets: [
      "<strong>Oil supply shock is the largest since the 1970s:</strong> Iran's closure of the Strait of Hormuz has taken ~10 million barrels/day offline — 21% of global supply. Brent surged to $126/bbl at peak before settling near $108–113, with WTI at ~$95–100.",
      "<strong>Inflation is the key transmission channel:</strong> Sustained $90+ oil will likely push headline CPI from 2.4% in February back toward 3.0–3.5% by mid-year, reversing 18 months of disinflation progress and complicating the Fed's rate-cut path.",
      "<strong>Growth slowdown risk is rising:</strong> Every $10/bbl sustained increase in oil historically shaves 0.1–0.2% off GDP. Combined with tariff headwinds, the Atlanta Fed GDPNow tracker has already moved to sub-2% for Q2.",
      "<strong>Portfolio implication — position for stagflationary risk:</strong> We favor energy infrastructure, TIPS, and commodity baskets. Duration risk is elevated as the oil-inflation feedback loop delays the easing cycle."
    ],
    chartType: "map",
    chartData: [],
    chartConfig: {},
    source: "Source: EIA, Kpler, Dallas Fed, as of March 27, 2026"
  },
  {
    id: 2,
    label: "QUESTION 02",
    question: "What do higher oil prices mean for inflation and the Fed?",
    bullets: [
      "<strong>Oil is just the start — it ripples through everything:</strong> Crude is up ~50% YTD, but the inflationary transmission goes far beyond gasoline. Oil feeds into fertilizers, plastics, freight, and chemicals — raising costs across food, manufacturing, and consumer goods with a 3–6 month lag.",
      "<strong>Commodities are spiking in tandem:</strong> Aluminum hit a 4-year high as 20% of global smelting capacity is in the Middle East. Qatar's Ras Laffan damage has taken one-third of global helium offline, threatening semiconductor and MRI supply chains. Food prices rose 3.1% YoY in February — before the oil shock hit.",
      "<strong>February CPI was 2.4% — but March will be sharply higher:</strong> The February print was tame (0.3% MoM, 2.4% YoY), but it captured none of the March oil spike. Energy services were already running +6.3% YoY and natural gas +10.9%. The March report (April 10) is expected above 3%.",
      "<strong>The Fed can't cut into a commodity supply shock:</strong> The FOMC held at 3.50–3.75% and is trapped — oil acts as both a growth drag and inflation accelerant. Goldman pushed its first rate cut call to September. The risk of zero cuts in 2026 is rising."
    ],
    chartType: "horizontal-bar",
    chartData: [
      { name: "Brent Crude", value: 62, fill: "#FF5252" },
      { name: "WTI Crude", value: 50, fill: "#FF5252" },
      { name: "Natural Gas (EU)", value: 35, fill: "#FF7043" },
      { name: "Aluminum", value: 22, fill: "#FF7043" },
      { name: "Wheat", value: 15, fill: "#FFB300" },
      { name: "Food CPI (YoY)", value: 3.1, fill: "#FFB300" },
      { name: "Gasoline", value: -5.6, fill: "#00C853" },
      { name: "U.S. Nat. Gas", value: -8, fill: "#00C853" }
    ],
    chartConfig: {
      xKey: "value",
      yKey: "name",
      layout: "vertical"
    },
    source: "Source: BLS, EIA, Bloomberg, CNN Business, as of March 27, 2026. Gasoline/US Nat Gas are pre-shock Feb figures."
  },
  {
    id: 3,
    label: "QUESTION 03",
    question: "What will the next Fed move be?",
    bullets: [
      "<strong>The Fed held at 3.50–3.75% in March:</strong> The FOMC voted 11-1 to hold, acknowledging that \"economic activity has been expanding at a solid pace\" but inflation \"remains somewhat elevated\" — coded language for caution.",
      "<strong>The dot plot shows deep division:</strong> Of 19 participants, 7 see rates unchanged for all of 2026. The median still projects one 25bp cut, but the Iran conflict has pushed rate cut expectations further out.",
      "<strong>Markets have dramatically repriced:</strong> At the start of 2026, markets priced 3+ cuts. Now, the first full cut isn't priced until late Q4. Goldman and JPMorgan both pushed their first-cut calls to September at earliest.",
      "<strong>Our base case: hold through summer, one cut in Q4:</strong> The oil-inflation impulse needs to fade before the Fed can act. If core PCE stays above 2.5%, the risk is zero cuts in 2026 — or even a hike if expectations de-anchor."
    ],
    chartType: "line",
    chartData: [
      { date: "Jan 24", actual: 5.50, implied: null },
      { date: "May 24", actual: 5.50, implied: null },
      { date: "Sep 24", actual: 4.75, implied: null },
      { date: "Dec 24", actual: 4.25, implied: null },
      { date: "Mar 25", actual: 4.25, implied: null },
      { date: "Jun 25", actual: 3.75, implied: null },
      { date: "Sep 25", actual: 3.75, implied: null },
      { date: "Dec 25", actual: 3.75, implied: null },
      { date: "Mar 26", actual: 3.625, implied: 3.625 },
      { date: "Jun 26", actual: null, implied: 3.625 },
      { date: "Sep 26", actual: null, implied: 3.55 },
      { date: "Dec 26", actual: null, implied: 3.40 }
    ],
    chartConfig: {
      xKey: "date",
      lines: [
        { dataKey: "actual", name: "Actual Fed Funds Rate (%)", stroke: "#00C853", strokeWidth: 3 },
        { dataKey: "implied", name: "Market-Implied Path (%)", stroke: "#00BFA5", strokeDasharray: "8 4", strokeWidth: 2 }
      ]
    },
    source: "Source: Federal Reserve, CME FedWatch, as of March 27, 2026"
  },
  {
    id: 4,
    label: "QUESTION 04",
    question: "Why are stocks down this year?",
    bullets: [
      "<strong>A double shock — tariffs then war:</strong> The S&P 500 hit all-time highs above 6,400 in January on AI optimism. Then Trump's tariff escalation in February triggered a 10% correction, and the Iran conflict in March added another 6% leg down.",
      "<strong>Mega-cap tech is leading the decline:</strong> The Magnificent 7 are down ~13% YTD as AI capex questions mount and earnings growth decelerates to 18% — barely above the other 493 stocks at 13%. Equal-weight has outperformed cap-weighted significantly.",
      "<strong>International markets are the bright spot:</strong> MSCI EAFE is up +10% YTD on European defense spending and cheaper valuations. Emerging markets are up ~5%, led by commodity exporters benefiting from the oil spike.",
      "<strong>Sector rotation is dramatic:</strong> Energy leads (+15% YTD), while technology (-15%) and consumer discretionary (-10%) lag. Dispersion is at 2020 levels — favoring active management over passive index holding."
    ],
    chartType: "horizontal-bar",
    chartData: [
      { name: "S&P 500", value: -5.8, fill: "#FF5252" },
      { name: "Nasdaq 100", value: -8.1, fill: "#FF5252" },
      { name: "Russell 2000", value: -12.3, fill: "#FF5252" },
      { name: "MSCI EAFE", value: 10.0, fill: "#00C853" },
      { name: "MSCI EM", value: 5.0, fill: "#00C853" },
      { name: "Energy", value: 15.2, fill: "#00C853" },
      { name: "Utilities", value: 4.8, fill: "#00C853" },
      { name: "Healthcare", value: 2.1, fill: "#00BFA5" },
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
      "<strong>Valuations are elevated but not dot-com extreme:</strong> The Mag 7 trade at ~29x forward earnings vs. the S&P 500 at 22x. At the 2000 peak, tech leaders traded at 60–80x. These companies have real, growing earnings — but the premium is compressing.",
      "<strong>Capex-to-revenue gap is the key risk:</strong> Hyperscaler AI capex is running at $280B+ annualized, but AI-attributed revenue is ~$95B. The market has shifted from rewarding AI investment promises to demanding actual financial results.",
      "<strong>Earnings growth is decelerating fast:</strong> Mag 7 profits are expected to grow ~18% in 2026 — the slowest pace since 2022 and only modestly better than the 13% growth expected from the other 493 S&P 500 companies.",
      "<strong>Not a bubble, but a reality check:</strong> We're rotating from pure AI momentum into companies deploying AI for productivity — enterprise software, healthcare AI, and industrial automation offer better risk/reward at current multiples."
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
      "<strong>Short duration and floating rate lead:</strong> With the curve steepening and oil-driven inflation fears pushing long-end yields higher, 1–3yr Treasuries (+1.8%) and floating-rate notes (+2.4%) are the top performers in investment grade.",
      "<strong>TIPS are the standout:</strong> Inflation-linked bonds have returned +3.2% YTD as breakevens repriced higher on the oil shock. Real yields near 2% remain historically attractive and offer genuine inflation protection.",
      "<strong>Credit is holding — selectively:</strong> IG spreads have widened modestly to ~110bp but remain below recession levels. High yield is bifurcated: BB-rated bonds are up +1.0%, while CCC-rated are down -3.5% as default fears resurface.",
      "<strong>Long duration is the biggest casualty:</strong> 20+ year Treasuries are down ~4.5% as the 10-year yield pushed above 4.4%. We favor intermediate duration and are waiting for yields to peak before extending."
    ],
    chartType: "horizontal-bar",
    chartData: [
      { name: "TIPS", value: 3.2, fill: "#00C853" },
      { name: "Floating Rate", value: 2.4, fill: "#00C853" },
      { name: "1-3yr Treasuries", value: 1.8, fill: "#00C853" },
      { name: "High Yield (BB)", value: 1.0, fill: "#00BFA5" },
      { name: "IG Corporate", value: 0.3, fill: "#00BFA5" },
      { name: "MBS", value: -0.5, fill: "#FF7043" },
      { name: "Munis", value: -1.1, fill: "#FF7043" },
      { name: "EM Debt (USD)", value: -1.8, fill: "#FF5252" },
      { name: "High Yield (CCC)", value: -3.5, fill: "#FF5252" },
      { name: "Long Treasuries (20+yr)", value: -4.5, fill: "#FF5252" }
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
      "<strong>Yields are at multi-year highs:</strong> The 10-year Treasury at 4.43% sits well above the post-GFC average of ~2.5% and near 8-month highs, driven by oil-inflation fears and geopolitical risk premium. For income investors, this is a strong entry point.",
      "<strong>Real yields are genuinely attractive:</strong> 10-year TIPS yield ~2.0% real — far above the negative real yields that prevailed from 2015–2022. For the first time in a generation, bonds offer meaningful inflation-adjusted income.",
      "<strong>Credit yields offer compelling carry:</strong> IG corporates yield ~5.2%, high yield 7.8%, and senior secured loans 7.5%. Even after accounting for expected defaults, carry-adjusted returns are historically attractive.",
      "<strong>We're adding intermediate duration tactically:</strong> At 4.4%+ on the 10-year, we see value in the 5–7 year part of the curve. Our 12-month target range for the 10-year is 3.9–4.6%, suggesting modest capital gains potential."
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
      { year: "2025", yield: 4.18 },
      { year: "2026", yield: 4.43 }
    ],
    chartConfig: {
      xKey: "year",
      areaKey: "yield",
      areaName: "10-Year Treasury Yield (%)",
      fill: "#00C853",
      stroke: "#00C853",
      referenceLines: [
        { y: 3.10, label: "20-Year Avg: 3.10%", stroke: "#FFB300" }
      ]
    },
    source: "Source: Federal Reserve, Bloomberg, as of March 27, 2026"
  },
  {
    id: 8,
    label: "QUESTION 08",
    question: "Why hasn't gold worked as a geopolitical hedge since the Iran war?",
    bullets: [
      "<strong>Gold is down sharply despite war:</strong> Spot gold has plunged from $5,400 in January to ~$4,430–4,560 in late March — a stunning ~16% decline in 2026. This is the opposite of what most investors expected from a major geopolitical crisis.",
      "<strong>The dollar surge is the culprit:</strong> DXY has strengthened ~4% since mid-February as flight-to-safety flows favored USD over gold. A 1% rise in DXY historically produces a 1–1.5% decline in gold's dollar price.",
      "<strong>Rising real yields raise the opportunity cost:</strong> With 10-year TIPS yielding ~2.0% real, the cost of holding zero-yielding gold is elevated. Oil-driven inflation is pushing nominal yields higher, making Treasuries a competitive safe haven.",
      "<strong>Gold isn't broken — it's just overwhelmed:</strong> After a 65% surge in 2025, gold was overextended. The current pullback is a positioning unwind, not a fundamental regime change. We still see gold as a long-term portfolio stabilizer."
    ],
    chartType: "composed",
    chartData: [
      { date: "Sep 25", gold: 4900, dxy: 97.5 },
      { date: "Oct 25", gold: 5100, dxy: 97.8 },
      { date: "Nov 25", gold: 5250, dxy: 98.0 },
      { date: "Dec 25", gold: 5350, dxy: 98.2 },
      { date: "Jan 26", gold: 5400, dxy: 96.5 },
      { date: "Feb 26", gold: 5050, dxy: 98.8 },
      { date: "Mar 26", gold: 4500, dxy: 99.9 }
    ],
    chartConfig: {
      xKey: "date",
      lines: [
        { dataKey: "gold", name: "Gold ($/oz)", stroke: "#FFB300", yAxisId: "left", strokeWidth: 3 },
        { dataKey: "dxy", name: "DXY Index", stroke: "#00BFA5", yAxisId: "right", strokeWidth: 2 }
      ]
    },
    source: "Source: Bloomberg, World Gold Council, as of March 26, 2026"
  },
  {
    id: 9,
    label: "QUESTION 09",
    question: "Which alternative strategies have done well this year?",
    bullets: [
      "<strong>Managed futures are thriving:</strong> Trend-following strategies are up ~9% YTD, capturing persistent trends in energy (long), bonds (short), and USD (long). Historically, when oil trades $100–140, managed futures gain ~9% on average.",
      "<strong>Global macro is the top allocator pick for 2026:</strong> Discretionary macro strategies are up ~7% YTD on FX volatility, rate divergence, and commodity dislocations. Over half of institutional allocators ranked it in their top two strategies.",
      "<strong>Private credit continues to compound:</strong> Senior direct lending yields of 9–11% with first-lien protection remain attractive, though higher-for-longer rates are testing weaker borrowers in CCC-rated vintages from 2021.",
      "<strong>Allocators are increasing hedge fund exposure:</strong> 64% of institutional investors plan to increase hedge fund allocations in 2026, translating to ~$24B of net inflows — the strongest demand since 2018."
    ],
    chartType: "bar",
    chartData: [
      { name: "Managed Futures", value: 9.1, fill: "#00C853" },
      { name: "Global Macro", value: 7.0, fill: "#00C853" },
      { name: "Private Credit", value: 5.2, fill: "#00BFA5" },
      { name: "Multi-Strategy", value: 4.5, fill: "#00BFA5" },
      { name: "Quant Equity", value: 3.8, fill: "#00BFA5" },
      { name: "Long/Short Equity", value: 2.1, fill: "#FFB300" },
      { name: "Merger Arb", value: 0.8, fill: "#FFB300" },
      { name: "Risk Parity", value: -3.2, fill: "#FF5252" }
    ],
    chartConfig: {
      xKey: "name",
      bars: [
        { dataKey: "value", name: "YTD Return (%)" }
      ]
    },
    source: "Source: HFR, Barclays, BNP Paribas, as of March 2026"
  },
  {
    id: 10,
    label: "QUESTION 10",
    question: "What is investor risk appetite right now?",
    bullets: [
      "<strong>Bearish sentiment has surged:</strong> AAII bearish readings jumped to 46.4% in mid-March, up from 35.5% two weeks prior. The CNN Fear & Greed Index plunged to \"Extreme Fear\" at 19.97 — its lowest since October 2022.",
      "<strong>Massive rotation into safety:</strong> Capital is flowing out of high-growth tech and into energy, defense, and money markets. The VIX breached the critical 19.9 level, signaling a shift from complacency to high-alert status.",
      "<strong>Institutional positioning reflects caution:</strong> Fund managers are overweight cash and energy, underweight tech and consumer discretionary. Net equity exposure has fallen sharply from the bullish consensus at year-start.",
      "<strong>Contrarian signal is building — but not yet extreme:</strong> While sentiment is pessimistic, it hasn't reached the capitulatory -40% bull-bear levels seen at true bottoms. We're building watchlists, not going all-in."
    ],
    chartType: "bar",
    chartData: [
      { name: "Cash", value: 18, fill: "#00C853" },
      { name: "Energy", value: 14, fill: "#00C853" },
      { name: "Healthcare", value: 5, fill: "#00BFA5" },
      { name: "Utilities", value: 3, fill: "#00BFA5" },
      { name: "Industrials", value: -2, fill: "#FF7043" },
      { name: "Financials", value: -5, fill: "#FF7043" },
      { name: "Consumer Disc.", value: -12, fill: "#FF5252" },
      { name: "Technology", value: -22, fill: "#FF5252" }
    ],
    chartConfig: {
      xKey: "name",
      bars: [
        { dataKey: "value", name: "Net Overweight/Underweight (%)" }
      ]
    },
    source: "Source: AAII, CBOE, BofA Fund Manager Survey, as of March 2026"
  }
];
