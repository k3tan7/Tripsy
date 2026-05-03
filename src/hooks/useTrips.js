import { useTripContext } from '../context/TripContext';

export function useTrips() {
  const { trips, templates } = useTripContext();
  return { trips, templates };
}
