import React, { useEffect, useState } from 'react'
import useWordle from '../hooks/useWordle';
import WordleGrid from  './WordleGrid'
import WordleKeypad from './WordleKeypad';
import WordleModal from './WordleModal';

export default function WordleInterface({ solution }) {
  const { turn, currentGuess, guesses, isCorrect, usedKeys, handleKeyup } = useWordle(solution)
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    window.addEventListener('keyup', handleKeyup)

    if (isCorrect) {
      setTimeout(() => setShowModal(true), 1500)
      window.removeEventListener('keyup', handleKeyup)
    }
    
    if (turn > 5) {
      setTimeout(() => setShowModal(true), 1500)
      window.removeEventListener('keyup', handleKeyup)
    }

    return () => window.removeEventListener('keyup', handleKeyup)
  }, [handleKeyup, isCorrect, turn])

  return (
    <div>
      <WordleGrid currentGuess={currentGuess} guesses={guesses} turn={turn}/>
      <WordleKeypad usedKeys={usedKeys}/>
      {showModal && <WordleModal isCorrect={isCorrect} turn={turn} solution={solution}/>}
    </div>
  )
}

