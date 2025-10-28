import { useEffect, useRef, useState } from 'react';

interface CounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  startOnMount?: boolean; // if true, animation starts immediately on mount
}

export const Counter = ({ end, duration = 2000, suffix = '', startOnMount = true }: CounterProps) => {
  const [count, setCount] = useState(0);
  const startTime = useRef<number | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    // If not configured to start automatically, do nothing (caller can implement intersection trigger later)
    if (!startOnMount) return;

    const animate = (timestamp: number) => {
      if (!startTime.current) startTime.current = timestamp;
      const progress = timestamp - startTime.current;
      const percentage = Math.min(progress / duration, 1);

      // Smooth easing
      const easeOut = 1 - Math.pow(1 - percentage, 3);
      const currentCount = Math.floor(easeOut * end);

      setCount(currentCount);

      if (percentage < 1) {
        rafRef.current = requestAnimationFrame(animate);
      }
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [end, duration, startOnMount]);

  return <span>{count}{suffix}</span>;
};