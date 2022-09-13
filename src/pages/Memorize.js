import React, { useState } from 'react'
import "../styles/Memorize.css"
import { MdOutlineNavigateNext } from "react-icons/md"

const Memorize = () => {
    const [isClick, setIsClick] = useState(false);
  return (
    <div className='memorize_container'>
        <span>학교단어</span>
        <div className='content_box'>
            <p>coffee</p>
            <div
                className={
                    isClick ? "content_box_onClick" : "nonClick"
                }
            ></div>
            <span>커피</span>   
        </div>
        <div onClick={()=> {
            setIsClick(true)
        }} className='space_button'>space</div>
        <MdOutlineNavigateNext onClick={() => {setIsClick(false)}} className='next_word_button' color='white' size='70' />
    </div>
  )
}

export default Memorize