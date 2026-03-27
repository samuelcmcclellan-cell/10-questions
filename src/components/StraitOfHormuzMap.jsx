import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const STRAIT_CENTER = [26.35, 56.25];
const ZOOM = 7;

// Key locations
const LOCATIONS = [
  { pos: [27.19, 56.27], name: 'Bandar Abbas', type: 'port' },
  { pos: [25.26, 55.30], name: 'Dubai', type: 'city' },
  { pos: [24.45, 54.65], name: 'Abu Dhabi', type: 'city' },
  { pos: [23.61, 58.54], name: 'Muscat', type: 'city' },
  { pos: [26.56, 56.26], name: 'Qeshm Island', type: 'island' },
  { pos: [27.08, 56.46], name: 'Hormuz Is.', type: 'island' },
  { pos: [26.52, 56.08], name: 'Musandam', type: 'region' },
];

export default function StraitOfHormuzMap() {
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);

  useEffect(() => {
    if (mapInstanceRef.current) return;

    const map = L.map(mapRef.current, {
      center: STRAIT_CENTER,
      zoom: ZOOM,
      zoomControl: false,
      attributionControl: false,
      dragging: false,
      scrollWheelZoom: false,
      doubleClickZoom: false,
      touchZoom: false,
      boxZoom: false,
      keyboard: false,
    });

    // Dark map tiles (CartoDB Dark Matter - no API key needed)
    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png', {
      subdomains: 'abcd',
      maxZoom: 19,
    }).addTo(map);

    // Country labels layer
    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_only_labels/{z}/{x}/{y}{r}.png', {
      subdomains: 'abcd',
      maxZoom: 19,
      pane: 'shadowPane',
    }).addTo(map);

    // Strait label
    const straitLabel = L.divIcon({
      className: '',
      html: `<div style="
        color: #FF5252;
        font-size: 11px;
        font-weight: 700;
        letter-spacing: 2px;
        white-space: nowrap;
        text-shadow: 0 0 8px rgba(255,82,82,0.5), 0 1px 3px rgba(0,0,0,0.8);
        transform: rotate(-25deg);
        transform-origin: center;
      ">STRAIT OF HORMUZ</div>`,
      iconSize: [160, 20],
      iconAnchor: [80, 10],
    });
    L.marker([26.20, 56.35], { icon: straitLabel, interactive: false }).addTo(map);

    // Location markers
    LOCATIONS.forEach(loc => {
      const isPort = loc.type === 'port';
      const isIsland = loc.type === 'island';
      const isRegion = loc.type === 'region';

      const size = isPort ? 8 : isIsland || isRegion ? 0 : 5;
      const color = isPort ? '#FF5252' : '#FFB300';

      if (size > 0) {
        L.circleMarker(loc.pos, {
          radius: size,
          fillColor: color,
          color: color,
          weight: 1.5,
          fillOpacity: 0.8,
        }).addTo(map);
      }

      const labelIcon = L.divIcon({
        className: '',
        html: `<div style="
          color: ${isPort ? '#FF5252' : isIsland || isRegion ? '#78909C' : '#FFB300'};
          font-size: ${isIsland || isRegion ? '9px' : '10px'};
          font-weight: ${isPort ? '700' : '500'};
          white-space: nowrap;
          text-shadow: 0 1px 4px rgba(0,0,0,0.9);
          ${isIsland || isRegion ? 'font-style: italic;' : ''}
        ">${loc.name}</div>`,
        iconSize: [100, 16],
        iconAnchor: isPort ? [-8, 8] : [-6, 8],
      });
      L.marker(loc.pos, { icon: labelIcon, interactive: false }).addTo(map);
    });

    // Animated disruption pulse at the narrowest point
    const pulseIcon = L.divIcon({
      className: '',
      html: `<div style="position:relative; width:30px; height:30px;">
        <div style="
          position:absolute; top:50%; left:50%; transform:translate(-50%,-50%);
          width:10px; height:10px; border-radius:50%;
          background:#FF5252; opacity:0.9;
        "></div>
        <div style="
          position:absolute; top:50%; left:50%; transform:translate(-50%,-50%);
          width:28px; height:28px; border-radius:50%;
          border:2px solid #FF5252; opacity:0;
          animation: pulse-ring 2s ease-out infinite;
        "></div>
      </div>
      <style>
        @keyframes pulse-ring {
          0% { opacity:0.6; transform:translate(-50%,-50%) scale(0.5); }
          100% { opacity:0; transform:translate(-50%,-50%) scale(1.2); }
        }
      </style>`,
      iconSize: [30, 30],
      iconAnchor: [15, 15],
    });
    L.marker([26.30, 56.30], { icon: pulseIcon, interactive: false }).addTo(map);

    // Info overlay
    const infoDiv = L.control({ position: 'bottomleft' });
    infoDiv.onAdd = () => {
      const div = L.DomUtil.create('div');
      div.innerHTML = `
        <div style="
          background: rgba(22,33,62,0.92);
          border: 1px solid #2a3a5e;
          border-radius: 8px;
          padding: 10px 14px;
          color: white;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          backdrop-filter: blur(8px);
          min-width: 180px;
        ">
          <div style="color:#FF5252; font-size:10px; font-weight:700; letter-spacing:1px; margin-bottom:4px;">
            SUPPLY DISRUPTED
          </div>
          <div style="font-size:15px; font-weight:600; margin-bottom:2px;">
            ~10M+ bbl/day offline
          </div>
          <div style="color:#78909C; font-size:10px;">
            21% of global oil supply at risk
          </div>
        </div>
      `;
      return div;
    };
    infoDiv.addTo(map);

    mapInstanceRef.current = map;

    return () => {
      map.remove();
      mapInstanceRef.current = null;
    };
  }, []);

  return (
    <div className="w-full h-full animate-fade-in rounded-lg overflow-hidden" style={{ minHeight: 200 }}>
      <div ref={mapRef} style={{ width: '100%', height: '100%', background: '#0a1628' }} />
    </div>
  );
}
