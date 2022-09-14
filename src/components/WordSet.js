import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import "../styles/WordSet.css"
import Popup from "reactjs-popup";
import axios from 'axios';

const WordSet = (props) => {
  const [modalOpened, setModalOpened] = useState(false);
  const [set_nameModal, setSet_nameModal] = useState(false);
  const [modifiedSetName, setModifiedSetName] = useState(props.name);
  async function deleteSet(){
    const check = window.confirm("정말로 삭제하시겠습니까?")
    if(check){
      const response = await axios.put(`http://127.0.0.1:8080/wordSet/deleteWordSet/${props.id}`);
      setModalOpened(false);
      window.location.replace("/memoset");
    }
  }
  async function modifySetName(e){
    e.preventDefault();
    const response = await axios.put(`http://127.0.0.1:8080/wordSet/modifyWordSet/${props.id}`, {title: modifiedSetName});
    setSet_nameModal(false);
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
            <button onClick={() => {
                setSet_nameModal(true);
                setModalOpened(false);
            }} className='moBt'>세트이름 변경</button>
            <button onClick={() => {setModalOpened(false)}}>돌아가기</button>
          </div>
        </Popup>
        <Popup
      open={set_nameModal} 
      onClose={() => {
        setSet_nameModal(false);
        setModifiedSetName(props.name);
      }}>
        <form className='popup_word_container' onSubmit={modifySetName}>
          <div className='popup_top'>
            <span>세트 이름</span>
            <input className='setInput' type="text" value={modifiedSetName} onChange={(e) => {
            setModifiedSetName(e.target.value);
            }} />
          </div>
          < input className='popup_word_submit' type='submit' value='변경하기'/>
        </form>
      </Popup>
    </div>
  )
}

export default WordSet