import React from 'react'
import "../styles/Word.css"

const Word = (props) => {
  return (
    <div className='word_container'>
      <span>{props.idx + 1}</span>
      <div className='word_box'>
        <div>{props.word}</div>
        <div>{props.mean}</div>
      </div>
    </div>
  )
}

export default Word