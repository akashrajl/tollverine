'use client';
import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import styles from './AddVehicle.module.css';
import { supabase } from '@/lib/supabaseClient';
import { Car, User, Shield, RefreshCw } from 'lucide-react';
import toast from 'react-hot-toast';
import { useAppContext } from '@/context/AppContext';

export default function AddVehiclePage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { setIsLoading } = useAppContext();

  const [plate, setPlate] = useState(searchParams.get('plate') || '');
  const [vehicleType, setVehicleType] = useState(searchParams.get('vtype') || 'car');
  const [ownerName, setOwnerName] = useState('');
  const [status, setStatus] = useState<'normal' | 'stolen' | 'emergency'>('normal');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      let response;
      if (status === 'stolen') {
        response = await supabase
          .from('stolen_vehicles')
          .insert({ number_plate: plate, name: ownerName, vehicle_model: vehicleType });
      } else {
        response = await supabase
          .from('vehicles')
          .insert({ number_plate: plate, name: ownerName, vehicle_type: vehicleType, upi_id: 'default@upi' });
      }
      
      if (response.error) {
        throw response.error;
      }
      
      toast.success(`Vehicle ${plate} has been added to the database.`);
      router.push('/scanner');

    } catch (error) {
      const err = error;
      console.error("Error saving vehicle data:", err);
      toast.error(`Failed to save data: ${err.message || 'An unknown error occurred.'}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className={styles.pageContainer}>
      <div className={styles.formContainer}>
        <h1>Add Unknown Vehicle Details</h1>
        <p>The vehicle with license plate <span className={styles.highlight}>{plate || 'N/A'}</span> was not found. Please add its details below.</p>
        
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.inputGroup}>
            <label htmlFor="plate"><Shield size={18}/> License Plate Number</label>
            <input id="plate" type="text" value={plate} onChange={(e) => setPlate(e.target.value.toUpperCase())} required />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="ownerName"><User size={18}/> Owner Name</label>
            <input id="ownerName" type="text" value={ownerName} onChange={(e) => setOwnerName(e.target.value)} required />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="vehicleType"><Car size={18}/> Vehicle Type</label>
            <input id="vehicleType" type="text" value={vehicleType} onChange={(e) => setVehicleType(e.target.value)} required />
          </div>

          <div className={styles.radioGroup}>
            <p>Vehicle Status:</p>
            <div className={styles.radioOptions}>
              <label className={styles.radioLabel}>
                <input type="radio" name="status" value="normal" checked={status === 'normal'} onChange={() => setStatus('normal')} />
                Normal
              </label>
              <label className={styles.radioLabel}>
                <input type="radio" name="status" value="stolen" checked={status === 'stolen'} onChange={() => setStatus('stolen')} />
                Stolen
              </label>
            </div>
          </div>

          <div className={styles.buttonGroup}>
            <button type="submit" className={styles.submitButton}>Submit Details</button>
            <button type="button" onClick={() => router.push('/scanner')} className={styles.scanAgainButton}>
              <RefreshCw size={18} /> Scan Another
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
