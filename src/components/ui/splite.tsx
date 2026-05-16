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

export function SplineScene({ scene, className, onSplineLoad }: SplineSceneProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  const handleLoad = (app: Application) => {
    setIsLoaded(true)
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
