import React, { useState } from 'react'
import { englishData, flashcardsData } from './assets/data'
import Header from './components/Header'
import Flashcards from './components/Flashcards'

function App() {
  const [english, setEnglish] = useState(false)
  const [flashcards, setFlashcards] = useState(flashcardsData)
  // const [myId, setMyId] = useState('') - dette skulle også bruges til kun at skifte engelsk sprog og ikke lave to nye.

  const removeFlashcard = (id, english) => {
    const newFlashcards = flashcards.filter((flashcard) => flashcard.id !== id)
    // setEnglish(!english) //Random hack. Hvorfor virker det med omvendt tegn.
    setFlashcards(newFlashcards)
    // setMyId(id) - Dette skulle bruges til funtionen, altså et ultra hack for at arbejde videre på en opdateret state.
  }

  // hvorfor virker nedentående hack ikke. Det ønskes, når der er et card, at oversætte det til engelsk.
  // const changeButKeep = (myId, english) => {
  //   const newFlashcards = flashcards.filter(
  //     (flashcard) => flashcard.id !== myId
  //   )
  //   setEnglish(!english)
  //   setFlashcards(newFlashcards)
  // }

  // Det ville være cool hvis jeg ikke skulle lave mit engelske array hacky med 2 ens entries.
  const data = english ? flashcardsData : englishData

  if (flashcards.length === 0) {
    return (
      <main>
        <div className='title'>
          <Header />
          <button
            className='btn'
            onClick={() => {
              setEnglish(!english) //hvor virker først tryk ikke, hvis der ikke er et udråbstegn
              setFlashcards(data)
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
      <p className='english'>
        <button
          className='text-button english-btn'
          onClick={() => {
            // changeButKeep(myId, english) - Det her skrald virker ikke.
            setEnglish(!english)
            setFlashcards(data) // Det kunne være fedt, hvis jeg kunne bruge den nuværende state, istedet for originalt array.
          }}
        >
          {english ? 'Back to Training' : 'Only English'}
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
