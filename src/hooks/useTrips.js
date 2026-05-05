import { useTripContext } from '../context/TripContext';

export default function useTrips() {
  const { trips, templates, dispatch } = useTripContext();
  return { trips, templates, dispatch };
}
