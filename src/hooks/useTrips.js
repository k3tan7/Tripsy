import { useTripContext } from '../context/TripContext';

export default function useTrips() {
  const { state, dispatch } = useTripContext();
  return { trips: state.trips, templates: state.templates, dispatch };
}
