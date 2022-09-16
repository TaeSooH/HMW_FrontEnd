import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { GrAddCircle } from 'react-icons/gr'
import Header from '../components/Header';
import "../styles/wordList.css"
import Word from '../components/Word';
import Popup from 'reactjs-popup';
import axios from 'axios';

const WordList = ({name}) => {
  const location = useLocation();
  const id = location.state?.id;
  const set_name = location.state?.set_name;
  const [modalOpened, setModalOpened] = useState(false);
  const [word, setWord] = useState('');
  const [meaning, setMeaning] = useState('');
  // const [words, setWords] = useState([
  //   {
  //     word: "coffee",
  //     meaning: '커피'
  //   },
  //   {
  //     word: "coffee",
  //     meaning: '커피'
  //   },
  // ]);
  const [words, setWords] = useState([]);
  const resultList = words.map((word, idx) => (<Word word={word.word} mean={word.meaning} id={word.id} idx={idx} />))
  useEffect(() => {
    async function getWords(){
      const response = await axios.get(`http://127.0.0.1:8080/word/getWords/?setId=${id}`);
      setWords(response.data);
    }
    getWords();
  }, []);
  
  

  return (
    <div className='container'>
      <Header username={name} />
      <div className='wordList_container'>
        <div className='wordList_box'>
        
          <div className='wordList_header'>
            <div className='setName'>{set_name}</div>
            <hr></hr>
          </div>
          {words.length > 0 ? <div className='wordList_content'>
            <div className='word_classification'>
              <span>단어</span>
              <span>의미</span>
            </div>
            { resultList }
          </div>
          :
          <div className='noWords'>단어가 아직 없습니다.</div>
          }
          
          <div className='wordList_footer'>
            <hr></hr>
            <GrAddCircle size='120' color='black' className='wordList_addIcon' onClick={() => {setModalOpened(true)}}/>
            <hr></hr>
          </div>
        </div>
        
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
              "word": word,
              "meaning": meaning
            }
            const response = await axios.put(`http://127.0.0.1:8080/word/setWords/${id}`, form);
            setModalOpened(false);
            alert(response.data);
            async function getWords(){
              const response = await axios.get(`http://127.0.0.1:8080/word/getWords/?setId=${id}`);
              setWords(response.data);
            }
            getWords();
          }}  
        >
          <p>암기할 단어 입력</p>
          <div className='popup_bot'>
            <div className='popup_top'>
              <span>단어</span>
              <input onChange={(e) => {setWord(e.target.value)}} type='text' />
            </div>
            <div className='popup_top'>
              <span>의미</span>
              <input onChange={(e) => {setMeaning(e.target.value)}} type='text' />
            </div>
          </div>
          <input className='popup_word_submit' type='submit' value='추가하기'/>
        </form>
      </Popup>      
    </div>
  )
}

export default WordList