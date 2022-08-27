import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import "../styles/Search.css"

export default function Search(){
    const [isLoading, setIsLoading] = useState(false);
    const [ser_text, setText] = useState("");
    const [prText, setPrText] = useState("");
    const [example, setExample] = useState("");
    const [mean, setMean] = useState("");
    async function searchWord(){
        setIsLoading(true);
        const response = await axios.get("http://localhost:8080/test?word=" + ser_text);
        response.data[0] = response.data[0].replace(/\(Edu times\)/g, '');
        response.data[0] = response.data[0].replace(/\(Kids Edu times\)/g, '');
        response.data[0] = response.data[0].replace(/\n/g, '<br/>');
        response.data[1] = response.data[1].replace(/\n/g, '<br/>');
        console.log(response.data);
        setPrText(ser_text);
        setText("");
        setMean(response.data[1]);
        setExample(response.data[0]);
        setIsLoading(false);
    }
    function enter(e){
        if(e.key === 'Enter'){
            searchWord();
        }
    }
    return (
        <div className="container">
            <Header />
             <Link to="/" >
                <img src="back.png" className="back" alt="사진이 없음" />
             </Link>
             <label className="ser">
                <div className="ser_title">사전 검색</div>
                <div className="ser_bar">
                    <input onChange={(e) => {setText(e.target.value);}} value={ser_text} type={'text'}  placeholder="search..." className="ser_input" onKeyPress={enter} />
                    <img onClick={searchWord} src="search.png" className="ser_ck" alt="사진이 없음" />
                </div>
             </label>
             <div className="wordMean">
                
                {isLoading ? 
                <div className="loading">로딩중 ...</div>
                : 
                <>
                    <div className="prWord">
                        <div className="prText">{prText}</div>
                    </div>
                    <div className="exandmean">
                    <div className="mean" dangerouslySetInnerHTML={{__html:mean}}></div>
                    <div className="example" dangerouslySetInnerHTML={{__html:example}}></div>
                    </div> 
                </> 
                }
                </div>
        </div>
    );
}