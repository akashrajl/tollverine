'use client';
import { useAppContext } from "@/context/AppContext";
import styles from './LoadingSpinner.module.css';
import Image from "next/image"; // Import the Next.js Image component

const LoadingSpinner = () => {
  const { isLoading } = useAppContext();

  // Use CSS classes to control visibility and fade transitions
  return (
    <div className={`${styles.overlay} ${isLoading ? styles.visible : ''}`}>
      <Image 
        src="/loading.gif" 
        alt="Loading..."
        width={150} // Adjust the size of your GIF here
        height={150}
        unoptimized // Important for GIFs to prevent optimization issues
      />
    </div>
  );
};

export default LoadingSpinner;