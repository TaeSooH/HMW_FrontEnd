import React, { useEffect, useState } from 'react'
import "../styles/Memorize.css"
import { MdOutlineNavigateNext } from "react-icons/md"
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const Memorize = () => {
    const [isClick, setIsClick] = useState(false);
    const location = useLocation();
    const id = location.state?.id;
    const [wordList, setWordList] = useState([]);
    const [index, setIndex] = useState(0);
    console.log(id);
    useEffect(() => {
        async function getWords(){
            console.log('enter')
            const response = await axios.get(`http://127.0.0.1:8080/word/getWords/?setId=${id}`);
            console.log(response.data);
            setWordList(response.data);
        }
        getWords();
    }, []);
  return (
    <>
    {wordList.length > 0 ? index > wordList.length - 1 ? <div className='memorize_container'><div className='content_box' style={{fontSize: "50px"}}>finish</div><button>돌아가기</button></div> :
    <div className='memorize_container'>
    <span>학교단어</span>
    <div className='content_box'>
        <p>{wordList[index].word}</p>
        <div
            className={
                isClick ? "content_box_onClick" : "nonClick"
            }
        ></div>
        <span>{wordList[index].meaning}</span>   
    </div>
    <div onClick={()=> {
        setIsClick(true)
    }} className='space_button'>space</div>
    <MdOutlineNavigateNext onClick={() => {
        setIsClick(false)
        setIndex(index+1);
        }} className='next_word_button' color='white' size='70' />
    </div>
    : 
<div>아직 단어가 없습니다.</div>}
</>
  )
}

export default Memorize