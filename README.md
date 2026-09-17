# 🎬 Movie Explorer

A responsive Movie Explorer web application built with **React** and the **TVMaze API**. Users can browse shows, search for specific titles, and view detailed information through an interactive modal.

## 🚀 Live Demo

🔗 **Live Site:** [Add your live deployment link here]

## 📂 Repository

🔗 **GitHub:** [Add your GitHub repository link here]

---

## ✨ Features

* 🎬 Browse movies and TV shows
* 🔍 Search shows by title
* 📱 Fully responsive design
* ⭐ Display ratings
* 📅 Display release/premiered year
* 🖼️ Movie/show posters with fallback images
* 📖 View detailed information in an interactive modal
* 🎭 Display genres, language, status, and runtime
* ⏳ Loading state
* ⚠️ Error handling with retry option
* 🚫 Empty search result handling
* 🧭 React Router navigation
* 🌙 Modern cinematic UI
* ♿ Basic accessibility support

---

## 🛠️ Technologies Used

* **React**
* **JavaScript**
* **React Router DOM**
* **CSS / Tailwind CSS**
* **TVMaze API**
* **Fetch API**
* **Vite**

---

## 🌐 API

This project uses the free **TVMaze API** to retrieve TV show information.

### Get All Shows

```text
https://api.tvmaze.com/shows
```

### Search Shows

```text
https://api.tvmaze.com/search/shows?q={query}
```

API Documentation:

https://www.tvmaze.com/api

---

## 📁 Project Structure

```text
movie-explorer/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── MovieCard.jsx
│   │   ├── MovieGrid.jsx
│   │   ├── MovieModal.jsx
│   │   ├── SearchBar.jsx
│   │   ├── Loading.jsx
│   │   └── ErrorMessage.jsx
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   └── Movies.jsx
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── index.html
├── package.json
└── README.md
```

---

## ⚙️ Installation & Setup

### 1. Clone the repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### 2. Navigate to the project

```bash
cd movie-explorer
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

The application will be available at the local development URL provided by Vite.

---

## 🎯 Application Pages

### 🏠 Home Page

The home page contains:

* Responsive navbar
* MovieExplorer branding
* Hero section
* Movie-related background
* Application introduction
* Explore Movies CTA
* Footer

### 🎞️ Movies Page

The movie listing page provides:

* Search functionality
* Dynamic movie/show results
* Responsive card grid
* Ratings
* Release year
* Movie/show posters
* See Details button

### 📋 Details Modal

Clicking **See Details** opens a modal containing:

* Large poster
* Title
* Rating
* Release date/year
* Overview
* Genres
* Language
* Status
* Runtime

---

## 📱 Responsive Design

The application is designed to work across:

* 📱 Mobile devices
* 📲 Tablets
* 💻 Laptops
* 🖥️ Desktop screens

The movie grid automatically adapts to different screen sizes.

---

## 🔄 User Flow

```text
Home
  ↓
Explore Movies
  ↓
Movies Page
  ↓
Browse Shows
  ↓
Search by Title
  ↓
Select a Show
  ↓
View Details Modal
```

---

## 🧠 What I Learned

Through this project, I practiced:

* React component-based architecture
* React Hooks
* API integration
* Fetching and displaying dynamic data
* Search functionality
* React Router
* State management
* Modal implementation
* Responsive CSS Grid
* Loading and error states
* Reusable components
* Working with external APIs

---

## 📸 Screenshots

### Home Page

![Home Page](./screenshots/home.png)

### Movies Page

![Movies Page](./screenshots/movies.png)

### Details Modal

![Details Modal](./screenshots/details-modal.png)

> Add your actual screenshots inside a `screenshots` folder.

---

## 👨‍💻 Author

**MD. Moajjem Hossain**

CSE Student | Software Engineering

* GitHub: [Movie Explorer Repository](https://github.com/moajjem441/Movie_Explorer)

*

---

