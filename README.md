#  Love 4 You 🕊️

A beautiful, romantic-themed web application built with **React** and **Vite**. This project is a special dedication to love, featuring interactive pages, animations, and a heartwarming UI/UX design.

## 🌟 Features

- **Responsive Design** 📱💻
- **Romantic Theme** with soft gradients and cursive fonts ✨
- **Interactive Valentine Proposal** with playful "Yes" and "No" buttons ❤️
- **Beautiful Image Gallery** showcasing love memories 📸
- **Animated Hover Effects** on buttons and navigation 🎭
- **Smooth Navigation** with React Router 🚀

## 📂 Pages

- **Home** – A warm welcome to the project
- **Gallery** – A collection of memorable images
- **Happy** – A special reaction page when the proposal is accepted
- **Letter** – A heartfelt message page
- **Surprise** – The main Valentine proposal page
- **Default** – A fallback page with general info

## 🛠 Installation & Setup

### 1️⃣ Clone the Repository

```sh
git clone https://github.com/your-username/your-repo.git
cd your-repo
```

### 2️⃣ Install Dependencies

```sh
npm install
```

### 3️⃣ Run the Development Server

```sh
npm run dev
```

### 4️⃣ Build for Production

```sh
npm run build
```

## 🚀 Deployment

### GitHub Pages (For Static Deployment)

1. Install GitHub Pages package:
   ```sh
   npm install gh-pages --save-dev
   ```
2. Update `vite.config.js` with:
   ```js
   export default defineConfig({
     base: "/your-repo-name/",
   });
   ```
3. Add deployment scripts to `package.json`:
   ```json
   "homepage": "https://yourusername.github.io/your-repo-name",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
4. Deploy with:
   ```sh
   npm run deploy
   ```

### Vercel (Easiest Method)

1. Install Vercel CLI:
   ```sh
   npm install -g vercel
   ```
2. Run:
   ```sh
   vercel
   ```
3. Follow the prompts & deploy!

## 🎨 Styling

- **Navbar & Buttons**: Soft colors, hover effects, and animations
- **Images**: Adjusted sizes for responsiveness
- **Typography**: Romantic font choices for a warm feel
- **Background**: Gradient shades of pink and red 💕

## ❤️ Credits

Created with love by Rifat 🕊️🩶  . Inspired by romance and technology! 😊
