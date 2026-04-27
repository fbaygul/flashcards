import { useState, useEffect, useMemo, useCallback } from 'react'
import allWordsData from './data/words.json'
import Flashcard, { type Word } from './components/Flashcard'
import { motion, AnimatePresence } from 'framer-motion'
import { BookOpen, RefreshCw, Trophy, Filter, Shuffle } from 'lucide-react'
import './index.css'

type FilterCategory = 'all' | 'Fizik' | 'Kimya' | 'Biyoloji' | 'Fen' | 'Genel'
const SESSION_SIZE = 30

function shuffleArray<T>(arr: T[]): T[] {
  const shuffled = [...arr]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

function App() {
  const [category, setCategory] = useState<FilterCategory>('all')
  const [sessionWords, setSessionWords] = useState<Word[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [learnedIds, setLearnedIds] = useState<number[]>([])
  const [reviewIds, setReviewIds] = useState<number[]>([])
  const [showFilters, setShowFilters] = useState(false)

  const filteredPool = useMemo(() => {
    if (category === 'all') return allWordsData as Word[]
    return (allWordsData as Word[]).filter((w) => w.category === category)
  }, [category])

  const startNewSession = useCallback(() => {
    const shuffled = shuffleArray(filteredPool)
    setSessionWords(shuffled.slice(0, SESSION_SIZE))
    setCurrentIndex(0)
  }, [filteredPool])

  // Load from localStorage on mount
  useEffect(() => {
    const savedLearned = localStorage.getItem('yokdil_learned')
    const savedReview = localStorage.getItem('yokdil_review')
    if (savedLearned) setLearnedIds(JSON.parse(savedLearned))
    if (savedReview) setReviewIds(JSON.parse(savedReview))
  }, [])

  // Save to localStorage when changed
  useEffect(() => {
    localStorage.setItem('yokdil_learned', JSON.stringify(learnedIds))
    localStorage.setItem('yokdil_review', JSON.stringify(reviewIds))
  }, [learnedIds, reviewIds])

  // Start new session when category changes or on first load
  useEffect(() => {
    startNewSession()
  }, [startNewSession])

  const handleLearned = (id: number) => {
    if (!learnedIds.includes(id)) {
      setLearnedIds((prev) => [...prev, id])
    }
    setReviewIds((prev) => prev.filter((revId) => revId !== id))
    setCurrentIndex((prev) => prev + 1)
  }

  const handleReview = (id: number) => {
    if (!reviewIds.includes(id)) {
      setReviewIds((prev) => [...prev, id])
    }
    setLearnedIds((prev) => prev.filter((learnId) => learnId !== id))
    setCurrentIndex((prev) => prev + 1)
  }

  const resetProgress = () => {
    setLearnedIds([])
    setReviewIds([])
    startNewSession()
  }

  const progress = sessionWords.length > 0 ? (currentIndex / sessionWords.length) * 100 : 0
  const isFinished = currentIndex >= sessionWords.length
  const totalWords = (allWordsData as Word[]).length

  const categories: FilterCategory[] = ['all', 'Fizik', 'Kimya', 'Biyoloji', 'Fen', 'Genel']
  const categoryLabels: Record<FilterCategory, string> = {
    all: 'Tümü',
    Fizik: '⚡ Fizik',
    Kimya: '🧪 Kimya',
    Biyoloji: '🧬 Biyoloji',
    Fen: '🔬 Fen',
    Genel: '📚 Genel',
  }

  return (
    <div className="min-h-screen relative overflow-hidden flex flex-col font-sans">
      {/* Background decorations */}
      <div className="fixed top-[-20%] left-[-15%] w-[50%] h-[50%] rounded-full bg-brand-600/15 blur-[150px] pointer-events-none" />
      <div className="fixed bottom-[-20%] right-[-15%] w-[50%] h-[50%] rounded-full bg-fuchsia-600/15 blur-[150px] pointer-events-none" />
      <div className="fixed top-[40%] left-[50%] w-[30%] h-[30%] rounded-full bg-cyan-500/10 blur-[120px] pointer-events-none" />

      {/* Header */}
      <header className="w-full max-w-5xl mx-auto px-6 py-5 flex justify-between items-center relative z-20">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-brand-500 to-fuchsia-500 flex items-center justify-center text-white shadow-lg shadow-brand-500/25">
            <BookOpen size={22} />
          </div>
          <div>
            <h1 className="font-extrabold text-xl leading-tight tracking-tight">YÖKDİL</h1>
            <p className="text-xs opacity-50 font-medium">{totalWords} kelime havuzundan {SESSION_SIZE} rastgele kart</p>
          </div>
        </div>

        <div className="flex gap-3 items-center">
          <div className="hidden sm:flex text-sm font-semibold gap-3">
            <span className="text-emerald-500 bg-emerald-500/10 px-3 py-1.5 rounded-lg">{learnedIds.length} ✓</span>
            <span className="text-rose-500 bg-rose-500/10 px-3 py-1.5 rounded-lg">{reviewIds.length} ✗</span>
          </div>
          <button 
            onClick={() => setShowFilters(!showFilters)}
            className="p-2.5 rounded-xl hover:bg-brand-500/10 transition-colors text-brand-400"
            title="Filtrele"
          >
            <Filter size={18} />
          </button>
          <button 
            onClick={startNewSession}
            className="p-2.5 rounded-xl hover:bg-brand-500/10 transition-colors text-brand-400"
            title="Yeni Tur (Rastgele 30 Kelime)"
          >
            <Shuffle size={18} />
          </button>
          <button 
            onClick={resetProgress}
            className="p-2.5 rounded-xl hover:bg-foreground/5 transition-colors opacity-50 hover:opacity-100"
            title="Tüm İlerlemeyi Sıfırla"
          >
            <RefreshCw size={18} />
          </button>
        </div>
      </header>

      {/* Category Filter Bar */}
      <AnimatePresence>
        {showFilters && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden relative z-20"
          >
            <div className="flex gap-2 justify-center px-6 pb-4 flex-wrap">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
                    category === cat
                      ? 'bg-brand-500 text-white shadow-lg shadow-brand-500/25'
                      : 'glass hover:bg-brand-500/10'
                  }`}
                >
                  {categoryLabels[cat]}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center p-6 relative z-10">
        <AnimatePresence mode="wait">
          {!isFinished && sessionWords.length > 0 ? (
            <motion.div
              key="flashcard-container"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="w-full flex flex-col items-center"
            >
              {/* Progress bar */}
              <div className="w-full max-w-md mb-8">
                <div className="flex justify-between text-xs font-semibold opacity-50 mb-2">
                  <span>Kart {currentIndex + 1} / {sessionWords.length}</span>
                  <span>%{Math.round(progress)}</span>
                </div>
                <div className="w-full h-2 bg-foreground/10 rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-gradient-to-r from-brand-500 to-fuchsia-500 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                  />
                </div>
              </div>

              {/* Flashcard */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={sessionWords[currentIndex].id}
                  initial={{ opacity: 0, scale: 0.92, x: 60 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.92, x: -60 }}
                  transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                  className="w-full"
                >
                  <Flashcard 
                    word={sessionWords[currentIndex]} 
                    onLearned={handleLearned}
                    onReview={handleReview}
                  />
                </motion.div>
              </AnimatePresence>
            </motion.div>
          ) : (
            <motion.div
              key="finished-state"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center glass p-10 md:p-14 rounded-3xl max-w-md w-full"
            >
              <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center text-white mb-6 shadow-xl shadow-emerald-500/25">
                <Trophy size={40} />
              </div>
              <h2 className="text-3xl font-extrabold mb-3">Tebrikler! 🎉</h2>
              <p className="opacity-60 mb-8 leading-relaxed">
                Bu oturumdaki <strong>{sessionWords.length}</strong> kelimeyi tamamladınız.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="p-5 rounded-2xl bg-emerald-500/10 border border-emerald-500/20">
                  <div className="text-3xl font-extrabold text-emerald-500 mb-1">{learnedIds.length}</div>
                  <div className="text-sm font-semibold opacity-60">Toplam Öğrenilen</div>
                </div>
                <div className="p-5 rounded-2xl bg-rose-500/10 border border-rose-500/20">
                  <div className="text-3xl font-extrabold text-rose-500 mb-1">{reviewIds.length}</div>
                  <div className="text-sm font-semibold opacity-60">Tekrar Gerekli</div>
                </div>
              </div>

              <button
                onClick={startNewSession}
                className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-brand-500 to-fuchsia-500 text-white font-bold text-lg hover:scale-[1.02] active:scale-[0.98] transition-transform shadow-lg shadow-brand-500/25 flex items-center justify-center gap-2"
              >
                <Shuffle size={20} />
                Yeni Tur (Rastgele {SESSION_SIZE} Kelime)
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="text-center py-4 text-xs opacity-30 font-medium relative z-20">
        YÖKDİL Fen Bilimleri — {totalWords} kelime havuzu
      </footer>
    </div>
  )
}

export default App
