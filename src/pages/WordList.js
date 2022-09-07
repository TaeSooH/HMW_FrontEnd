import React from 'react'
import { useLocation } from 'react-router-dom';
import { GrAddCircle } from 'react-icons/gr'
import Header from '../components/Header';
import "../styles/wordList.css"
import Word from '../components/Word';

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
          <div className='wordList_content'>
            <div className='word_classification'>
              <span>단어</span>
              <span>의미</span>
            </div>
            <Word />
          </div>
          <div className='wordList_footer'>
            <hr></hr>
            <GrAddCircle size='120' color='white' className='wordList_addIcon'/>
            <hr></hr>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default WordList