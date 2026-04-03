export const SECTIONS = {
  macro: { label: "MACRO", color: "#FF7043" },
  usEquities: { label: "US EQUITIES", color: "#00C853" },
  intlEquities: { label: "INTERNATIONAL EQUITIES", color: "#00BFA5" },
  fixedIncome: { label: "FIXED INCOME", color: "#FFB300" },
  portfolio: { label: "PORTFOLIO & ALTERNATIVES", color: "#BB86FC" },
};

export const QUESTIONS_DATA = [
  // ── MACRO (2) ──────────────────────────────────────────────
  {
    id: 1,
    section: "macro",
    owner: "F",
    label: "QUESTION 01",
    question: "How does the Iran war impact the US economy?",
    subtitle: "Energy security, defense spending, and long-term economic consequences",
    bullets: [
      "<strong>Energy security is now a first-order economic risk:</strong> Iran's disruption of the Strait of Hormuz has taken ~10 million barrels/day offline — 21% of global supply. Brent surged past $120/bbl before settling near $108–113. Energy independence and infrastructure resilience are no longer hypothetical concerns.",
      "<strong>The growth impact is real, and near-term inflation is rising:</strong> Every $10/bbl sustained increase in oil historically shaves 0.1–0.2% off GDP. Combined with tariff headwinds, GDPNow has moved to sub-2% for Q2. Our base case is for near-term inflation to rise as a result of the energy shock — this is a supply-side inflation impulse, not demand-driven overheating. The drag on growth is significant, but consumer balance sheets remain supportive.",
      "<strong>Despite rising inflation, the bar for a Fed hike remains extremely high:</strong> The Fed is much more likely to hold than to hike — they'll look through supply-driven inflation, especially given labor market fragility. To justify a hike, the Fed would need to see inflation expectations de-anchoring AND a hot labor market, and we don't see either. With unemployment stable but hiring frozen and quit rates near multi-year lows, there is no wage-price spiral forming. The FOMC stays at 3.50–3.75% for longer.",
      "<strong>Energy security is now a structural investment theme:</strong> The conflict has accelerated a bipartisan shift toward energy independence, grid hardening, and domestic production. Companies enabling defense infrastructure, resilient power systems, and onshore energy supply chains have durable tailwinds that will outlast any single conflict. This is a multi-year capex cycle, not a trade."
    ],
    tickers: ["IDEF", "POWR"],
    placeholderChart: {
      type: "timeline",
      title: "Oil Shock Episodes & GDP Impact",
      description: "Historical comparison of oil supply disruptions and their effect on US GDP growth"
    },
    source: "Source: EIA, Kpler, Dallas Fed, as of March 2026"
  },
  {
    id: 2,
    section: "macro",
    owner: "F",
    label: "QUESTION 02",
    question: "What do higher oil prices mean for inflation and the Fed?",
    subtitle: "Commodity pass-through, CPI trajectory, TIPS, and why the Fed is trapped",
    bullets: [
      "<strong>The inflation path is uneven, not a straight line up:</strong> Crude is up ~50% YTD and the energy shock is real, but the transmission isn't uniform — some categories are cooling (used cars, apparel, shelter decelerating) while energy and food are spiking. Core inflation expectations remain near the Fed's 2% target: 5-year TIPS breakevens at ~2.55% and 10-year at ~2.34% suggest the market sees this as transitory-ish, not a permanent regime shift. That inverted breakeven structure supports an allocation to short- and intermediate-term TIPS as a structural inflation hedge.",
      "<strong>The growth backdrop is becoming more mixed:</strong> Not collapsing, but softening. Consumer spending is decelerating as the energy shock erodes real purchasing power, business investment is cautious amid policy uncertainty, and housing remains acutely rate-sensitive. A more balanced macro environment overall — not the overheating of 2022, not recession either. Somewhere in between.",
      "<strong>For the Fed, this creates a mild stagflation-like trade-off:</strong> Inflation above target but growth slowing — the FOMC can't cut into inflation, but they also can't hike into decelerating growth. At 3.50–3.75%, policy is already restrictive — well above neutral. The Fed doesn't need to do more; they just need to wait. The risk of zero cuts in 2026 is rising, but so is the risk of overtightening if they don't eventually ease.",
      "<strong>TIPS remain the best expression of this view:</strong> With inflation uneven, growth mixed, and the Fed trapped, short- and intermediate-term TIPS offer carry, inflation protection, and potential capital appreciation if real rates eventually decline. The breadth of the commodity move — aluminum at a 4-year high, food prices +3.1% YoY — reinforces the structural case for inflation-linked exposure."
    ],
    tickers: ["TIP", "STIP"],
    placeholderChart: {
      type: "dual-axis-line",
      title: "Oil Price vs. CPI (YoY)",
      description: "WTI crude price overlaid with headline CPI, showing the pass-through lag"
    },
    source: "Source: BLS, EIA, Bloomberg, as of March 2026"
  },

  // ── MACRO continued (2) ─────────────────────────────────────
  {
    id: 3,
    section: "macro",
    owner: "S",
    label: "QUESTION 03",
    question: "Is AI leading to higher unemployment?",
    subtitle: "Immigration trends and AI are reshaping labor supply and demand — and the surface calm hides deeper shifts",
    bullets: [
      "<strong>Low-hire, low-fire — a tenuous equilibrium:</strong> The labor market looks stable on the surface — unemployment is around 4.1% and hasn't spiked — but hiring rates and quit rates are both near multi-year lows. Workers aren't getting laid off, but they're not getting hired either. This isn't a healthy market — it's a frozen one.",
      "<strong>Immigration and AI are reshaping labor supply and demand simultaneously:</strong> Immigration policy shifts are tightening labor supply in sectors like agriculture, construction, and hospitality, while AI is compressing demand for entry-level knowledge work. These forces are hitting different parts of the market at the same time, creating pressure on both ends of the skill spectrum.",
      "<strong>A lot is happening under the surface:</strong> Unemployment isn't rising, but that masks real churn — sector-specific displacement, declining job mobility, and a growing mismatch between where workers are and where demand is heading. The equilibrium is fragile, and a single macro shock could tip it.",
      "<strong>We don't think the Fed hikes in this environment:</strong> Given how fragile parts of the labor market appear — especially in rate-sensitive sectors like housing and commercial construction — we believe the Fed stays on hold. Tightening into a market that's only superficially stable risks tipping the balance."
    ],
    tickers: [],
    placeholderChart: {
      type: "line",
      title: "JOLTS Hires Rate & Quits Rate (2019–Present)",
      description: "Monthly hires and quits rates showing the decline in labor market dynamism despite low unemployment"
    },
    source: "Source: BLS, JOLTS, Atlanta Fed Wage Tracker, CBO, as of March 2026"
  },
  {
    id: 4,
    section: "macro",
    owner: "M / JJ",
    label: "QUESTION 04",
    question: "What are the implications of the midterms?",
    subtitle: "Historical patterns, policy uncertainty, and market positioning",
    bullets: [
      "<strong>Midterm periods are historically associated with subdued — and often negative — market returns:</strong> Since 1950, the S&P 500 has averaged minimal returns in the six months leading up to midterm elections. But hiding beneath the surface-level numbers is a pre-event risk sell-off: markets tend to sell off in anticipation of political uncertainty, not just trade sideways. The weakness is real and concentrated in the weeks before the election.",
      "<strong>The pattern: markets bottom before the vote, then rip higher:</strong> In past midterm cycles, markets tend to bottom roughly 4–6 weeks before Election Day and begin to price in resolution. Once results are in, the S&P 500 has averaged a 17% trough-to-peak rally from midterm year lows to 12-month highs. Clarity — in either direction — is what markets crave. The post-midterm rally is one of the most reliable seasonal patterns in equities.",
      "<strong>Prediction markets are pricing in a Democratic sweep:</strong> Polymarket currently prices Democratic control of both the House and Senate at elevated odds, reflecting voter sentiment on the economy and the Iran conflict. A Democratic sweep could meaningfully impact tax policy (reversal of 2025 cuts), tariff stance (de-escalation), and regulatory direction (tech, energy, financials). Prediction markets have become a key real-time signal for political risk — advisors should be watching these odds as closely as polls.",
      "<strong>Key policy overhang: tariffs and tax extensions:</strong> The 2025 tax cuts expire in 2027, and the campaign will center on whether to extend them. Tariff policy is also at stake — any shift in trade stance could move sectors dramatically. The outcome of the midterms will determine whether the current fiscal and trade regime is extended or unwound.",
      "<strong>Defense and energy spending are bipartisan:</strong> Regardless of outcome, the Iran conflict has locked in elevated defense budgets for years. Energy infrastructure spending is similarly supported across the aisle — these are durable secular themes that transcend the election cycle."
    ],
    tickers: ["BINC", "BLCR"],
    placeholderChart: {
      type: "line",
      title: "S&P 500 Performance in Midterm Years",
      description: "Average S&P 500 path during midterm years vs. all years — markets tend to trade sideways then rally"
    },
    source: "Source: Bloomberg, LPL Research, as of March 2026"
  },

  // ── US EQUITIES (3) ────────────────────────────────────────
  {
    id: 5,
    section: "usEquities",
    owner: "S",
    label: "QUESTION 05",
    question: "Should I be concerned about valuations?",
    subtitle: "P/E compression, earnings strength, and the rates connection",
    bullets: [
      "<strong>US equities are historically cheap:</strong> The S&P 500 trades at a lower forward P/E than its 5-year average, and tech is below its 5-year average multiple. Semiconductors are now trading at a lower P/E than consumer staples. The post-correction reset has brought valuations back to genuinely cheap levels.",
      "<strong>Earnings strength is broad-based:</strong> S&P 500 EPS estimates for 2026 remain in the $270+ range. Energy and industrials are seeing upgrades, and tech — particularly semiconductors — is posting strong revisions. Earnings resilience is wider than the market is pricing.",
      "<strong>The rates view matters here:</strong> The market is pricing in higher-for-longer, but we think we'll see at least one cut this year. If the Fed moves, the re-rating potential for equities is meaningful.",
      "<strong>Our view: selectivity over broad beta.</strong> We see opportunity in AI-exposed names and reshoring beneficiaries — industrials, materials, and areas where the technology buildout is driving earnings."
    ],
    tickers: ["BLCR", "QUAL"],
    placeholderChart: {
      type: "bar",
      title: "S&P 500 & Tech Forward P/E vs. 5-Year Average",
      description: "Current forward P/E vs. 5-year average for broad market and tech sector"
    },
    source: "Source: FactSet, Bloomberg, as of March 2026"
  },
  {
    id: 6,
    section: "usEquities",
    owner: "JF",
    label: "QUESTION 06",
    question: "What themes should I be watching?",
    subtitle: "AI evolution, energy security, and the next wave of thematic investing",
    bullets: [
      "<strong>We still see the AI theme — but the winners are shifting:</strong> The infrastructure build (chips, cloud) rewarded Nvidia and hyperscalers. Returns now shift to companies using AI to drive margins, not just building the tools.",
      "<strong>Energy security has emerged as a major new theme:</strong> The Iran conflict has made energy independence a national priority. Companies across the energy value chain — from upstream producers to midstream infrastructure to grid modernization — are benefiting from bipartisan policy support and accelerating capital flows.",
      "<strong>The intersection of AI and energy is compelling:</strong> AI data centers are driving massive power demand growth. Companies providing power generation, grid infrastructure, and cooling solutions for AI compute are seeing secular tailwinds from both themes simultaneously.",
      "<strong>We see opportunity in the \"picks and shovels\" layer:</strong> Data centers, networking, power infrastructure, and enterprise platforms — where cash flow and margins matter more than TAM narratives."
    ],
    tickers: ["BAI", "POWR"],
    placeholderChart: {
      type: "funnel",
      title: "Thematic Opportunity Map: AI + Energy Security",
      description: "Investment themes across the AI adoption cycle and energy security value chain"
    },
    source: "Source: Goldman Sachs, Gartner, company filings, as of March 2026"
  },
  {
    id: 7,
    section: "usEquities",
    owner: "DJ",
    label: "QUESTION 07",
    question: "Growth vs. Value: which style should I lean into?",
    subtitle: "Russell 1000 divergence, large cap vs. small cap, and factor dynamics",
    bullets: [
      "<strong>Value has outperformed growth by ~800bp YTD:</strong> Russell 1000 Value is roughly flat; Growth is down ~8%. Energy, financials, and healthcare carrying value; tech and consumer discretionary dragging growth.",
      "<strong>What's driving the divergence:</strong> Rising rates compress long-duration growth cash flows more than near-term value. The oil shock amplifies this — boosting energy and industrials (value) while pressuring tech margins (growth).",
      "<strong>Large cap vs. small cap — getting more convicted:</strong> Small caps are at extreme valuation discounts to large caps. If the Fed cuts and we avoid recession, quality small caps could see a meaningful catch-up trade.",
      "<strong>Adding value tilts — staying quality-aware:</strong> Profitable value (high ROE, strong balance sheets) over deep/distressed value. Dividend growers in financials, industrials, and energy are our preferred expression."
    ],
    tickers: ["DYNF", "BLCR"],
    placeholderChart: {
      type: "line",
      title: "Russell 1000 Growth vs. Russell 1000 Value",
      description: "Cumulative return comparison indexed to 100 at Jan 1, 2026 — showing the style divergence"
    },
    source: "Source: Russell, Morningstar, Bloomberg, as of March 2026"
  },

  // ── INTERNATIONAL EQUITIES (1) ─────────────────────────────
  {
    id: 8,
    section: "intlEquities",
    owner: "O",
    label: "QUESTION 08",
    question: "Why allocate to international equities?",
    subtitle: "EM opportunity, dollar dynamics, and the valuation case",
    bullets: [
      "<strong>Most investors are underweight EM:</strong> Average US portfolio has 5–7% in EM vs. ~12% of global market cap. MSCI EM at ~11x forward earnings — risk/reward is compelling.",
      "<strong>The EM commodity trade is working:</strong> Brazil, Saudi Arabia, and Indonesia are direct beneficiaries of higher oil and commodity prices. EM earnings revisions are turning positive for the first time since 2021, with stronger fiscal positions than prior cycles.",
      "<strong>Dollar weakness is a tailwind:</strong> The dollar's 2025–2026 strength may be peaking as US growth decelerates and rate differentials narrow. A weaker dollar amplifies international returns for US-based investors.",
      "<strong>Europe is having a moment:</strong> Defense spending surging post-Iran, fiscal stimulus accelerating, ECB cutting rates. STOXX 600 up ~8% YTD in dollar terms — outpacing the S&P by 14 percentage points."
    ],
    tickers: ["IEMG", "EWY"],
    placeholderChart: {
      type: "bar",
      title: "YTD Returns: US vs. International (USD)",
      description: "S&P 500, MSCI EAFE, MSCI EM, and regional breakdowns — YTD total return in USD"
    },
    source: "Source: MSCI, Bloomberg, as of March 2026"
  },

  // ── FIXED INCOME (2) ───────────────────────────────────────
  {
    id: 9,
    section: "fixedIncome",
    owner: "JA",
    label: "QUESTION 09",
    question: "Where are the best opportunities in fixed income?",
    subtitle: "Short-end preference, spread dynamics, MBS quality, and HALO securities",
    bullets: [
      "<strong>Favor the short end:</strong> The market is pricing in fewer rate moves than we expect. 1–3 year IG paper yields 5%+ with minimal duration risk — if the Fed cuts, the front end offers carry and capital appreciation.",
      "<strong>Spreads widening — dial up quality:</strong> IG spreads at 130bp, HY at 420bp. Quality fixed income pays you to own bonds without reaching for risk. MBS offers agency backing and a yield pick over Treasuries.",
      "<strong>HALO securities:</strong> Heavy Asset, Low Obsolescence — CMBS backed by data centers, mission-critical infrastructure, and essential-use properties. Spreads of 180–220bp over Treasuries with strong fundamentals.",
      "<strong>Avoid the long end:</strong> $2T+ annual deficits and Treasury supply keep the term premium elevated. We're underweight 10yr+ maturities."
    ],
    tickers: ["CLOA", "CMBS"],
    placeholderChart: {
      type: "area",
      title: "Yield Curve & Spread Dynamics",
      description: "Current yield curve with IG/HY/MBS spread overlay and historical comparison"
    },
    source: "Source: Bloomberg, ICE BofA, as of March 2026"
  },
  {
    id: 10,
    section: "fixedIncome",
    owner: "DJ",
    label: "QUESTION 10",
    question: "Is private credit a systemic risk?",
    subtitle: "The $1.7T market, leverage concerns, and what advisors need to know",
    bullets: [
      "<strong>Private credit has tripled in five years:</strong> The market has grown from ~$600B in 2020 to ~$1.7T today, fueled by banks retreating from leveraged lending and investors chasing yield. Growth this fast always warrants scrutiny.",
      "<strong>Default rates are rising from a low base:</strong> Private credit defaults have ticked up to ~3.5% from ~2% a year ago, driven by highly leveraged 2021-vintage deals. Senior secured lending (the bulk of the market) is holding up well — it's the riskier tranches showing stress.",
      "<strong>Systemic risk is limited — for now:</strong> Unlike the 2008 mortgage market, private credit isn't deeply interconnected with the banking system. But rising correlation between private credit and public high yield suggests the \"diversification\" benefit is overstated.",
      "<strong>Selectivity is paramount:</strong> We still see value in senior direct lending at 9–11% yields with first-lien protection. But we're avoiding 2021-vintage funds with excessive leverage and recommending investors stress-test their private credit allocations for a recession scenario."
    ],
    tickers: [],
    placeholderChart: {
      type: "area",
      title: "Private Credit Market Size & Default Rate",
      description: "AUM growth of private credit market with overlay of trailing 12-month default rates"
    },
    source: "Source: Preqin, PitchBook, LCD, as of March 2026"
  },

  // ── PORTFOLIO & ALTERNATIVES (3) ───────────────────────────
  {
    id: 11,
    section: "portfolio",
    owner: "O",
    label: "QUESTION 11",
    question: "What has worked as a diversifier this year?",
    subtitle: "Liquid alternatives strategies and strong performance in a tough market",
    bullets: [
      "<strong>Bonds have failed as a diversifier:</strong> Stocks and bonds are positively correlated this year — when equities sold off, fixed income offered no cushion. In a supply-driven inflation shock, both assets move together. The 60/40 assumption is broken in this regime.",
      "<strong>Gold is unreliable:</strong> Gold sometimes works as a hedge, sometimes doesn't. Rising real rates and dollar strength have overwhelmed the safe-haven bid this quarter. You can't count on gold when you need it most.",
      "<strong>Global market-neutral strategies are the answer:</strong> Strategies like BDMIX deliver uncorrelated returns by design — they're not dependent on rates, oil, or equity direction. CTA and macro strategies are up ~8–12% YTD, capturing volatility across asset classes. This is what true diversification looks like.",
      "<strong>This is structural, not tactical:</strong> With geopolitical risk elevated, inflation sticky, and traditional diversifiers unreliable, liquid alternatives deserve a permanent 10–20% portfolio allocation."
    ],
    tickers: ["IALT", "BDMIX"],
    placeholderChart: {
      type: "bar",
      title: "YTD Performance: Liquid Alts vs. Traditional Assets",
      description: "Managed futures, global macro, multi-strategy vs. S&P 500, Agg Bond, and Gold"
    },
    source: "Source: Bloomberg, HFR, Morningstar, as of March 2026"
  },
  {
    id: 12,
    section: "portfolio",
    owner: "JF",
    label: "QUESTION 12",
    question: "Why are stocks, bonds, and gold all down this year?",
    subtitle: "Understanding the rare triple drawdown and what it means for portfolios",
    bullets: [
      "<strong>This is a rare but not unprecedented event:</strong> Simultaneous declines across equities, fixed income, and gold have occurred in only ~5% of calendar quarters since 1970. The common thread is a supply-driven inflation shock combined with tightening financial conditions — exactly what we're seeing.",
      "<strong>The mechanism: real rates rising + growth fears:</strong> When real rates spike (as they have with the oil shock pushing inflation expectations higher than nominal yields), both bonds and gold suffer. Equities face the double hit of margin compression from energy costs and multiple compression from higher rates.",
      "<strong>Gold's decline is counter-intuitive but explainable:</strong> Gold typically rallies during geopolitical crises, but this time rising real rates and dollar strength have overwhelmed the safe-haven bid. We view this as temporary — once the Fed signals accommodation, gold should resume its structural uptrend.",
      "<strong>The takeaway for portfolios:</strong> Traditional diversification isn't broken — it's being stress-tested. These episodes historically resolve within 1–2 quarters, and the subsequent 12-month returns across all three asset classes are typically strong. This is a reason to rebalance, not to panic."
    ],
    tickers: ["IALT", "TIP"],
    placeholderChart: {
      type: "line",
      title: "YTD Drawdown: S&P 500, Agg Bond, Gold",
      description: "Cumulative return paths for equities, fixed income, and gold showing the triple drawdown"
    },
    source: "Source: Bloomberg, World Gold Council, as of March 2026"
  },
  {
    id: 13,
    section: "portfolio",
    owner: "JA",
    label: "QUESTION 13",
    question: "What are clients and the market telling us?",
    subtitle: "Advisor polling, fund flows, and positioning signals",
    bullets: [
      "<strong>Client sentiment has shifted to cautious:</strong> Our latest advisor poll shows 62% of advisors are positioning defensively — the highest reading since Q4 2022. Cash allocations have ticked up to ~8% of portfolios, well above the 5% long-run average.",
      "<strong>Fund flows tell a more nuanced story:</strong> While equity fund outflows have accelerated ($45B in March), money market funds have seen massive inflows ($120B+ YTD). But fixed income flows are positive — investors are adding duration selectively, not just hiding in cash.",
      "<strong>Positioning data suggests room for upside surprise:</strong> Institutional net equity exposure is in the 25th percentile — extremely underweight. Historically, when positioning is this light and the economy avoids recession, the subsequent 12-month equity return averages +18%.",
      "<strong>The contrarian signal is building:</strong> When advisors are this cautious and positioning is this light, markets have historically surprised to the upside. We're not calling the bottom, but the setup is constructive for patient investors."
    ],
    tickers: ["BLCR", "DYNF"],
    placeholderChart: {
      type: "bar",
      title: "Advisor Sentiment & Institutional Positioning",
      description: "Polling data on advisor allocation stance and institutional net equity exposure percentile"
    },
    source: "Source: Internal advisor survey, EPFR, CFTC, as of March 2026"
  },
];
