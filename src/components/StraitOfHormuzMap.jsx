export default function StraitOfHormuzMap() {
  return (
    <div className="w-full h-full flex items-center justify-center animate-fade-in">
      <svg
        viewBox="0 0 600 500"
        className="w-full h-full max-h-[400px]"
        style={{ filter: 'drop-shadow(0 0 20px rgba(0, 200, 83, 0.15))' }}
      >
        <defs>
          <linearGradient id="waterGradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#0a1628" />
            <stop offset="100%" stopColor="#0d2137" />
          </linearGradient>
          <linearGradient id="landGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2a3a5e" />
            <stop offset="100%" stopColor="#1e2d4a" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <marker id="arrowhead" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
            <polygon points="0 0, 8 3, 0 6" fill="#FF5252" opacity="0.8" />
          </marker>
        </defs>

        {/* Water background */}
        <rect width="600" height="500" fill="url(#waterGradient)" rx="8" />

        {/* Persian Gulf water label */}
        <text x="160" y="160" fill="#78909C" fontSize="11" fontStyle="italic" opacity="0.6">Persian Gulf</text>

        {/* Gulf of Oman water label */}
        <text x="420" y="400" fill="#78909C" fontSize="11" fontStyle="italic" opacity="0.6">Gulf of Oman</text>

        {/* Arabian Sea label */}
        <text x="440" y="460" fill="#78909C" fontSize="9" fontStyle="italic" opacity="0.4">Arabian Sea</text>

        {/* IRAN - large landmass at top */}
        <path
          d="M 0,0 L 600,0 L 600,120 L 530,110 L 480,130 L 440,160 L 410,180
             L 390,200 L 370,230 L 350,260 L 340,280 L 330,290 L 310,310
             L 290,320 L 280,325 L 270,330 L 265,340 L 270,355 L 280,370
             L 300,385 L 330,395 L 370,400 L 420,400 L 480,390 L 540,370
             L 600,350 L 600,0 Z"
          fill="url(#landGradient)"
          stroke="#3a4a6e"
          strokeWidth="1"
        />
        {/* Iran label */}
        <text x="250" y="60" fill="#B0BEC5" fontSize="18" fontWeight="600" letterSpacing="6">IRAN</text>

        {/* Iran coastal detail - Qeshm Island */}
        <ellipse cx="340" cy="298" rx="30" ry="8" fill="url(#landGradient)" stroke="#3a4a6e" strokeWidth="0.5" transform="rotate(-15, 340, 298)" />
        <text x="320" y="295" fill="#78909C" fontSize="7" opacity="0.7">Qeshm Is.</text>

        {/* Hormuz Island */}
        <circle cx="355" cy="315" r="4" fill="url(#landGradient)" stroke="#3a4a6e" strokeWidth="0.5" />

        {/* UAE - bottom left */}
        <path
          d="M 0,500 L 0,220 L 30,230 L 60,240 L 100,250 L 140,258
             L 170,262 L 200,268 L 220,272 L 240,278 L 255,285
             L 260,300 L 258,320 L 252,340 L 248,355 L 250,370
             L 255,380 L 260,385 L 258,395 L 250,410 L 240,430
             L 220,450 L 200,465 L 180,475 L 150,485 L 120,492
             L 80,498 L 0,500 Z"
          fill="url(#landGradient)"
          stroke="#3a4a6e"
          strokeWidth="1"
        />

        {/* UAE label */}
        <text x="60" y="400" fill="#B0BEC5" fontSize="14" fontWeight="600" letterSpacing="4">UAE</text>

        {/* Oman - Musandam Peninsula (juts into strait) */}
        <path
          d="M 258,395 L 265,380 L 275,365 L 285,350 L 290,340
             L 295,330 L 298,322 L 300,315 L 298,310 L 292,308
             L 285,312 L 278,318 L 272,328 L 268,340 L 264,355
             L 258,370 L 255,380 L 253,390 L 258,395 Z"
          fill="url(#landGradient)"
          stroke="#3a4a6e"
          strokeWidth="1"
        />
        <text x="275" y="358" fill="#78909C" fontSize="7" opacity="0.8" transform="rotate(-70, 275, 358)">Musandam</text>

        {/* Oman - main coast bottom right */}
        <path
          d="M 250,410 L 260,405 L 275,400 L 300,395 L 340,400
             L 380,410 L 420,420 L 460,435 L 500,450 L 540,465
             L 580,480 L 600,490 L 600,500 L 0,500 L 80,498
             L 120,492 L 150,485 L 180,475 L 200,465 L 220,450
             L 240,430 L 250,410 Z"
          fill="url(#landGradient)"
          stroke="#3a4a6e"
          strokeWidth="1"
        />
        <text x="400" y="470" fill="#B0BEC5" fontSize="14" fontWeight="600" letterSpacing="4">OMAN</text>

        {/* Strait of Hormuz - shipping lanes */}
        {/* Inbound lane (to Persian Gulf) */}
        <path
          d="M 500,420 Q 400,380 340,340 Q 310,320 290,295 Q 270,270 240,255"
          fill="none"
          stroke="#00C853"
          strokeWidth="2"
          strokeDasharray="8 4"
          opacity="0.6"
          markerEnd="url(#arrowhead)"
        />

        {/* Outbound lane (from Persian Gulf) */}
        <path
          d="M 200,265 Q 230,280 260,300 Q 300,325 350,350 Q 420,390 510,430"
          fill="none"
          stroke="#FF5252"
          strokeWidth="2"
          strokeDasharray="8 4"
          opacity="0.6"
        />

        {/* Strait label with highlight */}
        <rect x="330" y="330" width="160" height="22" rx="4" fill="#FF5252" opacity="0.15" />
        <text x="340" y="346" fill="#FF5252" fontSize="11" fontWeight="700" letterSpacing="1">
          STRAIT OF HORMUZ
        </text>

        {/* Disruption indicator */}
        <g filter="url(#glow)">
          <circle cx="310" cy="310" r="8" fill="none" stroke="#FF5252" strokeWidth="1.5" opacity="0.8">
            <animate attributeName="r" values="8;14;8" dur="2s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.8;0.2;0.8" dur="2s" repeatCount="indefinite" />
          </circle>
          <circle cx="310" cy="310" r="3" fill="#FF5252" opacity="0.9" />
        </g>

        {/* Key stats overlay */}
        <g transform="translate(15, 430)">
          <rect width="200" height="55" rx="6" fill="#16213e" opacity="0.9" stroke="#2a3a5e" strokeWidth="1" />
          <text x="10" y="18" fill="#FF5252" fontSize="10" fontWeight="700">DISRUPTED</text>
          <text x="10" y="33" fill="#FFFFFF" fontSize="11" fontWeight="600">~10M+ bbl/day offline</text>
          <text x="10" y="47" fill="#78909C" fontSize="9">21% of global oil supply at risk</text>
        </g>

        {/* Key cities / ports */}
        <circle cx="130" cy="260" r="3" fill="#FFB300" opacity="0.8" />
        <text x="140" y="264" fill="#FFB300" fontSize="8" opacity="0.8">Abu Dhabi</text>

        <circle cx="180" cy="250" r="3" fill="#FFB300" opacity="0.8" />
        <text x="190" y="254" fill="#FFB300" fontSize="8" opacity="0.8">Dubai</text>

        <circle cx="350" cy="230" r="3" fill="#FFB300" opacity="0.8" />
        <text x="360" y="234" fill="#FFB300" fontSize="8" opacity="0.8">Bandar Abbas</text>

        {/* Oil tanker icons (simplified) */}
        <g transform="translate(380, 370)" opacity="0.5">
          <rect x="0" y="0" width="12" height="5" rx="1" fill="#78909C" />
          <rect x="2" y="-2" width="4" height="3" rx="0.5" fill="#78909C" />
        </g>
        <g transform="translate(420, 395)" opacity="0.5">
          <rect x="0" y="0" width="12" height="5" rx="1" fill="#78909C" />
          <rect x="2" y="-2" width="4" height="3" rx="0.5" fill="#78909C" />
        </g>

        {/* Blocked X marks */}
        <g transform="translate(305, 305)" opacity="0.9">
          <line x1="-4" y1="-4" x2="4" y2="4" stroke="#FF5252" strokeWidth="2" />
          <line x1="4" y1="-4" x2="-4" y2="4" stroke="#FF5252" strokeWidth="2" />
        </g>

        {/* Scale / compass */}
        <g transform="translate(540, 30)">
          <circle cx="0" cy="0" r="18" fill="none" stroke="#78909C" strokeWidth="0.5" opacity="0.5" />
          <text x="-3" y="-6" fill="#78909C" fontSize="8" opacity="0.6">N</text>
          <line x1="0" y1="-14" x2="0" y2="-5" stroke="#78909C" strokeWidth="1" opacity="0.6" />
        </g>
      </svg>
    </div>
  );
}
