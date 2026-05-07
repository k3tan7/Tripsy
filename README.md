# Tripsy — Smart Travel Packing Organiser

Tripsy is a React-based web application that helps travellers organise, track, and manage their packing lists. It features smart weight estimation, category-based item management, reusable templates, and dedicated modes for last-minute checks and return trips.

---

## Features

### Packing List Management
- Category-based accordion layout (Clothing, Toiletries, Electronics, Documents, Medicine, Accessories, Food and Drinks, Miscellaneous)
- Add, delete, and toggle items per category
- Quantity tracking per item
- Real-time progress bar showing packed vs total items
- Fixed-height scrollable container ensuring consistent layout regardless of expanded categories

### Smart Weight Tracker
- Pre-estimated weights for 100+ common travel items stored in a centralised lookup table
- Packed Weight display updates dynamically as items are checked or unchecked
- Total estimated weight shown separately for reference
- Category-wise weight breakdown
- Colour-coded weight indicator (green under 15 kg, yellow between 15 and 23 kg, red above 23 kg)

### Last-Minute Mode
- Filters and displays only unpacked items from critical categories: Documents, Medicine, Electronics, and Accessories
- Quick one-tap packing for essentials before departure

### Return Trip Checklist
- Displays all packed items grouped by category
- Separate check-off system to ensure nothing is left behind at the destination
- Mark All Collected button for quick completion

### Trip Templates
- Built-in templates with pre-populated item lists for five trip types: Beach, Business, Camping, City, and Winter
- Save as Template allows saving any trip's packing list as a reusable custom template
- Saved templates can be applied when creating a new trip

### Trip Management
- Create new trips with name, destination, dates, trip type, and colour tag
- Edit trip name and destination inline
- Delete trips with inline confirmation dialog
- Export packing list to clipboard in plain text format

### Dashboard
- Global statistics: total trips, total items, packed count, remaining count
- Sort trips by date or name
- Trip cards with progress bars, type badges, and colour-coded borders

---

## Tech Stack

| Technology | Purpose |
|---|---|
| React 19 | UI framework |
| Vite 8 | Build tool and development server |
| React Router v7 | Client-side routing |
| Lucide React | Icon library |
| Vanilla CSS | Styling with custom properties |
| localStorage | Client-side data persistence |

---

## Project Structure

```
tripsy/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx / .css          — Top navigation bar
│   │   ├── PackingList.jsx / .css     — Accordion packing list with categories
│   │   ├── WeightTracker.jsx / .css   — Dynamic weight display and breakdown
│   │   ├── LastMinuteMode.jsx / .css  — Critical unpacked items filter
│   │   └── ReturnChecklist.jsx / .css — Return trip item collection
│   ├── data/
│   │   ├── tripsData.js               — Categories, templates, and item weights
│   │   └── sampleTrips.js             — Three pre-built sample trips
│   ├── pages/
│   │   ├── Home.jsx / .css            — Dashboard with trip cards and statistics
│   │   ├── NewTrip.jsx / .css         — Trip creation form with template loading
│   │   └── TripDetailPage.jsx / .css  — Trip detail view with all management features
│   ├── App.jsx                        — Root component, routing, and state management
│   ├── main.jsx                       — Application entry point
│   └── index.css                      — Global styles and CSS custom properties
├── index.html
├── package.json
└── vite.config.js
```

---

## Installation and Setup

### Prerequisites
- Node.js (v18 or higher)
- npm

### Steps

```bash
# Clone the repository
git clone https://github.com/k3tan7/Tripsy.git
cd Tripsy

# Install dependencies
npm install

# Start the development server
npm run dev

# Open in browser at http://localhost:5173
```

---

## Architecture

### State Management
All trip data is stored in a single `trips` state array in `App.jsx`. The state is synchronised to `localStorage` on every change via `useEffect`. On initial load, a migration function automatically backfills missing `weight` and `categoryId` fields using the `ITEM_WEIGHTS` lookup table.

### Data Flow
```
App.jsx (trips state + localStorage sync)
  ├── Home.jsx             — reads trips[]
  ├── NewTrip.jsx          — calls onAddTrip()
  └── TripDetailPage.jsx   — calls updateTrip() / deleteTrip()
        ├── WeightTracker      — receives items[]
        ├── PackingList        — receives trip + updateTrip
        ├── LastMinuteMode     — receives trip + updateTrip
        └── ReturnChecklist    — receives trip + updateTrip
```

### React Concepts Used
- **useState** — form inputs, toggle states, view modes
- **useEffect** — localStorage persistence, template loading on mount
- **useNavigate and useParams** — programmatic navigation and URL parameter extraction
- **Conditional rendering** — edit forms, delete confirmation, empty states
- **Array methods** — `.map()`, `.filter()`, `.find()` for data transformation
- **Props and callbacks** — parent-to-child data passing, state update functions
- **Derived state** — WeightTracker computes values directly during render without additional useState calls

---

## Design System

| Token | Value | Usage |
|---|---|---|
| --bg | #FDF8E2 | Page background |
| --dark-purple | #504E76 | Primary text and headings |
| --accent-purple | #C4C3E3 | Borders and subtle elements |
| --accent-green | #A3B565 | Success states and progress bars |
| --accent-yellow | #FCDD9D | Warning indicators |
| --accent-orange | #F1642E | Call-to-action buttons and highlights |
| --surface | #ffffff | Card backgrounds |

---

## Team

| Name | Role | Branch |
|---|---|---|
| Ketan | Developer | Ketan_work |

---

## License

This project is built for academic purposes.
