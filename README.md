<div align="center">

# 📚 YÖKDİL Science Flashcards

**A modern, interactive flashcard application for YÖKDİL Science exam vocabulary preparation.**

Built with React + TypeScript + Vite + Tailwind CSS + Framer Motion

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?logo=typescript&logoColor=white)](https://typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)](https://vite.dev)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

[Live Demo](#-getting-started) · [Report Bug](https://github.com/fbaygul/flashcards/issues) · [Request Feature](https://github.com/fbaygul/flashcards/issues)

</div>

---

## 🎯 About

YÖKDİL (Yükseköğretim Kurumları Yabancı Dil Sınavı) is a foreign language proficiency exam required by Turkish universities for academic career progression. This app helps candidates prepare for the **Science (Fen Bilimleri)** section by studying the most frequently tested vocabulary through interactive flashcards.

## ✨ Features

- 🗃️ **509+ Curated Words** — Sourced from past YÖKDİL Science exams and academic word lists
- 🔀 **Randomized Sessions** — Each session presents 30 randomly selected words from the pool
- 🃏 **3D Flip Animation** — Smooth, spring-based card flip powered by Framer Motion
- 🏷️ **Category Filtering** — Filter by Physics, Chemistry, Biology, Science, or General
- 📊 **Difficulty Levels** — Words tagged as Easy, Medium, or Hard
- 💾 **Progress Tracking** — Persistent localStorage for learned/review status
- 🪟 **Glassmorphism UI** — Premium frosted-glass design with gradient backgrounds
- 🌙 **Dark/Light Mode** — Automatic system preference detection
- 📱 **Responsive Design** — Works on desktop, tablet, and mobile
- 📝 **Example Sentences** — Every word includes a contextual academic sentence

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v20 or later
- npm (comes with Node.js)

### Installation

```bash
# Clone the repository
git clone https://github.com/fbaygul/flashcards.git
cd flashcards

# Install dependencies
npm install

# Start the development server
npm run dev
```

The app will be available at `http://localhost:5173/`

### Build for Production

```bash
npm run build
npm run preview
```

## 🏗️ Tech Stack

| Technology | Purpose |
|---|---|
| [React 19](https://react.dev) | Component-based UI framework |
| [TypeScript 5.8](https://typescriptlang.org) | Type safety and developer experience |
| [Vite 8](https://vite.dev) | Lightning-fast build tool and dev server |
| [Tailwind CSS 4](https://tailwindcss.com) | Utility-first CSS framework |
| [Framer Motion](https://motion.dev) | Declarative animations (card flip, transitions) |
| [Lucide React](https://lucide.dev) | Beautiful, consistent icon set |

## 📁 Project Structure

```
flashcards/
├── public/                  # Static assets
├── scripts/                 # Word generation scripts
├── src/
│   ├── components/
│   │   └── Flashcard.tsx    # Interactive flip card component
│   ├── data/
│   │   └── words.json       # 509+ word database
│   ├── App.tsx              # Main app with session & filter logic
│   ├── index.css            # Theme, glassmorphism, 3D utilities
│   └── main.tsx             # React entry point
├── index.html               # HTML template with SEO meta tags
├── vite.config.ts           # Vite + Tailwind plugin config
├── tsconfig.json            # TypeScript configuration
└── package.json
```

## 📖 How It Works

1. **Session Start** → 30 words are randomly picked from the 509-word pool
2. **Study** → Click a card to flip and reveal the Turkish translation + example sentence
3. **Self-Assess** → Tap **"Öğrendim"** (Learned) or **"Tekrar Et"** (Review)
4. **Track Progress** → Learned/review counts persist across sessions via localStorage
5. **New Round** → Hit the shuffle button (🔀) to get a fresh set of 30 words
6. **Filter** → Focus on a specific category (Physics, Chemistry, Biology, etc.)

## 📊 Word Database

The database contains **509 carefully curated words** across 5 categories:

| Category | Count | Example Words |
|---|---|---|
| ⚡ Fizik (Physics) | ~80 | Velocity, Wavelength, Inertia, Friction |
| 🧪 Kimya (Chemistry) | ~70 | Catalyst, Compound, Isotope, Solvent |
| 🧬 Biyoloji (Biology) | ~90 | Photosynthesis, Enzyme, Genome, Membrane |
| 🔬 Fen (Science) | ~100 | Hypothesis, Radiation, Erosion, Sediment |
| 📚 Genel (General) | ~170 | Assess, Enhance, Mitigate, Subsequent |

Each word entry includes:

```json
{
  "id": 1,
  "word_en": "Accelerate",
  "word_tr": "Hızlandırmak",
  "category": "Fizik",
  "difficulty": 1,
  "example_sentence": "Catalysts accelerate the chemical reaction."
}
```

## 🎨 Design

- **Glassmorphism** — Frosted glass cards with subtle borders and backdrop blur
- **Gradient Backgrounds** — Multi-color ambient blobs for depth and atmosphere
- **Spring Animations** — Physics-based card flip and slide transitions
- **Inter Font** — Clean, professional typography via Google Fonts
- **Micro-interactions** — Hover effects, active states, and smooth transitions

## 🤝 Contributing

Contributions are welcome! Here's how:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-words`)
3. Add words to `src/data/words.json` following the existing format
4. Commit your changes (`git commit -m 'Add 50 new biology words'`)
5. Push to the branch (`git push origin feature/new-words`)
6. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">

Made with ❤️ for YÖKDİL exam preparation

**Good luck on your exam! 🍀**

⭐ Star this repo if you find it helpful!

</div>
