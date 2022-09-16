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

const Memorize = () => {
    const [isClick, setIsClick] = useState(false);
    const {messages, speak} = useSpeech();
    const [playing, setPlaying] = useState(false);
    const location = useLocation();
    const id = location.state?.id;
    const set_name = location.state?.set_name;
    const [wordList, setWordList] = useState([]);
    const [load, setLoad] = useState(false);
    var voices = [];
    useEffect(() => {
        setLoad(false);
        async function getWords(){
            console.log('enter')
            const response = await axios.get(`http://127.0.0.1:8080/word/getWords/?setId=${id}`);
            console.log(response.data);
            setWordList(response.data);
        }
        getWords();
        document.addEventListener('keydown', space, true);
        setLoad(true);
        voices = window.speechSynthesis.getVoices();
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
  return (
    <>
    {load ? wordList.length !== 0 ? 
    <Carousel showThumbs={false} showIndicators={false} showStatus={false} 
    renderArrowNext={(clickHandler, hasNext, labelNext) => 
        hasNext && ( <MdOutlineNavigateNext onClick={()=>{
            setIsClick(false);
            clickHandler();
        }} className='next_word_button' color='white' size='70' />
        )
    }
    renderArrowPrev={(clickHandler, hasPrev, labelPrev) => 
        hasPrev && (
         <MdOutlineNavigateBefore onClick={()=>{
            setIsClick(false); 
            clickHandler();
        }}  className='before_word_button' color='white' size='70' />
        )
    }
    >
    {wordList.map((data, index) => (<div className='memorize_container'>
    <span>{set_name}</span>
    <span>{index+1}/{wordList.length}</span>
    <div className='content_box'>
        <button className='voicebtn' onClick={() => (speech(data.word))}>{playing? <CgPlayPause size="30" /> : <GiSpeaker size="30" />}</button>
        <div className="inner_box">
        <p>{data.word}</p>
        <div
            className={
                isClick ? "content_box_onClick" : "nonClick"
            }
        ></div>
        <span>{data.meaning}</span>  
        </div> 
    </div>
    <div onClick={()=> {
        setIsClick(true)
    }} 
    className='space_button'>space</div>
    </div>))}
    <div className='memorize_container'>
        <div className='content_box finish'>
            <span>finish!</span>
            <Link to="/memoset" className="backTo">돌아가기</Link>
        </div>
    </div> 
    </Carousel>
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
: <div>로딩중...</div> }
</>
  )
}

export default Memorize