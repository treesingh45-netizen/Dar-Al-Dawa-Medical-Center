import React, { useState } from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  textColor?: 'dark' | 'white';
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({
  size = 'md',
  showText = true,
  textColor = 'dark',
  className = ''
}) => {
  const [imgFailed, setImgFailed] = useState(false);

  const sizeMap = {
    sm: { icon: 'w-9 h-9', title: 'text-base', sub: 'text-[10px]' },
    md: { icon: 'w-11 h-11', title: 'text-xl', sub: 'text-xs' },
    lg: { icon: 'w-16 h-16', title: 'text-2xl', sub: 'text-sm' },
    xl: { icon: 'w-24 h-24', title: 'text-3xl', sub: 'text-base' }
  };

  const currentSize = sizeMap[size];

  // Official Dar Al Dawa emblem image from Facebook profile
  const OFFICIAL_LOGO_URL =
    'https://scontent.fkhi21-1.fna.fbcdn.net/v/t39.30808-6/448076406_122101469708352867_684847551594253426_n.jpg?stp=dst-jpg_tt6&cstp=mx500x500&ctp=s500x500&_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=CLXMQ2pX44QQ7kNvwEwApSj&_nc_oc=Adom1ya2ixzGoeatWHBr9nYUjIAIAMXqN5fMsTit3kXMz1WwciZAKq81i4z1_u97o0k&_nc_zt=23&_nc_ht=scontent.fkhi21-1.fna&_nc_gid=2dxkJE2fJrtghuTsPPkjAg&_nc_ss=7b2a8&oh=00_AQL6NodS56mdmCDIWxrJlhlEMH4RkEcm6UnXyOTsnsTIRQ&oe=6A9C8778';

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Official Dar Al Dawa Logo Emblem */}
      <div className={`relative ${currentSize.icon} flex-shrink-0 flex items-center justify-center`}>
        {!imgFailed ? (
          <img
            src={OFFICIAL_LOGO_URL}
            alt="Dar Al Dawa Medical Center Logo"
            referrerPolicy="no-referrer"
            onError={() => setImgFailed(true)}
            className="w-full h-full object-contain rounded-full shadow-sm bg-white p-0.5 border border-[#8DC63F]/20"
          />
        ) : (
          <svg
            viewBox="0 0 200 200"
            className="w-full h-full drop-shadow-sm"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Red Crescent on Left */}
            <path
              d="M95 18C45 28 15 75 22 130C28 170 65 190 175 125C150 178 70 185 35 145C10 115 15 50 85 20C88 19 92 18 95 18Z"
              fill="#E31B23"
            />

            {/* Navy Blue Stethoscope Loop Framing the Heart */}
            <path
              d="M62 48C50 68 55 105 95 145L100 150L105 145C145 105 150 68 138 48C130 35 115 35 100 48C85 35 70 35 62 48Z"
              stroke="#2D3282"
              strokeWidth="10"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="#8DC63F"
            />

            {/* Stethoscope Left Earpiece */}
            <path
              d="M58 52L48 38C45 34 50 28 55 32L68 44"
              stroke="#2D3282"
              strokeWidth="8"
              strokeLinecap="round"
            />
            <circle cx="46" cy="35" r="7" fill="#1A1A2E" />

            {/* Stethoscope Right Earpiece */}
            <path
              d="M142 52L152 38C155 34 150 28 145 32L132 44"
              stroke="#2D3282"
              strokeWidth="8"
              strokeLinecap="round"
            />
            <circle cx="154" cy="35" r="7" fill="#1A1A2E" />

            {/* Capsule / Pill in Heart */}
            <g transform="translate(70, 50)">
              <path
                d="M10 20L45 55C52 62 62 62 68 55L72 51C78 45 78 35 72 29L37 -6C31 -12 21 -12 15 -6L10 -1C4 5 4 14 10 20Z"
                fill="#7CB32E"
                stroke="#FFFFFF"
                strokeWidth="5"
              />
              <path
                d="M32 42L48 26"
                stroke="#FFFFFF"
                strokeWidth="5"
                strokeLinecap="round"
              />
              <circle cx="55" cy="18" r="3" fill="#FFFFFF" />
            </g>

            {/* Stethoscope Tube Connector & Chestpiece Bottom */}
            <path
              d="M100 152L100 162C100 178 120 178 120 160C120 148 135 148 135 160C135 175 115 190 95 180"
              stroke="#1A1A2E"
              strokeWidth="8"
              strokeLinecap="round"
            />
            <circle cx="140" cy="155" r="8" fill="#1A1A2E" stroke="#FFFFFF" strokeWidth="2" />
          </svg>
        )}
      </div>

      {/* Wordmark */}
      {showText && (
        <div className="flex flex-col">
          <span
            className={`font-serif font-bold tracking-tight leading-tight ${currentSize.title} ${
              textColor === 'white' ? 'text-white' : 'text-[#1A1A2E]'
            }`}
          >
            Dar Al Dawa
          </span>
          <span
            className={`font-medium tracking-wide uppercase ${currentSize.sub} ${
              textColor === 'white' ? 'text-[#8DC63F]' : 'text-[#5C8A1E]'
            }`}
          >
            Medical Center
          </span>
        </div>
      )}
    </div>
  );
};
