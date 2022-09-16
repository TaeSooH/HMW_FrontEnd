import axios from 'axios';
import React, { useState } from 'react'
import Popup from 'reactjs-popup';
import "../styles/Word.css"

const Word = (props) => {
  const [modalOpened, setModalOpened] = useState();
  const [modifiedWord, setModifiedWord] = useState(props.word);
  const [modifiedMeaning, setModifiedMeaning] = useState(props.mean);

  async function deleteWord(){
    const response = await axios.put(`http://127.0.0.1:8080/word/deleteWord/${props.id}`);
    alert(response.data);
  }

  return (
    <div className='word_container'>
      <span>{props.idx + 1}</span>
      <div className='word_box'>
        <div>{props.word}</div>
        <div>{props.mean}</div>
      </div>
      <div className='word_right_side'>
        <span onClick={() => {
          setModalOpened(true);
          setModifiedWord(props.word);
          setModifiedMeaning(props.mean);
          }}>수정</span>
        <span onClick={deleteWord}>삭제</span>
      </div>
      <Popup 
        open={modalOpened} 
        onClose={() => {
          setModalOpened(false)
        }}
      >
        <form 
          className='popup_word_container'
          onSubmit={ async (e) => {
            e.preventDefault();
            const form = {
              "word": modifiedWord,
              "meaning": modifiedMeaning
            }
            const response = await axios.put(`http://127.0.0.1:8080/word/modifyWord/${props.id}`, form);
            setModalOpened(false);
            alert(response.data);
            window.location.replace("/memoset/wordlist");
          }}  
        >
          <p>수정할 단어 입력</p>
          <div className='popup_bot'>
            <div className='popup_top'>
              <span>단어</span>
              <input value={modifiedWord} onChange={(e) => {setModifiedWord(e.target.value)}} type='text' />
            </div>
            <div className='popup_top'>
              <span>의미</span>
              <input value={modifiedMeaning} onChange={(e) => {setModifiedMeaning(e.target.value)}} type='text' />
            </div>
          </div>
          <input className='popup_word_submit' type='submit' value='수정하기'/>
        </form>
      </Popup>
    </div>
  )
}

export default Word