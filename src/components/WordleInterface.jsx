import React, { useEffect } from 'react'
import useWordle from '../hooks/useWordle';
import WordleGrid from  './WordleGrid'

export default function WordleInterface({ solution }) {
  const { turn, currentGuess, guesses, isCorrect, handleKeyup } = useWordle(solution)
  
  useEffect(() => {
    window.addEventListener('keyup', handleKeyup)

    return () => window.removeEventListener('keyup', handleKeyup)
  }, [handleKeyup])

  useEffect(() => {
    console.log(guesses, turn, isCorrect)
  }, [guesses, turn, isCorrect])

  return (
    <div>
      <div>solution - {solution}</div>
      <div>current guess - {currentGuess}</div>
      <WordleGrid currentGuess={currentGuess} guesses={guesses} turn={turn}/>
    </div>
  )
}

