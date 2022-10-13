import React from 'react'
import "../styles/SharedSet.css"

const SharedSet = ({id, title, word_length, owner}) => {
  return (
    <div className='ShareSet_container'>
      <div className='set_box1'>
        <div className='main_box1'>
          <p>{title}</p>
          <span>{word_length}</span>
        </div>
        <div className='bottom_box'></div>
      </div>
      <div className='right_set_box'>
        <p>세트이름 : {title}</p>
        <span>유저이름 : {owner}</span>
      </div>
    </div>
  )
}

export default SharedSet