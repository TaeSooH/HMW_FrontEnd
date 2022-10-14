import axios from 'axios'
import React from 'react'
import { useRecoilState } from 'recoil';
import "../styles/SharedSet.css"
import { user } from './states';

const SharedSet = ({id, title, word_length, owner}) => {
  const [userName, setUserName] = useRecoilState(user);
  const download = () => {
    if(userName === owner) {
      alert("본인이 공유한 세트입니다.");
    }
    else {
      const form = {"owner": userName};
      console.log(userName);
      axios.post(`http://127.0.0.1:8080/wordSet/downloadSharedWordSet/${id}?owner=${userName}`)
      .then(res => {
        alert(res.data);
      })
      .catch(err => {
        alert("다운로드 실패");
      })
    }
  }
  return (
    <>
    <div className='ShareSet_container'>
      <div className='row_box'>
        <div className='set_box1'>
          <div className='main_box1'>
            <p>세트이름: {title}</p>
            <span>단어 개수: {word_length}개</span>
          </div>
          <div className='bottom_box'></div>
        </div>
        <div className='right_set_box'>
          <p>세트이름 : {title}</p>
          <span>유저이름 : {owner}</span>
        </div>
      </div>
      <button className="down" onClick={download}>
      세트 다운로드
    </button>
    </div>
    
    </>
  )
}

export default SharedSet