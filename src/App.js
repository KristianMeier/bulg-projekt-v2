import React, { useState } from 'react'
import { englishData, flashcardsData } from './assets/data'
import Header from './components/Header'
import Flashcards from './components/Flashcards'

function App() {
  const [english, setEnglish] = useState(true)
  const [flashcards, setFlashcards] = useState(flashcardsData)

  const removeFlashcard = (id) => {
    const newFlashcards = flashcards.filter((flashcard) => flashcard.id !== id)
    setFlashcards(newFlashcards)
  }

  if (flashcards.length === 0) {
    return (
      <main>
        <div className='title'>
          <Header />
          <button
            className='btn'
            onClick={() => {
              english
                ? setFlashcards(englishData)
                : setFlashcards(flashcardsData)
            }}
          >
            Try again
          </button>
        </div>
      </main>
    )
  }
  return (
    <main>
      <p className='translate' style={{ textAlign: 'right' }}>
        <button
          style={{
            fontWeight: 'bolder',
          }}
          onClick={() => {
            setEnglish(!english)
            english ? setFlashcards(englishData) : setFlashcards(flashcardsData)
          }}
        >
          Training/English
        </button>
      </p>
      <Flashcards
        english={english}
        flashcards={flashcards}
        removeFlashcard={removeFlashcard}
      />
    </main>
  )
}

export default App
