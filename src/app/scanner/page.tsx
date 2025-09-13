'use client';
import { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import styles from './Scanner.module.css';
import TypewriterHeading from '@/components/TypewriterHeading';
import LoginModal from '@/components/LoginModal';
import { useAuth } from '@/context/AuthContext';
import { useAppContext } from '@/context/AppContext';
import { Upload, Camera, FileVideo, FileImage } from 'lucide-react';
import toast from 'react-hot-toast';
import WebcamFeed from '@/components/WebcamFeed'; // <-- Import the new component

// This function converts a base64 Data URL (from the webcam) into a File object
const dataUrlToFile = async (dataUrl: string, fileName: string): Promise<File> => {
    const res = await fetch(dataUrl);
    const blob = await res.blob();
    return new File([blob], fileName, { type: blob.type });
};


export default function ScannerPage() {
  const { user } = useAuth();
  const router = useRouter();
  const { setIsLoading } = useAppContext();
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showWebcam, setShowWebcam] = useState(false); // New state for webcam
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleAnalysis = async (file: File) => {
    if (!user) {
      setShowLoginModal(true);
      return;
    }

    setIsLoading(true);
    
    // Convert file to Data URL to display on the result page
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = async () => {
      sessionStorage.setItem('processedImage', reader.result as string);
    };

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch('https://akashrajl2104-tollverine-backend.hf.space/analyze', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Analysis failed. The backend server might be busy or offline.');
      }

      const result = await response.json();
      sessionStorage.setItem('analysisResult', JSON.stringify(result));
      router.push('/result');

    } catch (error) {
      console.error("Error during analysis:", error);
      toast.error(error.message || "An unexpected error occurred.");
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleCapture = async (imageSrc: string) => {
      setShowWebcam(false); // Close the webcam feed
      const file = await dataUrlToFile(imageSrc, 'webcam-capture.jpg');
      setUploadedFile(file);
      handleAnalysis(file); // Immediately send the captured frame for analysis
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setUploadedFile(file);
    }
  };

  const handleUploadClick = () => {
    if (uploadedFile) {
      handleAnalysis(uploadedFile);
    } else {
      toast.error("Please select a file first.");
    }
  };
  
  const handleLiveFeedClick = () => {
      if (!user) {
          setShowLoginModal(true);
      } else {
          setShowWebcam(true); // Open the webcam feed
      }
  };

  const handleLoginRedirect = () => {
    sessionStorage.setItem('redirectAfterLogin', '/scanner');
    router.push('/login');
    setShowLoginModal(false);
  };
  
  const handleSignupRedirect = () => {
      sessionStorage.setItem('redirectAfterLogin', '/scanner');
      router.push('/signup');
      setShowLoginModal(false);
  }

  const getFileIcon = () => {
    if (!uploadedFile) return null;
    if (uploadedFile.type.startsWith('image/')) {
      return <FileImage size={24} className={styles.fileIcon} />;
    }
    if (uploadedFile.type.startsWith('video/')) {
      return <FileVideo size={24} className={styles.fileIcon} />;
    }
    return null;
  };

  return (
    <>
      <main className={styles.pageContainer}>
        <div className={styles.content}>
          <TypewriterHeading text="Analyze Vehicle Media" className={styles.title} />
          <p className={styles.subtitle}>
            Upload an image or video, or start a live feed to detect vehicle types, identify license plates, and process tolls instantly.
          </p>
          <div className={styles.scannerInterface}>
            <div className={styles.searchBar} onClick={() => fileInputRef.current?.click()}>
              {uploadedFile ? (
                <>
                  {getFileIcon()}
                  <span>{uploadedFile.name}</span>
                </>
              ) : (
                <span>Click to select an image or video...</span>
              )}
            </div>
            <input 
              type="file" 
              ref={fileInputRef} 
              onChange={handleFileChange} 
              style={{ display: 'none' }} 
              accept="image/*,video/*"
            />
            <button className={styles.actionButton} onClick={handleUploadClick}>
              <Upload size={20} /> Upload
            </button>
            <button className={styles.actionButton} onClick={handleLiveFeedClick}>
              <Camera size={20} /> Live Feed
            </button>
          </div>
        </div>
      </main>
      {showLoginModal && (
        <LoginModal 
          onClose={() => setShowLoginModal(false)}
          onLoginClick={handleLoginRedirect}
          onSignupClick={handleSignupRedirect} 
        />
      )}
      {showWebcam && (
        <WebcamFeed 
            onCapture={handleCapture}
            onClose={() => setShowWebcam(false)}
        />
      )}
    </>
  );
}
