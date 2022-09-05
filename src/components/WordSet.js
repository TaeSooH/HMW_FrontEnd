import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import "../styles/WordSet.css"
import Popup from "reactjs-popup";

const WordSet = (props) => {
  const [modalOpened, setModalOpened] = useState(false);
  useEffect(() => {
    console.log(modalOpened);
  }, [modalOpened]);
  return (
    <div className='wordSet_box'>
      <span>{props.name}</span>
      <div onClick={() => {
        setModalOpened(true);
      }}>
        
      </div>
      <Popup open={modalOpened} onClose={()=>{setModalOpened(false)}}>
          <div className='option_list'>
            <Link className='set_modify' state={{set_name: props.name}} to={'/memoset/wordlist'}>세트 수정하기</Link>
            <Link className='start_memorizing' to={'/memoset/wordlist'}>암기 시작하기</Link>
            <Link className='set_delete' to={'/memoset/wordlist'}>세트 삭제하기</Link>
            <button onClick={() => {setModalOpened(false)}}>돌아가기</button>
          </div>
        </Popup>
    </div>
  )
}

export default WordSet