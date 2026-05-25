'use client';

import { useEffect, useState } from 'react';

interface LogoProps {
  size?: number;
  animated?: boolean;
  className?: string;
}

/**
 * Logo component with SVG shield design featuring K+i monogram.
 * - Desktop: CSS-only blue glow pulse animation
 * - Mobile: Static (no animation for performance)
 */
export function Logo({ size = 48, animated, className = '' }: LogoProps) {
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    // Check if we're on desktop (>= 768px) for animation eligibility
    const checkAnimationSupport = () => {
      const shouldAnimate = window.innerWidth >= 768;
      setIsAnimated(shouldAnimate);
    };

    // Set initial state based on window width
    checkAnimationSupport();

    // Listen for resize events to update animation state
    window.addEventListener('resize', checkAnimationSupport);
    return () => window.removeEventListener('resize', checkAnimationSupport);
  }, []);

  // Use prop value if explicitly provided, otherwise use computed value
  const shouldAnimate = animated !== undefined ? animated : isAnimated;

  return (
    <div
      className={`logo-container ${shouldAnimate ? 'logo-animated' : ''} ${className}`}
      style={{
        width: size,
        height: size,
      }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Kalinga Sovereign AI Logo"
        role="img"
      >
        <defs>
          {/* Outer shield gradient */}
          <linearGradient id="ksai-shield-gradient" x1="24" y1="0" x2="24" y2="48" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#2563EB" />
            <stop offset="100%" stopColor="#1E40AF" />
          </linearGradient>

          {/* Glow filter for animation */}
          <filter id="ksai-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Outer Shield */}
        <path
          d="M24 2L4 10V22C4 33.05 12.65 43.24 24 46C35.35 43.24 44 33.05 44 22V10L24 2Z"
          fill="url(#ksai-shield-gradient)"
          filter={shouldAnimate ? 'url(#ksai-glow)' : undefined}
        />

        {/* Inner Shield (slightly smaller, dark blue) */}
        <path
          d="M24 6L8 12.5V22C8 30.84 15.16 38.96 24 42C32.84 38.96 40 30.84 40 22V12.5L24 6Z"
          fill="#1E3A5F"
        />

        {/* K Monogram - Bold white */}
        <text
          x="13"
          y="32"
          fontFamily="Inter, system-ui, sans-serif"
          fontWeight="700"
          fontSize="18"
          fill="white"
        >
          K
        </text>

        {/* i Monogram - Light blue */}
        <text
          x="27"
          y="32"
          fontFamily="Inter, system-ui, sans-serif"
          fontWeight="500"
          fontSize="18"
          fill="#93C5FD"
        >
          i
        </text>
      </svg>
    </div>
  );
}
