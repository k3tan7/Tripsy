import React, { createContext, useContext, useState } from 'react';

const TripContext = createContext();

export function TripProvider({ children }) {
  const [trips] = useState([
    {
      id: '1',
      name: 'Goa Getaway',
      type: 'beach',
      duration: 5,
      weather: 'hot',
      destination: 'Goa, India',
      status: 'packing',
      items: [
        { id: '1', name: 'Swimsuit', category: 'clothing', packed: true, essential: true, listType: 'default', forgottenBefore: false },
        { id: '2', name: 'Sunscreen', category: 'toiletries', packed: false, essential: true, listType: 'default', forgottenBefore: true },
      ],
    },
    {
      id: '2',
      name: 'Himalayan Trek',
      type: 'mountain',
      duration: 7,
      weather: 'cold',
      destination: 'Manali, India',
      status: 'packing',
      items: [
        { id: '3', name: 'Thermal Wear', category: 'clothing', packed: false, essential: true, listType: 'default', forgottenBefore: false },
      ],
    },
    {
      id: '3',
      name: 'Weekend in Mumbai',
      type: 'city',
      duration: 3,
      weather: 'hot',
      destination: 'Mumbai, India',
      status: 'packing',
      items: [
        { id: '4', name: 'Casual Shirts', category: 'clothing', packed: true, essential: true, listType: 'default', forgottenBefore: false },
        { id: '5', name: 'Power Bank', category: 'electronics', packed: true, essential: true, listType: 'default', forgottenBefore: true },
        { id: '6', name: 'Umbrella', category: 'misc', packed: false, essential: false, listType: 'default', forgottenBefore: false },
      ],
    }
  ]);

  const [templates] = useState([
    { id: 't1', name: 'Beach Holiday', type: 'beach' },
    { id: 't2', name: 'Business Trip', type: 'business' },
    { id: 't3', name: 'Mountain Trek', type: 'mountain' }
  ]);

  return (
    <TripContext.Provider value={{ trips, templates }}>
      {children}
    </TripContext.Provider>
  );
}

export function useTripContext() {
  return useContext(TripContext);
}
