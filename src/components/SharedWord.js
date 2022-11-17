import axios from 'axios';
import React, { useState } from 'react'
import Popup from 'reactjs-popup';
import "../styles/Word.css"

const SharedWord = (props) => {
  return (
    <div className='word_container'>
      <span>{props.idx + 1}</span>
      <div className='word_box'>
        <div>{props.word}</div>
        <div>{props.mean}</div>
      </div>
      <div className='word_right_side'>
      </div>
    </div>
  )
}

export default SharedWord;