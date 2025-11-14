'use client';

import { useEffect, useState, useRef, memo } from 'react';

interface PerformanceMetrics {
  fps: number;
  memory?: {
    used: number;
    limit: number;
  };
  renderTime: number;
}

interface PerformanceMemory {
  usedJSHeapSize: number;
  jsHeapSizeLimit: number;
  totalJSHeapSize: number;
}

interface PerformanceWithMemory extends Performance {
  memory?: PerformanceMemory;
}

interface PerformanceEntryWithTiming extends PerformanceEntry {
  renderTime?: number;
  loadTime?: number;
}

interface PerformanceEntryWithDelay extends PerformanceEntry {
  processingStart: number;
}

interface LayoutShiftEntry extends PerformanceEntry {
  value: number;
  hadRecentInput: boolean;
}

const PerformanceMonitor = memo(function PerformanceMonitor() {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fps: 60,
    renderTime: 0,
  });
  const [isVisible, setIsVisible] = useState(false);
  const frameRef = useRef<number>(0);
  const lastTimeRef = useRef<number>(0);
  const fpsHistoryRef = useRef<number[]>([]);

  useEffect(() => {
    // Initialize lastTimeRef in effect to avoid impure function call during render
    lastTimeRef.current = performance.now();
    // Only show in development
    if (process.env.NODE_ENV !== 'development') {
      return;
    }

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsVisible(true);
    let animationId: number;

    const measureFPS = (currentTime: number) => {
      const delta = currentTime - lastTimeRef.current;

      if (delta >= 1000) {
        const fps = Math.round((frameRef.current * 1000) / delta);
        fpsHistoryRef.current.push(fps);

        // Keep only last 10 readings for average
        if (fpsHistoryRef.current.length > 10) {
          fpsHistoryRef.current.shift();
        }

        const avgFps = Math.round(
          fpsHistoryRef.current.reduce((a, b) => a + b, 0) / fpsHistoryRef.current.length
        );

        // Measure memory if available
        const memoryInfo = (performance as PerformanceWithMemory).memory;

        setMetrics({
          fps: avgFps,
          memory: memoryInfo ? {
            used: Math.round(memoryInfo.usedJSHeapSize / 1048576), // Convert to MB
            limit: Math.round(memoryInfo.jsHeapSizeLimit / 1048576),
          } : undefined,
          renderTime: Math.round(delta / frameRef.current * 100) / 100,
        });

        frameRef.current = 0;
        lastTimeRef.current = currentTime;
      }

      frameRef.current++;
      animationId = requestAnimationFrame(measureFPS);
    };

    animationId = requestAnimationFrame(measureFPS);

    // Add performance marks for key operations
    if (performance.mark) {
      performance.mark('app-interactive');
    }

    // Monitor Core Web Vitals
    if ('PerformanceObserver' in window) {
      try {
        // Observe Largest Contentful Paint
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1] as PerformanceEntryWithTiming;
          if (process.env.NODE_ENV === 'development') {
            console.log('LCP:', lastEntry.renderTime || lastEntry.loadTime);
          }
        });
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

        // Observe First Input Delay
        const fidObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            const fidEntry = entry as PerformanceEntryWithDelay;
            if (process.env.NODE_ENV === 'development') {
              console.log('FID:', fidEntry.processingStart - fidEntry.startTime);
            }
          });
        });
        fidObserver.observe({ entryTypes: ['first-input'] });

        // Observe Cumulative Layout Shift
        const clsObserver = new PerformanceObserver((list) => {
          let clsScore = 0;
          for (const entry of list.getEntries()) {
            const shiftEntry = entry as LayoutShiftEntry;
            if (!shiftEntry.hadRecentInput) {
              clsScore += shiftEntry.value;
            }
          }
          if (process.env.NODE_ENV === 'development') {
            console.log('CLS:', clsScore);
          }
        });
        clsObserver.observe({ entryTypes: ['layout-shift'] });

        return () => {
          cancelAnimationFrame(animationId);
          lcpObserver.disconnect();
          fidObserver.disconnect();
          clsObserver.disconnect();
        };
      } catch {
        // Silently fail if observers not supported
      }
    }

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  if (!isVisible) return null;

  const getFPSColor = (fps: number) => {
    if (fps >= 55) return '#00ff00';
    if (fps >= 30) return '#ffff00';
    return '#ff0000';
  };

  return (
    <div
      className="fixed bottom-4 left-4 z-[100] bg-black/80 text-white p-3 rounded-lg font-mono text-xs backdrop-blur-sm"
      style={{
        minWidth: '150px',
        pointerEvents: 'none',
      }}
    >
      <div className="flex flex-col gap-1">
        <div className="flex justify-between">
          <span>FPS:</span>
          <span style={{ color: getFPSColor(metrics.fps) }}>
            {metrics.fps}
          </span>
        </div>
        {metrics.memory && (
          <div className="flex justify-between">
            <span>Memory:</span>
            <span>{metrics.memory.used}MB</span>
          </div>
        )}
        <div className="flex justify-between">
          <span>Frame:</span>
          <span>{metrics.renderTime.toFixed(2)}ms</span>
        </div>
      </div>
    </div>
  );
});

export default PerformanceMonitor;