import React from 'react'
import WordleRow from './WordleRow'

export default function WordleGrid({ currentGuess, guesses, turn }) {
  return (
    <div> 
        {guesses.map((g, i) => {
            return <WordleRow key={i} />
        })}
    </div>
  )
}
