<![CDATA[<div align="center">

# 📚 YÖKDİL Science Flashcards

**A modern, interactive flashcard application for YÖKDİL Science exam vocabulary preparation.**

Built with React + TypeScript + Vite + Tailwind CSS + Framer Motion

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?logo=typescript&logoColor=white)](https://typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)](https://vite.dev)

</div>

---

## ✨ Features

- **509+ Curated Words** — Sourced from past YÖKDİL Science exams and academic word lists
- **Randomized Sessions** — Each session presents 30 randomly selected words from the pool
- **3D Flip Animation** — Smooth, spring-based card flip powered by Framer Motion
- **Category Filtering** — Filter by Physics (Fizik), Chemistry (Kimya), Biology (Biyoloji), Science (Fen), or General (Genel)
- **Difficulty Levels** — Words are tagged as Easy, Medium, or Hard
- **Progress Tracking** — Mark words as "Learned" or "Needs Review" with persistent localStorage
- **Glassmorphism UI** — Premium frosted-glass design with gradient backgrounds
- **Dark/Light Mode** — Automatic system preference detection
- **Responsive Design** — Works seamlessly on desktop, tablet, and mobile
- **Example Sentences** — Every word includes a contextual academic sentence

## 🖼️ Screenshots

| Front (English) | Back (Turkish) |
|:---:|:---:|
| ![front](https://via.placeholder.com/400x300/8b5cf6/ffffff?text=Accelerate) | ![back](https://via.placeholder.com/400x300/d946ef/ffffff?text=Hızlandırmak) |

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v20 or later recommended)
- npm (comes with Node.js)

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/yokdil-flashcards.git
cd yokdil-flashcards

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
| **React 19** | Component-based UI framework |
| **TypeScript** | Type safety and developer experience |
| **Vite 8** | Lightning-fast build tool and dev server |
| **Tailwind CSS 4** | Utility-first CSS framework |
| **Framer Motion** | Declarative animations (card flip, transitions) |
| **Lucide React** | Beautiful, consistent icon set |

## 📁 Project Structure

```
src/
├── components/
│   └── Flashcard.tsx       # Interactive flip card component
├── data/
│   └── words.json          # 509+ word database
├── App.tsx                 # Main application with session logic
├── index.css               # Global styles, theme, glassmorphism utilities
└── main.tsx                # React entry point
```

## 📖 How It Works

1. **Session Start** — On load, 30 words are randomly picked from the 509-word pool
2. **Study** — Click a card to flip and reveal the Turkish translation + example sentence
3. **Self-Assess** — Tap **"Öğrendim"** (Learned) or **"Tekrar Et"** (Review) to categorize
4. **Track Progress** — Your learned/review counts persist across browser sessions via localStorage
5. **New Round** — Hit the shuffle button (🔀) to get a fresh set of 30 random words
6. **Filter** — Use the filter button (🔽) to focus on a specific category

## 📊 Word Database

The database contains **509 carefully curated words** across 5 categories:

| Category | Description | Example Words |
|---|---|---|
| ⚡ Fizik | Physics terms | Velocity, Wavelength, Inertia |
| 🧪 Kimya | Chemistry terms | Catalyst, Compound, Isotope |
| 🧬 Biyoloji | Biology terms | Photosynthesis, Enzyme, Genome |
| 🔬 Fen | General science | Hypothesis, Radiation, Erosion |
| 📚 Genel | Academic vocabulary | Assess, Enhance, Mitigate |

Each word entry includes:
- English word
- Turkish translation
- Category tag
- Difficulty level (1–3)
- Academic example sentence

## 🎨 Design Philosophy

The UI is built with a **premium, modern aesthetic**:

- **Glassmorphism** — Frosted glass cards with subtle borders
- **Gradient Backgrounds** — Multi-color ambient blobs for depth
- **Spring Animations** — Physics-based card flip and slide transitions
- **Inter Font** — Clean, professional typography from Google Fonts
- **Micro-interactions** — Hover effects, active states, and smooth transitions

## 🤝 Contributing

Contributions are welcome! To add more words:

1. Edit `src/data/words.json`
2. Follow the existing format:
```json
{
  "id": 510,
  "word_en": "Synthesize",
  "word_tr": "Sentezlemek",
  "category": "Kimya",
  "difficulty": 2,
  "example_sentence": "Chemists synthesize new compounds in the laboratory."
}
```
3. Submit a pull request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">

Made with ❤️ for YÖKDİL exam preparation

**Good luck on your exam! 🍀**

</div>
]]>
