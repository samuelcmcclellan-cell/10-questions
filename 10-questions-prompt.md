# Master Prompt: "10 Questions" — Spring 2026 Interactive Market Outlook

## Instruction

Build a React application that presents **10 investor-focused questions about the Spring 2026 market outlook** in an interactive, slide-based format. The app should feel like a premium iShares / BlackRock institutional publication — polished, data-driven, and visually authoritative. **Set up a proper project repo, push it to GitHub, and deploy it live on Vercel.**

---

## App Overview

- **Title:** "10 Questions — Spring 2026 Market Outlook"
- **Concept:** Each "slide" poses a question investors are asking right now, answers it with 3–4 bullet-point takeaways, and supports the answer with a chart built from real, hardcoded market data.
- **Tone:** Confident, institutional, accessible. Think BlackRock Investment Institute meets a well-designed digital magazine.
- **Navigation:** One question per screen. Users click/swipe forward and back through all 10. No vertical scrolling within a question — everything fits on one viewport.

---

## Design Specifications

### Color Palette
| Role | Color | Hex |
|------|-------|-----|
| Background (primary) | Very dark navy / near-black | `#1a1a2e` |
| Background (card surface) | Dark charcoal | `#16213e` |
| Accent (primary) | iShares green | `#00C853` |
| Accent (secondary) | Teal | `#00BFA5` |
| Text (primary) | White | `#FFFFFF` |
| Text (secondary) | Light gray | `#B0BEC5` |
| Text (muted) | Medium gray | `#78909C` |
| Chart colors | Green, teal, amber, coral | `#00C853`, `#00BFA5`, `#FFB300`, `#FF7043` |
| Negative/down | Coral red | `#FF5252` |
| Positive/up | Green | `#00C853` |

### Typography
- **Question number:** Small, uppercase, letterspaced, accent green. e.g., `QUESTION 03`
- **Question text:** Large, bold, serif or clean sans-serif. 28–36px. White.
- **Bullet points:** 16–18px, light gray, clean line-height. Each bullet should start with a bold key phrase.
- **Chart labels:** 12–14px, muted gray.
- **Source/disclaimer line:** 10–12px, bottom of card, very muted.

### Layout (per slide)
```
┌──────────────────────────────────────────────┐
│  ← QUESTION 03 OF 10                    →    │  (nav arrows)
│                                              │
│  QUESTION 03                                 │  (small, green, letterspaced)
│  What will the next Fed move be?             │  (large, bold, white)
│                                              │
│  ┌─────────────────┐  ┌──────────────────┐   │
│  │                 │  │                  │   │
│  │   CHART AREA    │  │  • Bullet 1      │   │
│  │   (60% width)   │  │  • Bullet 2      │   │
│  │                 │  │  • Bullet 3      │   │
│  │                 │  │  • Bullet 4      │   │
│  │                 │  │                  │   │
│  └─────────────────┘  └──────────────────┘   │
│                                              │
│  Source: Bloomberg, as of March 2026         │  (tiny, muted)
│                                              │
│  ● ● ● ◉ ● ● ● ● ● ●                       │  (dot pagination)
└──────────────────────────────────────────────┘
```

- On mobile, stack vertically: question → chart → bullets.
- Chart takes ~60% width on desktop, bullets take ~40%.
- The layout should be centered with generous padding (think: 80px+ on sides on desktop).

### Navigation & Interaction
- Left/right arrow buttons on the edges of the screen (subtle, appear on hover).
- Keyboard arrow keys navigate between questions.
- Dot pagination at the bottom shows progress and is clickable.
- Smooth crossfade or slide transition between questions (300ms ease).
- Opening slide (slide 0) is a title card:
  - "10 Questions" in very large type
  - "Spring 2026 Market Outlook" as subtitle
  - A "Start →" button or prompt to begin
  - Subtle animated gradient or particle effect on the background for visual interest.

### Charts
- Use **Recharts** for all charts.
- Charts should feel premium: no grid lines (or very subtle ones), rounded bar corners, smooth line curves, clean axis labels, generous padding.
- Use the accent color palette for data series.
- Include a tooltip on hover showing exact values.
- Animate charts on entry (fade + grow effect when the slide appears).
- Every chart must have a small source attribution line below it.

---

## The 10 Questions

Below are the 10 questions with placeholder commentary. **Replace the `[PLACEHOLDER]` sections with real market views before running this prompt.**

### Question 1: How does the Iran war impact the economy?
- **Chart type:** Claude decides (suggestion: timeline or bar chart of GDP impact / oil price shock scenarios)
- **Data to hardcode:** [PLACEHOLDER — e.g., historical oil shock episodes and GDP impact, or defense spending as % of GDP]
- **Bullet points:**
  1. [PLACEHOLDER — key economic transmission channel]
  2. [PLACEHOLDER — supply chain / trade route impact]
  3. [PLACEHOLDER — defense spending / fiscal impact]
  4. [PLACEHOLDER — bottom-line portfolio implication]
- **Source line:** [PLACEHOLDER — e.g., "Source: Bloomberg, BlackRock, as of March 2026"]

### Question 2: What do higher oil prices mean for inflation and the Fed?
- **Chart type:** Claude decides (suggestion: dual-axis line chart — oil price vs. CPI or breakevens)
- **Data to hardcode:** [PLACEHOLDER — e.g., WTI crude price history + CPI YoY for past 2 years]
- **Bullet points:**
  1. [PLACEHOLDER]
  2. [PLACEHOLDER]
  3. [PLACEHOLDER]
  4. [PLACEHOLDER]
- **Source line:** [PLACEHOLDER]

### Question 3: What will the next Fed move be?
- **Chart type:** Claude decides (suggestion: dot plot or Fed funds futures implied path)
- **Data to hardcode:** [PLACEHOLDER — e.g., Fed funds rate history + market-implied path from CME FedWatch]
- **Bullet points:**
  1. [PLACEHOLDER]
  2. [PLACEHOLDER]
  3. [PLACEHOLDER]
  4. [PLACEHOLDER]
- **Source line:** [PLACEHOLDER]

### Question 4: Why are stocks down this year?
- **Chart type:** Claude decides (suggestion: bar chart of YTD returns by index/sector)
- **Data to hardcode:** [PLACEHOLDER — e.g., S&P 500, Nasdaq, Russell 2000, EAFE, EM YTD returns + sector breakdown]
- **Bullet points:**
  1. [PLACEHOLDER]
  2. [PLACEHOLDER]
  3. [PLACEHOLDER]
  4. [PLACEHOLDER]
- **Source line:** [PLACEHOLDER]

### Question 5: Is AI a bubble?
- **Chart type:** Claude decides (suggestion: line chart comparing current AI rally to historical tech/bubble analogs)
- **Data to hardcode:** [PLACEHOLDER — e.g., Mag 7 P/E vs. dot-com P/E trajectory, or AI capex vs. revenue growth]
- **Bullet points:**
  1. [PLACEHOLDER]
  2. [PLACEHOLDER]
  3. [PLACEHOLDER]
  4. [PLACEHOLDER]
- **Source line:** [PLACEHOLDER]

### Question 6: What parts of fixed income have performed well this year?
- **Chart type:** Claude decides (suggestion: horizontal bar chart of YTD returns across FI sectors)
- **Data to hardcode:** [PLACEHOLDER — e.g., YTD returns: Treasuries, IG Corp, HY, Munis, TIPS, EM Debt, CLOs, MBS]
- **Bullet points:**
  1. [PLACEHOLDER]
  2. [PLACEHOLDER]
  3. [PLACEHOLDER]
  4. [PLACEHOLDER]
- **Source line:** [PLACEHOLDER]

### Question 7: Are yields attractive at these levels?
- **Chart type:** Claude decides (suggestion: line chart of 10Y yield over 20 years with shaded "attractive zone")
- **Data to hardcode:** [PLACEHOLDER — e.g., 10Y Treasury yield history, current yield vs. 20-year avg, yield-to-worst by sector]
- **Bullet points:**
  1. [PLACEHOLDER]
  2. [PLACEHOLDER]
  3. [PLACEHOLDER]
  4. [PLACEHOLDER]
- **Source line:** [PLACEHOLDER]

### Question 8: Why hasn't gold worked as a geopolitical hedge since the Iran war?
- **Chart type:** Claude decides (suggestion: line chart of gold price vs. a geopolitical risk index, or gold vs. USD/real rates)
- **Data to hardcode:** [PLACEHOLDER — e.g., gold price, DXY, real yields since conflict began]
- **Bullet points:**
  1. [PLACEHOLDER]
  2. [PLACEHOLDER]
  3. [PLACEHOLDER]
  4. [PLACEHOLDER]
- **Source line:** [PLACEHOLDER]

### Question 9: Which alternative strategies have done well this year?
- **Chart type:** Claude decides (suggestion: bar chart of YTD returns across alt strategies)
- **Data to hardcode:** [PLACEHOLDER — e.g., YTD: managed futures, global macro, merger arb, long/short equity, multi-strategy, private credit]
- **Bullet points:**
  1. [PLACEHOLDER]
  2. [PLACEHOLDER]
  3. [PLACEHOLDER]
  4. [PLACEHOLDER]
- **Source line:** [PLACEHOLDER]

### Question 10: What is investor risk appetite right now?
- **Chart type:** Claude decides (suggestion: composite gauge/dashboard or bar chart of sentiment indicators)
- **Data to hardcode:** [PLACEHOLDER — e.g., AAII bull/bear, VIX level, fund flows, put/call ratio, credit spreads]
- **Bullet points:**
  1. [PLACEHOLDER]
  2. [PLACEHOLDER]
  3. [PLACEHOLDER]
  4. [PLACEHOLDER]
- **Source line:** [PLACEHOLDER]

---

## Technical Requirements

### Project Structure
This is NOT a single-file artifact. Build a proper deployable project:

```
10-questions/
├── package.json
├── vite.config.js          # (or next.config.js if using Next.js)
├── tailwind.config.js
├── postcss.config.js
├── index.html
├── public/
│   └── favicon.ico
├── src/
│   ├── main.jsx            # Entry point
│   ├── App.jsx             # Main app with routing/navigation
│   ├── components/
│   │   ├── TitleSlide.jsx      # Opening title card
│   │   ├── QuestionSlide.jsx   # Reusable question slide component
│   │   ├── ClosingSlide.jsx    # Final slide
│   │   ├── Navigation.jsx      # Arrow buttons + dot pagination
│   │   └── charts/
│   │       ├── ChartRenderer.jsx   # Dynamic chart type picker
│   │       └── chartTheme.js       # Shared Recharts styling config
│   ├── data/
│   │   └── questions.js        # All 10 questions + chart data
│   └── index.css               # Tailwind directives
├── .gitignore
└── README.md
```

### Stack & Dependencies
1. **Vite + React** — Use Vite as the build tool for fast dev and optimized production builds.
2. **Recharts** (`import { BarChart, LineChart, AreaChart, ... } from "recharts"`) for all charts.
3. **React hooks** (`useState`, `useEffect`, `useCallback`) for state and navigation.
4. **Tailwind CSS** for all styling. Configure the dark color palette as custom theme colors in `tailwind.config.js`.
5. **Responsive:** Works well on both desktop (1440px) and mobile (375px). Use Tailwind breakpoints (`md:`, `lg:`).
6. **Keyboard navigation:** Left/right arrow keys move between slides.
7. **Smooth transitions:** Use CSS transitions or React state-driven opacity/transform changes for slide transitions.
8. **All data hardcoded** in `src/data/questions.js`. Each entry contains: `id`, `question`, `bullets` (array of strings), `chartType`, `chartData`, `chartConfig`, `source`.
9. **No external API calls.** Everything is self-contained.
10. **Performance:** Lazy-render charts (only render the current slide's chart + one on each side for smooth transitions).

---

## GitHub & Deployment

### Step 1: Initialize the repo
```bash
# Initialize git repo
git init
git add .
git commit -m "Initial commit: 10 Questions Spring 2026 Market Outlook"

# Create GitHub repo and push (using GitHub CLI)
gh repo create 10-questions --public --source=. --remote=origin --push
```

### Step 2: Deploy to Vercel
```bash
# Install Vercel CLI if not already installed
npm i -g vercel

# Deploy — this will auto-detect Vite and configure build settings
vercel --yes

# Set up production deployment
vercel --prod
```

### Step 3: Verify
- Confirm the site is live at the Vercel URL.
- Test navigation, chart rendering, and mobile responsiveness.
- Share the live URL.

### Vercel Configuration Notes
- Vite projects are auto-detected by Vercel. No special config needed.
- Build command: `npm run build`
- Output directory: `dist`
- If there are any issues, create a `vercel.json`:
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite"
}
```

---

## Data Structure Template

In `src/data/questions.js`:

```javascript
export const QUESTIONS_DATA = [
  {
    id: 1,
    label: "QUESTION 01",
    question: "How does the Iran war impact the economy?",
    bullets: [
      "<strong>Key phrase:</strong> Rest of bullet explanation...",
      // ... 3-4 bullets
    ],
    chartType: "bar", // or "line", "area", "composed", "horizontal-bar"
    chartData: [
      { name: "Label", value: 1.2, fill: "#00C853" },
      // ...
    ],
    chartConfig: {
      xKey: "name",
      yKey: "value",
      // any Recharts-specific config
    },
    source: "Source: Bloomberg, as of March 2026"
  },
  // ... repeat for all 10
];
```

---

## Final Checklist for Claude

### Build
- [ ] Scaffold Vite + React project with Tailwind CSS and Recharts.
- [ ] Title card (slide 0) with animated background, title, subtitle, and "Start" CTA.
- [ ] 10 question slides, each with: question label, question text, chart (left/60%), bullets (right/40%), source line, dot pagination.
- [ ] Smooth slide transitions (crossfade or horizontal slide, 300ms).
- [ ] Arrow navigation (on-screen + keyboard).
- [ ] Clickable dot pagination.
- [ ] Responsive layout (stacks on mobile).
- [ ] Premium dark theme with green accents matching the color palette above.
- [ ] Charts animate on entry.
- [ ] Tooltips on chart hover.
- [ ] All data hardcoded in `src/data/questions.js` — no API calls.
- [ ] Closing slide (slide 11) with a "thank you" or "for more information" message.

### Deploy
- [ ] `npm run build` succeeds with no errors.
- [ ] `npm run dev` renders correctly in browser (spot-check a few slides).
- [ ] Initialize git repo and push to GitHub as `10-questions`.
- [ ] Deploy to Vercel and confirm the production URL is live.
- [ ] Share the live Vercel URL.

---

## How to Use This Prompt

1. **Fill in all `[PLACEHOLDER]` sections** with your market views, data points, and source attributions.
2. **Paste this entire prompt into Claude Code.**
3. Claude will scaffold the project, build all components, push to GitHub, and deploy to Vercel.
4. You'll get a live URL to share with investors.

---

*Prompt version: 1.1 — March 2026*
