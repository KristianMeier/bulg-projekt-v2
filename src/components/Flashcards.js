import React from 'react'
import Header from './Header'
import Flashcard from './Flashcard'
const Flashcards = ({ flashcards, english, removeFlashcard }) => {
  return (
    <section>
      <Header />
      <div>
        {flashcards.map((flashcard) => {
          return (
            <Flashcard
              key={flashcard.id}
              {...flashcard}
              removeFlashcard={removeFlashcard}
              english={english}
            />
          )
        })}
      </div>
    </section>
  )
}

export default Flashcards
