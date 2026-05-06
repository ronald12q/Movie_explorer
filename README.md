# 🎬 Movie Explorer

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Zustand](https://img.shields.io/badge/Zustand-764ABC?style=for-the-badge&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)

A modern, fast, and responsive movie search and favorite management application. Built with **React** and **TypeScript**, it seamlessly consumes the [TVMaze API](https://www.tvmaze.com/api) to provide a smooth user experience.

---

## 🌐 Live Demo

You can test and view the deployed application here:

🚀 **[Link to Live Demo (Replace this with your actual URL later)](#)** 🚀

---

## ✨ Key Features

*   **🔍 Real-time Search:** Implements *debounce* logic to optimize API requests, reducing server load and improving typing performance.
*   **⭐ Persistent Favorites:** Global state management powered by **Zustand** with `LocalStorage` persistence, ensuring your favorite movies are saved across browser sessions.
*   **🧭 Fluid Navigation:** Dynamic routing and modal-based details elegantly managed by **React Router**.
*   **🎨 Quality UX/UI:** Beautiful, responsive design crafted with **Tailwind CSS**. It includes skeleton loaders for better user feedback during data fetching.

## 🛠️ Tech Stack

*   **Core:** React 19, TypeScript, Vite
*   **Styling & UI:** Tailwind CSS v4, React Icons
*   **State Management:** Zustand
*   **Routing:** React Router DOM v7
*   **API / Data:** TVMaze API

## 🚀 Getting Started

Follow these instructions to set up and run the project locally on your machine.

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/movie-explorer.git
    cd movie-explorer
    ```

2.  **Install the dependencies:**
    ```bash
    npm install
    ```

3.  **Start the development server:**
    ```bash
    npm run dev
    ```

4.  **Open in your browser:**
    Navigate to `http://localhost:5173` to see the application in action.

---

## 🏗️ Build for Production

To create an optimized, production-ready build, run:
```bash
npm run build
```
This command will compile the TypeScript code and bundle the application into the `dist/` folder. You can preview the production build locally with `npm run preview`.

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page if you want to contribute.

---
*Made with ❤️ and Code*