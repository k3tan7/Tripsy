# Tripsy

**A smart packing list application for organized, stress-free travel.**

---

## Overview

Tripsy helps travelers build and manage packing lists with minimal effort. Provide your destination, trip duration, and planned activities — Tripsy generates a structured, categorized checklist so nothing gets left behind.

All data is persisted locally in your browser, ensuring your lists are available whenever you return.

---

## Features

### Smart Categories
Items are automatically organized into logical categories — clothing, toiletries, electronics, documents, and more — keeping your checklist easy to scan and navigate.

### Trip Templates
Save any packing setup as a reusable template. Load it for future trips of the same type and make adjustments as needed, eliminating repetitive list-building from scratch.

### Bag Weight Tracker
Assign estimated weights to individual items and monitor your total bag weight in real time — ideal for staying within airline baggage limits before you reach the airport.

### Last-Minute Mode
A focused view that surfaces only your unchecked essential items. Designed for the final moments before departure when time is limited and clarity matters most.

### Automatic Persistence
All lists and templates are saved automatically via `localStorage`. Your data is retained between sessions without requiring an account or internet connection.

---

## Getting Started

### Prerequisites
- Node.js (v14 or later recommended)
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/tripsy.git

# Navigate into the project directory
cd tripsy

# Install dependencies
npm install

# Start the development server
npm start
```

Once running, open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Tech Stack

| Layer | Technology |
|---|---|
| UI Framework | React |
| State Management | React Context / `useState` |
| Persistence | `localStorage` |
| Styling | Tailwind CSS |

---

## Roadmap

### Completed
- [x] Categorized packing lists
- [x] Trip templates
- [x] Bag weight tracker
- [x] Last-Minute Mode
- [x] Automatic `localStorage` persistence

### Planned
- [ ] Activity-based packing suggestions
- [ ] User accounts and backend support
- [ ] Cloud sync across devices
- [ ] Collaborative packing for group travel

---

## Contributing

Contributions are welcome. To propose a change, please open an issue first to discuss your idea before submitting a pull request.

```bash
# Create a feature branch
git checkout -b feature/your-feature-name

# Commit your changes
git commit -m "feat: describe your change"

# Push to your fork
git push origin feature/your-feature-name
```

Once pushed, open a pull request against the `main` branch with a clear description of what was changed and why.

---

## License

[MIT](LICENSE) © Tripsy
