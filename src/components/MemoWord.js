import React, { useEffect } from "react";
import { GiSpeaker } from "react-icons/gi";
import { CgPlayPause } from "react-icons/cg";
import { useState } from "react";
import { useSpeech } from 'react-web-voice';

export default function MemoWord({setIsClick, isClick, length, set_name ,data, index}){
    const [playing, setPlaying] = useState(false);
    const {messages, speak} = useSpeech();
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
        <div className='memorize_container'>
    <span>{set_name}</span>
    <span>{index+1}/{length}</span>
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
    </div>
    )
}