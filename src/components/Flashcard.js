import React, { useState } from 'react'

const Flashcard = ({
  id,
  image,
  name,
  bulPrice,
  bulTitle,
  denTitle,
  bulText,
  denText,
  removeFlashcard,
  denPrice,
}) => {
  const [translate, setTranslate] = useState(true)
  return (
    <article className='single-flashcard'>
      <img src={image} alt={name} />
      <footer>
        <div className='flashcard-info'>
          <h4> {translate ? bulTitle : denTitle}</h4>
          <h4 className='flashcard-price'>{translate ? bulPrice : denPrice}</h4>
        </div>
        <p>
          {translate ? bulText : denText}
          <button
            style={{
              fontWeight: 'bolder',
            }}
            onClick={() => {
              setTranslate(!translate)
            }}
          >
            Translate
          </button>
        </p>
        <button className='delete-btn' onClick={() => removeFlashcard(id)}>
          Done
        </button>
      </footer>
    </article>
  )
}

export default Flashcard
