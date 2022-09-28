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
import { IoMdArrowRoundBack } from "react-icons/io";
import MemoWord from '../components/MemoWord';

const Memorize = () => {
    const [playing, setPlaying] = useState(false);
    const {messages, speak} = useSpeech();
    const [isClick, setIsClick] = useState(false);
    const [way, setWay] = useState("word");
    const [start, setStart] = useState(false);
    const [shuffle, setShuffle] = useState(false);
    const location = useLocation();
    const id = location.state?.id;
    const set_name = location.state?.set_name;
    const [wordList, setWordList] = useState([]);
    const [load, setLoad] = useState(true);
    const [shuffleList, setShuffleList] = useState([]);
    useEffect(() => {
        async function getWords(){
            console.log('enter')
            const response = await axios.get(`http://127.0.0.1:8080/word/getWords/?setId=${id}`);
            console.log(response.data);
            setWordList(response.data);
            console.log(load);
            console.log(wordList);
            console.log(shuffle);
        }
        async function getShuffles(){
            console.log('enter')
            const response = await axios.get(`http://127.0.0.1:8080/word/getWords/?setId=${id}`);
            console.log(response.data);
            setShuffleList(response.data);
            console.log(load);
            setLoad(false);
            console.log(wordList);
            console.log(shuffle);
        }
        document.addEventListener('keydown', space, true);
        getWords();
        getShuffles();
    }, []);
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
    const space = (e) => {
        if(e.key === ' '){
            setIsClick(true);
        }
    }
    const implShuffle = (array) => {
        for (let index = array.length - 1; index > 0; index--) {
          const randomPosition = Math.floor(Math.random() * (index + 1));
          [array[index], array[randomPosition]] = [array[randomPosition], array[index]];
        }
    }
    if(load) return <div>...</div>
    if(!start) return (
    <div className="memorize_container">
        <div className="check">
            <p className='box_title'>적절한 모드와 방법으로 단어를 효율적으로 외우세요!</p>
            <div className="setlist">
                <p>셔플모드</p>
                <label className="switch">
                    <input type={"checkbox"} onClick={() => {
                        implShuffle(shuffleList);
                        console.log(shuffle);
                        console.log(shuffleList);
                        console.log(wordList);
                        setShuffle(!shuffle)
                    }} />
                    <span className="slider_round"></span>
                </label>    
                
            </div>
            
            <div className="memorize_way">
                <p>학습 방법</p>
                <select onChange={(e) => {
                    setWay(e.target.value);
                    console.log(e.target.value);
                    console.log(way);
                }}>
                    <option value="word">단어 제시</option>
                    <option value="meaning">의미 제시</option>
                </select>
            </div>
            <button className='startMemo' onClick={() => {
                setStart(true)
                }} >암기 학습 시작</button>
        </div>
    </div>
    )
  return (
    <>
    <Link className="go_to_back" to="/memoset"><IoMdArrowRoundBack size='20'/>  학습 종료</Link>
    {wordList.length !== 0 ? 
    <Carousel showThumbs={false} showIndicators={false} showStatus={false} 
    renderArrowNext={(clickHandler, hasNext, labelNext) => 
        hasNext && ( <MdOutlineNavigateNext onClick={()=>{
            clickHandler();
            setIsClick(false);
        }} className='next_word_button' color='white' size='70' />
        )}
    renderArrowPrev={(clickHandler, hasPrev, labelPrev) => 
        hasPrev && (
         <MdOutlineNavigateBefore onClick={()=>{
            clickHandler();
            setIsClick(false);
        }}  className='before_word_button' color='white' size='70' />
        )
    }
    >
    {shuffle ? 
    shuffleList.map((data, index) => (
    <div className='memorize_container'>
    <span>{set_name}</span>
    <span>{index+1}/{wordList.length}</span>
    <div className='content_box'>
        {
            way === 'meaning' ? !isClick ?
            <button className='voicebtn'><GiSpeaker size="30" color='grey' /></button>
            : <button className='voicebtn' onClick={() => (speech(data.word))}>{playing? <CgPlayPause size="30" /> : <GiSpeaker size="30" />}</button>
            :<button className='voicebtn' onClick={() => (speech(data.word))}>{playing? <CgPlayPause size="30" /> : <GiSpeaker size="30" />}</button>
        }
        <div className="inner_box">
            <p>{way === 'word' ? data.word : data.meaning}</p>
            <span className='content_box_span'>{way === 'word' ? data.meaning : data.word}</span> 
            <div
                className={
                    isClick ? "content_box_onClick" : "nonClick"
                }
            ></div> 
        </div> 
    </div>
    <div onClick={()=> {
        setIsClick(true)
    }} 
    className='space_button'>space</div>
    </div>)
    )
    : 
    wordList.map((data, index) => (
    <div className='memorize_container'>
    <span>{set_name}</span>
    <span>{index+1}/{wordList.length}</span>
    <div className='content_box'>
        {
            way === 'meaning' ? !isClick ?
            <button className='voicebtn'><GiSpeaker color='grey' size="30" /></button>
            : <button className='voicebtn' onClick={() => (speech(data.word))}>{playing? <CgPlayPause size="30" /> : <GiSpeaker size="30" />}</button>
            :<button className='voicebtn' onClick={() => (speech(data.word))}>{playing? <CgPlayPause size="30" /> : <GiSpeaker size="30" />}</button>
        }
        <div className="inner_box">
        <p>{way === 'word' ? data.word : data.meaning}</p>
        <div
            className={
                isClick ? "content_box_onClick" : "nonClick"
            }
        ></div>
        <span className='content_box_span'>{way === 'word' ? data.meaning : data.word}</span>  
        </div> 
    </div>
    <div onClick={()=> {
        setIsClick(true)
    }} 
    className='space_button'>space</div>
    </div>
    ))
    }
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
}
</>
  )
}

export default Memorize