# 📸 Pixisphere – Photographer Directory App

Pixisphere is a photographer directory and booking platform built using **Next.js**, **Tailwind CSS**, and **JSON Server** (for mock API). It allows users to discover photographers by city, style, price, and other filters.

---

## 🔧 Tech Stack

- **Framework:** Next.js (Routing, SSR, SEO)
- **Styling:** Tailwind CSS
- **State Management:** React Context API
- **Mock API:** JSON Server (runs on port `3001`)
- **HTTP Client:** Axios

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/sonusahani-dev/Pixels.git
cd pixisphere-assignment
2. Install dependencies
bash
Copy
Edit
npm install
3. Set up Tailwind CSS
Tailwind is already configured. You can find the setup in:

tailwind.config.js

postcss.config.js

src/styles/globals.css

4. Start the mock server
bash
Copy
Edit
npm run mock-server
Runs the JSON server with db.json on http://localhost:3001.

5. Run the development server
bash
Copy
Edit
npm run dev
Open http://localhost:3000 to see the app.

🧩 Features
✅ Category-based routing (e.g., /category/maternity?city=Delhi)

✅ Filters: city, price range, rating, style, sorting

✅ Search with debounce

✅ Photographer detail page with bio, gallery, reviews

✅ Inquiry form in modal

✅ Context API-based global state management

✅ Smart Suggestion strip

✅ Skeleton loaders for better UX

✅ Responsive design with Tailwind

📁 Folder Structure
python
Copy
Edit
pixisphere/
├── public/
│   └── images/              # Static images
├── src/
│   ├── components/
│   │   ├── common/          # Header, SearchBar, PhotographerCard, etc.
│   │   ├── listing/         # PhotographerGrid, SmartSuggestion
│   │   └── profile/         # ProfileHeader, Gallery, InquiryModal, etc.
│   ├── context/             # PhotographerContext (global state)
│   ├── hooks/               # Custom hooks like useDebounce, useFilters
│   ├── pages/
│   │   ├── index.jsx        # Home / Category Listing Page
│   │   └── photographer/
│   │       └── [id].jsx     # Photographer Profile Page
│   ├── services/            # API calls (axios)
│   └── styles/              # Global Tailwind styles
├── db.json                  # Mock data for JSON Server
├── package.json
└── next.config.js
📌 Important Scripts
json
Copy
Edit
"scripts": {
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "mock-server": "json-server --watch db.json --port 3001"
}
📝 Future Improvements
🔄 Infinite scroll or pagination

🔐 Authentication for admin panel

📦 Backend integration (Node.js/Express or Firebase)

🌍 i18n or multi-language support

🧠 Replace Context with Zustand or Redux for large scale

📸 Screenshots
Coming soon...

🧑‍💻 Author
Sonu Sahani
MERN Stack Developer | Passionate about clean UI/UX and full-stack apps

⭐️ Show Your Support
If you find this project helpful:

Give it a ⭐️ on GitHub

Share it with other developers

