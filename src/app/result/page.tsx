'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import styles from './Result.module.css';
import { CheckCircle, AlertTriangle, Car, Ambulance, ShieldAlert, RefreshCw, XCircle, PlusCircle } from 'lucide-react';

interface AnalysisResult {
  owner_name?: string;
  vehicle_model?: string;
  license_plate?: string;
  stolen_status?: string;
  emergency_vehicle?: string;
  deducted_fee?: number | string;
  payment_method?: string;
  // Fallback fields for errors
  status?: string;
  msg?: string;
  vehicle_type?: string;
}

export default function ResultPage() {
  const router = useRouter();
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const resultData = sessionStorage.getItem('analysisResult');
    const imageDataUrl = sessionStorage.getItem('processedImage');
    
    if (resultData) {
      try {
        setResult(JSON.parse(resultData));
      } catch (error) {
        console.error("Failed to parse analysis result:", error);
      }
    }
    if (imageDataUrl) {
      setImageUrl(imageDataUrl);
    }
    
    setIsLoading(false);

    // Clean up the stored image data after use
    return () => {
        sessionStorage.removeItem('processedImage');
    };
  }, []);

  const getStatusIcon = () => {
    if (!result || result.status?.includes('error') || result.status?.includes('fail')) return <XCircle className={styles.statusIconError} />;
    if (result.stolen_status?.startsWith('Yes')) return <ShieldAlert className={styles.statusIconStolen} />;
    if (result.emergency_vehicle === 'Yes') return <Ambulance className={styles.statusIconEmergency} />;
    return <CheckCircle className={styles.statusIconNormal} />;
  };

  const renderDetails = () => {
    if (!result) {
      return (
        <div className={styles.detailsGrid}>
          <div className={styles.detailItem}>
            <span>Status</span>
            <p className={styles.errorText}>Analysis Failed or Data Not Found</p>
          </div>
        </div>
      );
    }

    // Handle specific error messages from the backend
    if (result.status && result.msg) {
        return (
            <div className={styles.detailsGrid}>
                <div className={styles.detailItem}>
                    <span>Status</span>
                    <p className={styles.errorText}>{result.status.replace(/_/g, ' ').toLocaleUpperCase()}</p>
                </div>
                 <div className={styles.detailItem}>
                    <span>Vehicle Type</span>
                    <p>{result.vehicle_type || 'N/A'}</p>
                </div>
                <div className={styles.detailItem}>
                    <span>Message</span>
                    <p>{result.msg}</p>
                </div>
            </div>
        );
    }

    return (
      <div className={styles.detailsGrid}>
        <div className={styles.detailItem}>
          <span>Owner Name</span>
          <p>{result.owner_name || 'N/A'}</p>
        </div>
        <div className={styles.detailItem}>
          <span>Vehicle Model</span>
          <p>{result.vehicle_model || 'N/A'}</p>
        </div>
        <div className={styles.detailItem}>
          <span>License Plate</span>
          <p>{result.license_plate || 'N/A'}</p>
        </div>
        <div className={styles.detailItem}>
          <span>Stolen Status</span>
          <p className={result.stolen_status?.startsWith('Yes') ? styles.errorText : ''}>
            {result.stolen_status || 'No'}
          </p>
        </div>
        <div className={styles.detailItem}>
          <span>Emergency Vehicle</span>
          <p className={result.emergency_vehicle === 'Yes' ? styles.emergencyText : ''}>
            {result.emergency_vehicle || 'No'}
          </p>
        </div>
        <div className={styles.detailItem}>
          <span>Fee To Be Deducted</span>
          <p className={result.emergency_vehicle === 'Yes' ? styles.emergencyText : ''}>
            {typeof result.deducted_fee === 'string' ? result.deducted_fee : `₹${result.deducted_fee ?? 0}`}
          </p>
        </div>
        <div className={styles.detailItem}>
          <span>Payment Method</span>
          <p>{result.payment_method || 'N/A'}</p>
        </div>
      </div>
    );
  };
  
  return (
    <main className={styles.pageContainer}>
      {isLoading ? (
        <div className={styles.loading}>
          <div className={styles.spinner}></div>
          <p>Loading result...</p>
        </div>
      ) : (
        <div className={styles.resultContainer}>
          <div className={styles.imageColumn}>
            {getStatusIcon()}
            <Image 
              src={imageUrl || "/placeholder-vehicle.jpg"}
              alt="Processed Vehicle" 
              width={800} 
              height={450}
              className={styles.processedImage}
              unoptimized
            />
          </div>
          <div className={styles.detailsColumn}>
            <h1 className={styles.title}>Analysis Result</h1>
            {renderDetails()}
            <div className={styles.buttonGroup}>
              {result && result.owner_name === 'Not Registered' && (
                <button 
                  onClick={() => router.push(`/add-vehicle?plate=${result.license_plate}&vtype=${result.vehicle_model}`)} 
                  className={styles.addVehicleButton}
                >
                  <PlusCircle size={20} />
                  Add Vehicle to Database
                </button>
              )}
              <button onClick={() => router.push('/scanner')} className={styles.scanAgainButton}>
                <RefreshCw size={20} />
                Scan Again
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}