'use client'

import { Suspense, lazy, useEffect, useState } from 'react'
import type { Application } from '@splinetool/runtime'
const Spline = lazy(() => import('@splinetool/react-spline'))

interface SplineSceneProps {
  scene: string
  className?: string
  onSplineLoad?: (app: Application) => void
}

function SplineLoader() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-[var(--color-surface-2)]">
      <div className="flex flex-col items-center gap-3">
        <span className="loader"></span>
        <p className="text-xs text-[var(--color-muted)]">Loading 3D...</p>
      </div>
    </div>
  )
}

// Detect if we should use lower quality settings
const isMobileDevice = () => {
  if (typeof window === "undefined") return false;
  return (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
    window.innerWidth < 768
  );
};

export function SplineScene({ scene, className, onSplineLoad }: SplineSceneProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setIsMobile(isMobileDevice())
  }, [])

  const handleLoad = (app: Application) => {
    setIsLoaded(true)
    // Mobile optimization handled via CSS and animation loop reduction
    onSplineLoad?.(app)
  }

  return (
    <Suspense fallback={<SplineLoader />}>
      <Spline
        scene={scene}
        className={className}
        onLoad={handleLoad}
      />
    </Suspense>
  )
}
