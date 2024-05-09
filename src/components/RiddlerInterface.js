import React, { useEffect } from 'react'
import useRiddler from '../hooks/useRiddler';

export default function RiddlerInterface({ solution }) {
  const { currentGuess, handleKeyup } = useRiddler(solution)
  
  useEffect(() => {
    window.addEventListener('keyup', handleKeyup)

    return () => window.removeEventListener('keyup', handleKeyup)
  }, [handleKeyup])

  return (
    <div>current guess - {currentGuess}</div>
  )
}

