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
      "<strong>The growth impact is real but manageable:</strong> Every $10/bbl sustained increase in oil historically shaves 0.1–0.2% off GDP. Combined with tariff headwinds, GDPNow has moved to sub-2% for Q2. The drag is significant, but consumer balance sheets and labor markets remain supportive.",
      "<strong>We don't think we're headed to recession — but there will be lasting impacts:</strong> The war's effects on supply chains, defense spending, and fiscal policy will persist well beyond any ceasefire. Defense budgets are locked in for years, and energy infrastructure investment is accelerating across the board.",
      "<strong>Position for stagflationary risk:</strong> We see opportunity in energy infrastructure and commodity baskets. The oil-inflation feedback loop is delaying the Fed's easing cycle, creating a prolonged environment where real assets and defense-linked equities can outperform."
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
      "<strong>Oil ripples through everything:</strong> Crude is up ~50% YTD, but the inflationary transmission goes beyond gasoline — into fertilizers, plastics, freight, and chemicals — with a 3–6 month lag.",
      "<strong>February CPI was 2.4% — but March will be sharply higher:</strong> Energy services were already +6.3% YoY and natural gas +10.9%. The March print is expected above 3%. TIPS breakevens have widened meaningfully, and we see value in inflation-linked bonds as a core portfolio hedge — not a standalone call, but a structural allocation.",
      "<strong>Commodities are spiking in tandem:</strong> Aluminum at a 4-year high, one-third of global helium offline, food prices +3.1% YoY before the shock hit. The breadth of the commodity move reinforces the case for inflation protection.",
      "<strong>The Fed can't cut into a supply shock:</strong> The FOMC held at 3.50–3.75% and is trapped — oil acts as both a growth drag and inflation accelerant. The risk of zero cuts in 2026 is rising. TIPS and flexible income strategies are well-positioned for this environment."
    ],
    tickers: ["TIP", "BINC"],
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
    subtitle: "AI is driving labor disruption — both creating and replacing jobs",
    bullets: [
      "<strong>Yes, AI is displacing jobs — but it's creating more than it destroys:</strong> Entry-level postings are down ~35% since 2023 and AI-attributed tech layoffs hit ~78K in H1 2025. We expect displacement to continue. But the AI boom is simultaneously driving massive hiring in data centers, hardware, and AI development — 170M new roles projected globally by 2030 vs. 92M displaced. Net positive, but uneven.",
      "<strong>The trades boom is real:</strong> Skilled trades demand is growing 3x faster than professional roles. The data center buildout needs ~300K new electricians over the next decade, with salaries 32% above non-data-center construction. Robotics technicians up 107%, HVAC engineers up 67%, construction roles up 30% since late 2022.",
      "<strong>Software is getting cheaper — that means more demand, not less:</strong> AI is making software dramatically cheaper to produce, and historically when something gets cheaper demand explodes (Jevons Paradox). The role is shifting from writing code to architecting and orchestrating AI systems. AI engineer salaries are at $206K (up $50K YoY).",
      "<strong>Labor market backdrop: frozen, not broken.</strong> Both hiring and layoff rates are historically subdued — unemployment sits at ~4.1% but job mobility is declining. Immigration tightening is squeezing agriculture, hospitality, and construction. Displacement is real but sector-specific, not economy-wide."
    ],
    tickers: ["BAI", "QUAL"],
    placeholderChart: {
      type: "bar",
      title: "AI Job Impact: Displacement vs. Creation by Sector",
      description: "Net job changes across trades, AI/tech, healthcare, and traditional software roles"
    },
    source: "Source: BLS, Randstad, ITIF, Challenger Gray & Christmas, as of March 2026"
  },
  {
    id: 4,
    section: "macro",
    owner: "M / JJ",
    label: "QUESTION 04",
    question: "What are the implications of the midterms?",
    subtitle: "Historical patterns, policy uncertainty, and market positioning",
    bullets: [
      "<strong>Markets tend to trade sideways in midterm periods:</strong> Since 1950, the S&P 500 has averaged minimal returns in the six months leading up to midterm elections. Policy uncertainty creates a headwind — investors sit on their hands until the outcome is clear.",
      "<strong>The post-midterm rally is the real story:</strong> Once results are in, the S&P 500 has averaged a 17% trough-to-peak rally from midterm year lows to 12-month highs. Clarity — in either direction — is what markets crave.",
      "<strong>Key policy overhang: tariffs and tax extensions:</strong> The 2025 tax cuts expire in 2027, and the campaign will center on whether to extend them. Tariff policy is also at stake — any shift in trade stance could move sectors dramatically.",
      "<strong>Defense and energy spending are bipartisan:</strong> Regardless of outcome, the Iran conflict has locked in elevated defense budgets for years. Energy infrastructure spending is similarly supported across the aisle — these are durable secular themes."
    ],
    tickers: ["IDEF", "BLCR"],
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
