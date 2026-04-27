import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Check, X } from 'lucide-react'

export interface Word {
  id: number
  word_en: string
  word_tr: string
  category: string
  difficulty: number
  example_sentence: string
}

interface FlashcardProps {
  word: Word
  onLearned: (id: number) => void
  onReview: (id: number) => void
}

const difficultyLabel = (d: number) => {
  if (d === 1) return { text: 'Kolay', color: 'text-emerald-400 bg-emerald-500/10' }
  if (d === 2) return { text: 'Orta', color: 'text-amber-400 bg-amber-500/10' }
  return { text: 'Zor', color: 'text-rose-400 bg-rose-500/10' }
}

export default function Flashcard({ word, onLearned, onReview }: FlashcardProps) {
  const [isFlipped, setIsFlipped] = useState(false)

  // Reset flip state when word changes
  useEffect(() => {
    setIsFlipped(false)
  }, [word.id])

  const handleFlip = () => {
    setIsFlipped(!isFlipped)
  }

  const diff = difficultyLabel(word.difficulty)

  return (
    <div className="w-full max-w-md mx-auto perspective-1000 h-[420px] relative z-10 group">
      <motion.div
        className="w-full h-full relative preserve-3d cursor-pointer"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: 'spring', stiffness: 260, damping: 20 }}
        onClick={handleFlip}
      >
        {/* Front side */}
        <div className="absolute w-full h-full backface-hidden flex flex-col items-center justify-center rounded-3xl glass p-8">
          <div className="absolute top-6 left-6 flex gap-2">
            <span className="text-xs font-semibold tracking-wider text-brand-400 uppercase bg-brand-500/10 px-3 py-1 rounded-full">
              {word.category}
            </span>
            <span className={`text-xs font-semibold tracking-wider uppercase px-3 py-1 rounded-full ${diff.color}`}>
              {diff.text}
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-center text-foreground group-hover:scale-105 transition-transform duration-300">
            {word.word_en}
          </h2>
          
          <div className="flex items-center gap-2 mt-6 opacity-40">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
            </svg>
            <p className="text-sm text-center">Çevirisini görmek için tıkla</p>
          </div>
        </div>

        {/* Back side */}
        <div className="absolute w-full h-full backface-hidden flex flex-col items-center justify-center rounded-3xl glass p-8" style={{ transform: 'rotateY(180deg)' }}>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-center text-gradient pb-2">
            {word.word_tr}
          </h2>
          
          <div className="mt-4 text-center w-full bg-brand-500/5 border border-brand-500/10 p-5 rounded-2xl">
            <p className="text-sm italic opacity-80 leading-relaxed">
              "{word.example_sentence}"
            </p>
          </div>

          {/* Action buttons */}
          <div className="absolute bottom-6 flex gap-4 w-full justify-center px-8" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => onReview(word.id)}
              className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-2xl bg-rose-500/10 text-rose-500 hover:bg-rose-500 hover:text-white transition-all duration-200 active:scale-95 font-semibold border border-rose-500/20 hover:border-rose-500"
            >
              <X size={18} />
              Tekrar Et
            </button>
            <button
              onClick={() => onLearned(word.id)}
              className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-2xl bg-emerald-500/10 text-emerald-500 hover:bg-emerald-500 hover:text-white transition-all duration-200 active:scale-95 font-semibold border border-emerald-500/20 hover:border-emerald-500"
            >
              <Check size={18} />
              Öğrendim
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
