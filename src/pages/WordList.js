import React from 'react'
import { useLocation } from 'react-router-dom';
import { GrAddCircle } from 'react-icons/gr'
import Header from '../components/Header';
import "../styles/wordList.css"

const WordList = () => {
  const location = useLocation();
  const id = location.state?.id;
  const name = location.state?.set_name;
  return (
    <div className='container'>
      <Header />
      <div className='wordList_container'>
        <div className='wordList_box'>
          <div className='wordList_header'>
            <div>{name}</div>
            <hr></hr>
          </div>
          <div></div>
          <div className='wordList_footer'>
            <hr></hr>
            <GrAddCircle size='100' color='white' className='wordList_addIcon'/>
            <hr></hr>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default WordList