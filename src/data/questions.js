export const SECTIONS = {
  macro: { label: "MACRO", color: "#FF7043" },
  usEquities: { label: "US EQUITIES", color: "#00C853" },
  intlEquities: { label: "INTERNATIONAL EQUITIES", color: "#00BFA5" },
  fixedIncome: { label: "FIXED INCOME", color: "#FFB300" },
  portfolio: { label: "PORTFOLIO & POSITIONING", color: "#BB86FC" },
};

export const QUESTIONS_DATA = [
  // ── MACRO (4) ──────────────────────────────────────────────
  {
    id: 1,
    section: "macro",
    label: "QUESTION 01",
    question: "How does the Iran war impact the US economy?",
    subtitle: "Inflation re-acceleration, Fed on hold, and the growth-shock transmission",
    bullets: [
      "<strong>Oil supply shock is the largest since the 1970s:</strong> Iran's closure of the Strait of Hormuz has taken ~10 million barrels/day offline — 21% of global supply. Brent surged to $126/bbl at peak before settling near $108–113.",
      "<strong>Inflation is the key transmission channel:</strong> Sustained $90+ oil will likely push headline CPI from 2.4% back toward 3.0–3.5% by mid-year, reversing 18 months of disinflation and complicating the Fed's rate-cut path.",
      "<strong>Growth slowdown risk is rising:</strong> Every $10/bbl sustained increase in oil historically shaves 0.1–0.2% off GDP. Combined with tariff headwinds, GDPNow has moved to sub-2% for Q2.",
      "<strong>Position for stagflationary risk:</strong> We favor energy infrastructure, TIPS, and commodity baskets. Duration risk is elevated as the oil-inflation feedback loop delays the easing cycle."
    ],
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
    label: "QUESTION 02",
    question: "What do higher oil prices mean for inflation and the Fed?",
    subtitle: "Commodity pass-through, CPI trajectory, and why the Fed is trapped",
    bullets: [
      "<strong>Oil ripples through everything:</strong> Crude is up ~50% YTD, but the inflationary transmission goes beyond gasoline — into fertilizers, plastics, freight, and chemicals — with a 3–6 month lag.",
      "<strong>February CPI was 2.4% — but March will be sharply higher:</strong> Energy services were already +6.3% YoY and natural gas +10.9%. The March print is expected above 3%.",
      "<strong>Commodities are spiking in tandem:</strong> Aluminum at a 4-year high, one-third of global helium offline, food prices +3.1% YoY before the shock hit.",
      "<strong>The Fed can't cut into a supply shock:</strong> The FOMC held at 3.50–3.75% and is trapped — oil acts as both a growth drag and inflation accelerant. The risk of zero cuts in 2026 is rising."
    ],
    placeholderChart: {
      type: "dual-axis-line",
      title: "Oil Price vs. CPI (YoY)",
      description: "WTI crude price overlaid with headline CPI, showing the pass-through lag"
    },
    source: "Source: BLS, EIA, Bloomberg, as of March 2026"
  },
  {
    id: 3,
    section: "macro",
    label: "QUESTION 03",
    question: "Is AI leading to higher unemployment?",
    subtitle: "Labor market disruption, job displacement vs. creation, and the productivity paradox",
    bullets: [
      "<strong>White-collar displacement is accelerating:</strong> Tech layoffs have continued into 2026 as companies replace headcount with AI tools. Coding, customer service, and back-office roles are seeing the steepest cuts — ~180K tech jobs eliminated since January.",
      "<strong>But aggregate unemployment remains low:</strong> The unemployment rate sits at 4.1%, near full employment. Job creation in healthcare, construction, and energy has absorbed displaced workers — so far.",
      "<strong>The productivity paradox persists:</strong> Despite massive AI investment, economy-wide productivity growth is running at only ~1.5% — below the 2.5%+ needed to justify current capex levels. The payoff may take years, not quarters.",
      "<strong>Watch the services sector closely:</strong> If AI-driven automation hits services employment (which drives ~70% of GDP), the consumer spending engine could stall. This is a 2027–2028 risk, not an immediate one."
    ],
    placeholderChart: {
      type: "bar",
      title: "AI Job Displacement vs. Creation by Sector",
      description: "Net job changes by sector attributed to AI adoption, trailing 12 months"
    },
    source: "Source: BLS, Challenger Gray & Christmas, McKinsey Global Institute, as of March 2026"
  },
  {
    id: 4,
    section: "macro",
    label: "QUESTION 04",
    question: "How will the midterms affect markets?",
    subtitle: "Historical patterns, policy uncertainty, and what's at stake in November",
    bullets: [
      "<strong>Midterm years are historically volatile — then bullish:</strong> Since 1950, the S&P 500 has averaged a 17% trough-to-peak rally from midterm year lows to 12-month highs. The setup usually involves a Q2–Q3 drawdown followed by a strong Q4 rebound.",
      "<strong>Policy gridlock is the market's preferred outcome:</strong> Markets tend to rally when midterms produce a split Congress. Reduced legislative risk means fewer surprises on taxes, regulation, and spending — the status quo is priced in.",
      "<strong>Key policy overhang: tariffs and tax extensions:</strong> The 2025 tax cuts are set to expire in 2027, and the campaign will center on whether to extend them. Tariff policy is also at stake — any shift in trade stance could move sectors dramatically.",
      "<strong>Defense and energy spending are bipartisan:</strong> Regardless of outcome, the Iran conflict has locked in elevated defense budgets for years. Energy infrastructure spending is similarly supported across the aisle — these are durable secular themes."
    ],
    placeholderChart: {
      type: "line",
      title: "S&P 500 Performance in Midterm Years",
      description: "Average S&P 500 path during midterm years vs. all years, indexed to January"
    },
    source: "Source: Bloomberg, LPL Research, as of March 2026"
  },

  // ── US EQUITIES (3) ────────────────────────────────────────
  {
    id: 5,
    section: "usEquities",
    label: "QUESTION 05",
    question: "How concerned should I be about valuations?",
    subtitle: "Earnings growth, multiple compression, and what's already priced in",
    bullets: [
      "<strong>The S&P 500 at ~20x forward earnings is above average — but not extreme:</strong> The 25-year average is ~16.5x. Today's premium reflects AI-driven earnings growth expectations and lower-for-longer rate assumptions that are now being tested.",
      "<strong>Earnings growth is the swing factor:</strong> If S&P 500 EPS comes in at $270+ for 2026 (consensus), the current multiple is tolerable. But if the oil shock drags estimates below $250, the index is ~10% overvalued at these levels.",
      "<strong>The equal-weight S&P 500 tells a different story:</strong> Stripping out mega-cap concentration, the median stock trades at ~16x — right at the historical average. Breadth is actually reasonable; it's the cap-weighted index that looks stretched.",
      "<strong>Our view: selectivity over broad beta.</strong> We're neutral on the S&P 500 index level but see opportunity in mid-caps, dividend growers, and sectors where earnings revisions are still positive — energy, industrials, and healthcare."
    ],
    placeholderChart: {
      type: "bar",
      title: "S&P 500 Forward P/E: Current vs. Historical",
      description: "Current forward P/E vs. 10-year, 25-year averages and recession trough levels"
    },
    source: "Source: FactSet, Bloomberg, as of March 2026"
  },
  {
    id: 6,
    section: "usEquities",
    label: "QUESTION 06",
    question: "Where is AI in the adoption cycle?",
    subtitle: "From capex promises to real-world deployment — who's actually monetizing?",
    bullets: [
      "<strong>We're transitioning from \"AI hype\" to \"AI implementation\":</strong> Phase 1 (infrastructure — chips, cloud) rewarded Nvidia and hyperscalers. Phase 2 (deployment — enterprise software, automation) is where returns shift to companies using AI, not just building it.",
      "<strong>Capex-to-revenue gap is closing but still wide:</strong> Hyperscaler AI capex is running at $280B+ annualized, but AI-attributed revenue is ~$95B. The market has shifted from rewarding investment promises to demanding P&L results.",
      "<strong>Enterprise AI adoption is inflecting:</strong> 65% of Fortune 500 companies now have active AI deployments (up from 35% a year ago). The biggest ROI is in customer service automation, code generation, and supply chain optimization — not flashy chatbots.",
      "<strong>Invest in the \"picks and shovels\" layer:</strong> We favor companies providing AI infrastructure (data centers, networking, power) and enterprise platforms over pure-play AI startups. Cash flow and margins matter more than TAM narratives at this stage."
    ],
    placeholderChart: {
      type: "funnel",
      title: "AI Adoption Curve: Infrastructure → Platform → Application",
      description: "Phase progression of AI investment cycle with representative companies at each stage"
    },
    source: "Source: Goldman Sachs, Gartner, company filings, as of March 2026"
  },
  {
    id: 7,
    section: "usEquities",
    label: "QUESTION 07",
    question: "Should I tilt toward value here?",
    subtitle: "The growth-to-value rotation, factor spreads, and what history says about this setup",
    bullets: [
      "<strong>Value has outperformed growth by ~800bp YTD:</strong> The Russell 1000 Value is roughly flat while Growth is down ~8%. Energy, financials, and healthcare are carrying value; tech and consumer discretionary are dragging growth.",
      "<strong>The valuation spread still favors value:</strong> Growth trades at ~28x forward earnings vs. value at ~15x — a 13-point gap that's above the 25-year average of ~10 points. When spreads are this wide, value has historically outperformed over the next 3–5 years.",
      "<strong>Rising rates mechanically favor value:</strong> Higher discount rates compress the present value of long-duration growth cash flows more than near-term value cash flows. If the 10-year stays above 4%, value's advantage persists.",
      "<strong>We're adding value tilts — but staying quality-aware:</strong> Not all value is created equal. We favor profitable value (high ROE, strong balance sheets) over deep/distressed value. Dividend growers in financials, industrials, and energy are our preferred expression."
    ],
    placeholderChart: {
      type: "line",
      title: "Growth vs. Value: YTD Cumulative Return",
      description: "Russell 1000 Growth vs. Russell 1000 Value indexed to 100 at Jan 1, 2026"
    },
    source: "Source: Russell, Morningstar, Bloomberg, as of March 2026"
  },

  // ── INTERNATIONAL EQUITIES (1) ─────────────────────────────
  {
    id: 8,
    section: "intlEquities",
    label: "QUESTION 08",
    question: "Why should a US-based investor still allocate to international equities?",
    subtitle: "Valuation discount, earnings momentum, and the diversification case",
    bullets: [
      "<strong>International stocks are the cheapest relative to the US in 20+ years:</strong> MSCI EAFE trades at ~13x forward earnings vs. the S&P 500 at ~20x. Even adjusting for sector mix, the discount is historically wide — and starting to narrow.",
      "<strong>Europe is having a moment:</strong> European defense spending is surging post-Iran conflict, fiscal stimulus is accelerating, and the ECB is cutting rates. STOXX 600 is up ~8% YTD in dollar terms — outpacing the S&P by 14 percentage points.",
      "<strong>Emerging markets offer commodity upside:</strong> Brazil, Saudi Arabia, and Indonesia are direct beneficiaries of higher oil and commodity prices. EM earnings revisions are turning positive for the first time since 2021.",
      "<strong>Currency tailwinds are building:</strong> The dollar's 2025–2026 strength may be peaking as US growth decelerates and rate differentials narrow. A weaker dollar would amplify international equity returns for US-based investors."
    ],
    placeholderChart: {
      type: "bar",
      title: "YTD Returns: US vs. International (USD)",
      description: "S&P 500, MSCI EAFE, MSCI EM, and regional breakdowns — YTD total return in USD"
    },
    source: "Source: MSCI, Bloomberg, as of March 2026"
  },

  // ── FIXED INCOME (1) ───────────────────────────────────────
  {
    id: 9,
    section: "fixedIncome",
    label: "QUESTION 09",
    question: "Is private credit a systemic risk?",
    subtitle: "The $1.7T market, leverage concerns, and what advisors need to know",
    bullets: [
      "<strong>Private credit has tripled in five years:</strong> The market has grown from ~$600B in 2020 to ~$1.7T today, fueled by banks retreating from leveraged lending and investors chasing yield. Growth this fast always warrants scrutiny.",
      "<strong>Default rates are rising from a low base:</strong> Private credit defaults have ticked up to ~3.5% from ~2% a year ago, driven by highly leveraged 2021-vintage deals. Senior secured lending (the bulk of the market) is holding up well — it's the riskier tranches showing stress.",
      "<strong>Systemic risk is limited — for now:</strong> Unlike the 2008 mortgage market, private credit isn't deeply interconnected with the banking system. But rising correlation between private credit and public high yield suggests the \"diversification\" benefit is overstated.",
      "<strong>Selectivity is paramount:</strong> We still see value in senior direct lending at 9–11% yields with first-lien protection. But we're avoiding 2021-vintage funds with excessive leverage and recommending investors stress-test their private credit allocations for a recession scenario."
    ],
    placeholderChart: {
      type: "area",
      title: "Private Credit Market Size & Default Rate",
      description: "AUM growth of private credit market with overlay of trailing 12-month default rates"
    },
    source: "Source: Preqin, PitchBook, LCD, as of March 2026"
  },

  // ── PORTFOLIO & POSITIONING (1) ────────────────────────────
  {
    id: 10,
    section: "portfolio",
    label: "QUESTION 10",
    question: "What does a resilient portfolio look like today?",
    subtitle: "Asset allocation framework for a world of geopolitical risk, sticky inflation, and AI disruption",
    bullets: [
      "<strong>Diversification is working again — lean into it:</strong> The 60/40 portfolio's rough 2022 was an anomaly of the rate-shock era. With bonds yielding 4%+ and equities facing earnings risk, balanced portfolios are back to providing genuine two-sided protection.",
      "<strong>Add real assets for inflation hedging:</strong> TIPS, commodity producers, infrastructure REITs, and energy midstream offer inflation sensitivity that nominal bonds can't provide. We recommend a 10–15% allocation to real assets as a permanent portfolio sleeve.",
      "<strong>Build in optionality with alternatives:</strong> Managed futures, global macro, and multi-strategy hedge funds have delivered strong risk-adjusted returns in 2026. A 10–20% allocation to liquid alternatives improves Sharpe ratios meaningfully in the current regime.",
      "<strong>Stay invested but stay humble:</strong> The biggest risk is overconfidence in any single scenario. A resilient portfolio owns some duration (for recession), some commodities (for inflation), some international (for dollar weakness), and some cash (for opportunity). Balance beats conviction right now."
    ],
    placeholderChart: {
      type: "pie",
      title: "Resilient Portfolio: Recommended Allocation",
      description: "Target allocation across equities, fixed income, real assets, alternatives, and cash"
    },
    source: "Source: Internal analysis, as of March 2026"
  },
];
