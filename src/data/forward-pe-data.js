// S&P 500 Forward 12-Month P/E Ratio — Monthly (Jan 2021 – Mar 2026)
// Sources: FactSet Earnings Insight (weekly), MacroMicro, stockmarketperatio.com
// Forward P/E = S&P 500 price ÷ next-twelve-month (NTM) consensus EPS estimate

export const FIVE_YEAR_AVG = 19.9;

export const forwardPEData = [
  // 2021
  { month: "Jan 2021", pe: 22.7 },
  { month: "Feb 2021", pe: 22.2 },
  { month: "Mar 2021", pe: 22.0 },
  { month: "Apr 2021", pe: 22.2 },
  { month: "May 2021", pe: 21.8 },
  { month: "Jun 2021", pe: 21.5 },
  { month: "Jul 2021", pe: 21.4 },
  { month: "Aug 2021", pe: 21.2 },
  { month: "Sep 2021", pe: 20.8 },
  { month: "Oct 2021", pe: 20.9 },
  { month: "Nov 2021", pe: 21.3 },
  { month: "Dec 2021", pe: 21.4 },

  // 2022 — Fed tightening, multiple compression
  { month: "Jan 2022", pe: 20.2 },
  { month: "Feb 2022", pe: 20.2 },
  { month: "Mar 2022", pe: 19.8 },
  { month: "Apr 2022", pe: 18.8 },
  { month: "May 2022", pe: 16.6 },
  { month: "Jun 2022", pe: 16.0 },
  { month: "Jul 2022", pe: 17.0 },
  { month: "Aug 2022", pe: 17.8 },
  { month: "Sep 2022", pe: 16.5 },
  { month: "Oct 2022", pe: 15.3 },
  { month: "Nov 2022", pe: 17.0 },
  { month: "Dec 2022", pe: 17.3 },

  // 2023 — AI rally begins, gradual re-rating
  { month: "Jan 2023", pe: 17.6 },
  { month: "Feb 2023", pe: 18.2 },
  { month: "Mar 2023", pe: 17.8 },
  { month: "Apr 2023", pe: 18.3 },
  { month: "May 2023", pe: 18.2 },
  { month: "Jun 2023", pe: 19.2 },
  { month: "Jul 2023", pe: 19.8 },
  { month: "Aug 2023", pe: 19.3 },
  { month: "Sep 2023", pe: 18.5 },
  { month: "Oct 2023", pe: 17.5 },
  { month: "Nov 2023", pe: 18.8 },
  { month: "Dec 2023", pe: 19.6 },

  // 2024 — AI capex cycle, multiple expansion
  { month: "Jan 2024", pe: 20.0 },
  { month: "Feb 2024", pe: 20.3 },
  { month: "Mar 2024", pe: 20.9 },
  { month: "Apr 2024", pe: 20.2 },
  { month: "May 2024", pe: 20.8 },
  { month: "Jun 2024", pe: 21.5 },
  { month: "Jul 2024", pe: 21.6 },
  { month: "Aug 2024", pe: 21.0 },
  { month: "Sep 2024", pe: 21.5 },
  { month: "Oct 2024", pe: 21.8 },
  { month: "Nov 2024", pe: 22.2 },
  { month: "Dec 2024", pe: 22.0 },

  // 2025 — Post-election peak, tariff/Iran selloff, recovery, new highs
  { month: "Jan 2025", pe: 22.2 },
  { month: "Feb 2025", pe: 22.0 },
  { month: "Mar 2025", pe: 21.5 },
  { month: "Apr 2025", pe: 17.9 },
  { month: "May 2025", pe: 19.4 },
  { month: "Jun 2025", pe: 20.4 },
  { month: "Jul 2025", pe: 21.2 },
  { month: "Aug 2025", pe: 21.0 },
  { month: "Sep 2025", pe: 22.8 },
  { month: "Oct 2025", pe: 23.1 },
  { month: "Nov 2025", pe: 22.4 },
  { month: "Dec 2025", pe: 22.0 },

  // 2026 — Iran conflict, 5 consecutive weekly drops, mean reversion
  { month: "Jan 2026", pe: 22.2 },
  { month: "Feb 2026", pe: 21.5 },
  { month: "Mar 2026", pe: 19.9 },
];
