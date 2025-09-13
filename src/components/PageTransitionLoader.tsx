'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useAppContext } from '@/context/AppContext';

export default function PageTransitionLoader() {
  const { setIsLoading } = useAppContext();
  const pathname = usePathname();

  useEffect(() => {
    // Show the spinner immediately when the route changes
    setIsLoading(true);

    // Hide the spinner after a delay that allows the fade-out to complete
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500); // 0.5 second delay is a good starting point

    return () => clearTimeout(timer);
  }, [pathname, setIsLoading]);

  return null;
}