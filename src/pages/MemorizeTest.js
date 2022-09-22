import React, { useEffect, useState } from 'react'
import "../styles/Memorize.css"
import { MdOutlineNavigateNext } from "react-icons/md"
import { MdOutlineNavigateBefore } from "react-icons/md";
import { GiSpeaker } from "react-icons/gi";
import { CgPlayPause } from "react-icons/cg";
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { useSpeech } from 'react-web-voice';

const MemorizeTest = () => {
    const [index, setIndex] = useState(1);
    const [isClick, setIsClick] = useState(false);
    const {messages, speak} = useSpeech();
    const [playing, setPlaying] = useState(false);
    const location = useLocation();
    const id = location.state?.id;
    const set_name = location.state?.set_name;
    const [wordList, setWordList] = useState([]);
    const [load, setLoad] = useState(true);
    const [list, setList] = useState([{num : 1}, {num: 2}, {num: 3}]);
    useEffect(() => {
        async function getWords(){
            console.log('enter')
            const response = await axios.get(`http://127.0.0.1:8080/word/getWords/?setId=${id}`);
            setWordList(response.data);
            console.log(wordList);
            console.log(load);
            setLoad(false);
            console.log(wordList)
        }
        getWords();
        document.addEventListener('keydown', space, true);
        // document.addEventListener('keydown', Right, true);
        // document.addEventListener('keydown', Left, true);
    }, []);
    const space = (e) => {
        if(e.key === ' '){
            setIsClick(true);
        }
    }
    async function speech(text){
        setPlaying(true);
       const utterance = await speak({
        text: text,
        volume: 0.5,
        rate: 1,
        pitch: 1
       });
       setPlaying(false);
    }
    function onRight(clickHandler){
        console.log("en");
        setIsClick(false);
        clickHandler();
    }
    if(load) return <div>...</div>
  return (
    <>
    {wordList.length !== 0 ? 
    <div className='memorize_container'>
        <div className='memorize_box'>
            {list.map((data, idx) => (
                <div className={`content ${idx === index ? "cur" : ""}`}>{data.num}</div>
            ))}
        </div>
        <MdOutlineNavigateNext onClick={() => {setIndex(index+1)}}/>
    </div>
: 
<div className='memorize_container'>
    <div className='content_box non'>
    <p>단어가 아직 없습니다!</p>
    <div className='bts'>
    <Link className='back' to="/memoset">돌아가기</Link>
    <Link state={{set_name: set_name, id: id}} to="/memoset/wordlist">단어 추가하러 가기</Link>
    </div>
    </div>
</div> 
}
</>
  )
}

export default MemorizeTest

// {wordList.map((data, index) => (<div className='memorize_container'>
//     <span>{set_name}</span>
//     <span>{index+1}/{wordList.length}</span>
//     <div className='content_box'>
//         <button className='voicebtn' onClick={() => (speech(data.word))}>{playing? <CgPlayPause size="30" /> : <GiSpeaker size="30" />}</button>
//         <div className="inner_box">
//         <p>{data.word}</p>
//         <div
//             className={
//                 isClick ? "content_box_onClick" : "nonClick"
//             }
//         ></div>
//         <span>{data.meaning}</span>  
//         </div> 
//     </div>
//     <div onClick={()=> {
//         setIsClick(true)
//     }} 
//     className='space_button'>space</div>
//     </div>))}
//     <div className='memorize_container'>
//         <div className='content_box finish'>
//             <span>finish!</span>
//             <Link to="/memoset" className="backTo">돌아가기</Link>
//         </div>
//     </div>