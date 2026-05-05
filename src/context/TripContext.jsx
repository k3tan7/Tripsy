import React, { createContext, useReducer, useContext } from 'react';

export const TripContext = createContext();

const initialState = {
  trips: [
    {
      id: "trip-1",
      name: "Goa with friends",
      type: "beach",
      duration: 5,
      weather: "hot",
      destination: "Goa, India",
      status: "packing",
      createdAt: Date.now(),
      forgottenItems: [],
      templateId: null,
      items: [
        { id: "i1", name: "Sunscreen", category: "Toiletries", packed: true, essential: false, listType: "going", forgottenBefore: false },
        { id: "i2", name: "Swimwear", category: "Clothing", packed: true, essential: false, listType: "going", forgottenBefore: false },
        { id: "i3", name: "Aadhar/ID", category: "Documents", packed: false, essential: true, listType: "going", forgottenBefore: false },
        { id: "i4", name: "Phone charger", category: "Electronics", packed: false, essential: true, listType: "going", forgottenBefore: false },
        { id: "i5", name: "Flip flops", category: "Clothing", packed: false, essential: false, listType: "going", forgottenBefore: false }
      ]
    },
    {
      id: "trip-2",
      name: "Manali trip",
      type: "mountain",
      duration: 7,
      weather: "cold",
      destination: "Manali, HP",
      status: "packing",
      createdAt: Date.now(),
      forgottenItems: [],
      templateId: null,
      items: [
        { id: "i6", name: "Warm jacket", category: "Clothing", packed: true, essential: false, listType: "going", forgottenBefore: false },
        { id: "i7", name: "Thermals", category: "Clothing", packed: false, essential: false, listType: "going", forgottenBefore: false },
        { id: "i8", name: "Aadhar/ID", category: "Documents", packed: false, essential: true, listType: "going", forgottenBefore: false }
      ]
    },
    {
      id: "trip-3",
      name: "Delhi work trip",
      type: "business",
      duration: 2,
      weather: "hot",
      destination: "Delhi, India",
      status: "packing",
      createdAt: Date.now(),
      forgottenItems: [],
      templateId: null,
      items: [
        { id: "i9", name: "Laptop", category: "Electronics", packed: true, essential: false, listType: "going", forgottenBefore: false },
        { id: "i10", name: "Formal shirt", category: "Clothing", packed: true, essential: false, listType: "going", forgottenBefore: false },
        { id: "i11", name: "Aadhar/ID", category: "Documents", packed: false, essential: true, listType: "going", forgottenBefore: false }
      ]
    }
  ],
  templates: [
    { id: "t1", name: "5-day beach", type: "beach", items: [], usageCount: 2 },
    { id: "t2", name: "Business trip", type: "business", items: [], usageCount: 1 },
    { id: "t3", name: "Weekend city", type: "city", items: [], usageCount: 0 }
  ]
};

function tripReducer(state, action) {
  switch (action.type) {
    case 'ADD_TRIP':
      return { ...state, trips: [...state.trips, action.trip] };
    case 'TOGGLE_ITEM':
      return {
        ...state,
        trips: state.trips.map(trip => {
          if (trip.id === action.tripId) {
            return {
              ...trip,
              items: trip.items.map(item =>
                item.id === action.itemId ? { ...item, packed: !item.packed } : item
              )
            };
          }
          return trip;
        })
      };
    case 'ADD_ITEM':
      return {
        ...state,
        trips: state.trips.map(trip => {
          if (trip.id === action.tripId) {
            return { ...trip, items: [...trip.items, action.item] };
          }
          return trip;
        })
      };
    case 'REMOVE_ITEM':
      return {
        ...state,
        trips: state.trips.map(trip => {
          if (trip.id === action.tripId) {
            return { ...trip, items: trip.items.filter(item => item.id !== action.itemId) };
          }
          return trip;
        })
      };
    case 'SAVE_TEMPLATE':
      return { ...state, templates: [...state.templates, action.template] };
    case 'MARK_COMPLETE':
      return {
        ...state,
        trips: state.trips.map(trip => {
          if (trip.id === action.tripId) {
            return { ...trip, status: "completed" };
          }
          return trip;
        })
      };
    case 'SAVE_DEBRIEF':
      return {
        ...state,
        trips: state.trips.map(trip => {
          if (trip.id === action.tripId) {
            return { ...trip, forgottenItems: action.forgottenItems, status: "completed" };
          }
          return trip;
        })
      };
    default:
      return state;
  }
}

export const TripProvider = ({ children }) => {
  const [state, dispatch] = useReducer(tripReducer, initialState);

  return (
    <TripContext.Provider value={{ ...state, dispatch }}>
      {children}
    </TripContext.Provider>
  );
};

export const useTripContext = () => useContext(TripContext);
