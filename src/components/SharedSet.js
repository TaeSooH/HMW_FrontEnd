import React from 'react'
import "../styles/SharedSet.css"

const SharedSet = () => {
  return (
    <div className='ShareSet_container'>
      <div className='set_box1'>
        <div className='main_box1'>
          <p>세트 이름</p>
          <span>단어 개수</span>
        </div>
        <div className='bottom_box'></div>
      </div>
      <div className='right_set_box'>
        <p>세트이름 : ㅁㅁㅁ</p>
        <span>유저이름 : ㄹㄹㄹ</span>
      </div>
    </div>
  )
}

export default SharedSet