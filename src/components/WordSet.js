import React, { useState } from 'react'
import "../styles/WordSet.css"

const WordSet = (props) => {
  const [isOnClick, setIsOnClick] = useState(false);
  return (
    <div className='wordSet_box'>
        <span>{props.name}</span>
        <div 
          // onClick={() => {

          // }}
        ></div>
    </div>
  )
}

export default WordSet