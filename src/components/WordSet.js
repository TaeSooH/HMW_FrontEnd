import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import "../styles/WordSet.css"
import Popup from "reactjs-popup";
import axios from 'axios';

const WordSet = (props) => {
  const [modalOpened, setModalOpened] = useState(false);
  async function deleteSet(){
    const response = await axios.put(`http://127.0.0.1:8080/wordSet/deleteWordSet/${props.id}`);
    setModalOpened(false);
    window.location.replace("/memoset");
  }
  return (
    <div className='wordSet_box'>
      <span>{props.name}</span>
      <div onClick={() => {
        setModalOpened(true);
      }}>
        
      </div>
      <Popup open={modalOpened} onClose={()=>{setModalOpened(false)}}>
          <div className='option_list'>
            <Link className='set_modify' state={{set_name: props.name, id: props.id}} to={'/memoset/wordlist'}>세트 수정하기</Link>
            <Link className='start_memorizing' to={'/memoset/wordlist'}>암기 시작하기</Link>
            <button className='set_delete' onClick={deleteSet}>세트 삭제하기</button>
            <button onClick={() => {setModalOpened(false)}}>돌아가기</button>
          </div>
        </Popup>
    </div>
  )
}

export default WordSet