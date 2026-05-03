import { useContext, useEffect } from 'react';
import { TripContext } from '../context/TripContext';

// Read/write templates to localStorage
export function useTemplates() {
  const { state, dispatch } = useContext(TripContext);

  // Load templates from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('templates');
    if (saved) {
      // Would need to implement loading logic
    }
  }, []);

  // Save templates to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('templates', JSON.stringify(state.templates));
  }, [state.templates]);

  return { templates: state.templates, dispatch };
}
