import { useContext, useEffect } from 'react';
import { TripContext } from '../context/TripContext';

// Read/write trips to localStorage
export function useTrips() {
  const { state, dispatch } = useContext(TripContext);

  // Load trips from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('trips');
    if (saved) {
      // Would need to implement loading logic
    }
  }, []);

  // Save trips to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('trips', JSON.stringify(state.trips));
  }, [state.trips]);

  return { trips: state.trips, dispatch };
}
