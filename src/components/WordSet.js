import React, { useState } from 'react'
import "../styles/WordSet.css"

const WordSet = (props) => {
  return (
    <div className='wordSet_box'>
        <span>{props.name}</span>
        <div></div>
    </div>
  )
}

export default WordSet