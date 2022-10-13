import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import "../styles/WordSet.css"
import Popup from "reactjs-popup";
import axios from 'axios';

const WordSet = (props) => {
  const [modalOpened, setModalOpened] = useState(false);
  const [set_nameModal, setSet_nameModal] = useState(false);
  const [modifiedSetName, setModifiedSetName] = useState(props.name);
  const [memorizeWay, setMemorizeWay] = useState();

  async function deleteSet(){
    const check = window.confirm("정말로 삭제하시겠습니까?")
    if(check){
      console.log(props.id);
      const response = await axios.put(`https://helpingmemo.ga/wordSet/deleteWordSet/${props.id}`);
      setModalOpened(false);
      window.location.replace("/memoset");
    }
  }
  async function shareSet(){
    const response = await axios.put(`https://helpingmemo.ga/wordSet/shareWordSet/${props.id}`);
    alert(response.data);
    window.location.replace("/memoset");
  }
  async function modifySetName(e){
    e.preventDefault();
    const response = await axios.put(`https://helpingmemo.ga/wordSet/modifyWordSet/${props.id}`, {title: modifiedSetName});
    setSet_nameModal(false);
    window.location.replace("/memoset");
  }
  return (
    <div className='wordSet_box' >
      <div className='main_box' onClick={() => {
        setModalOpened(true);
      }}>
      <p>{props.name}</p>
      <spna>단어 {props.length}개</spna>
      </div>
      <div className='bottom_box'></div>
    
      <Popup open={modalOpened} onClose={()=>{setModalOpened(false)}}>
          <div className='option_list'>
            <Link className='set_modify' to={`/memoset/wordlist/${props.id}/`}>세트 확인하기</Link>
            <button className='set_delete' onClick={deleteSet}>세트 삭제하기</button>
            <button onClick={() => {
                setSet_nameModal(true);
                setModalOpened(false);
            }} className='moBt'>세트이름 변경</button>
            <button onClick={shareSet}>세트 공유하기</button>
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