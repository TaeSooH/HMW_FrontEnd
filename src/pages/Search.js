import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import "../styles/Search.css"

export default function Search(){
    const [ser_text, setText] = useState();
    async function searchWord(){
        const response = await axios({
            method: 'post',
            url: "https://openapi.naver.com/v1/papago/n2mt",
            data: {
              "source": 'en',
              "target": 'ko',
              "text": ser_text,
            },
            headers: {
                "X-Naver-Client-Id": "jQO21fATTMCC_Or8GoOI",
                "X-Naver-Client-Secret": "tuk3WCr9a0",
            },
          });
        console.log(response.data);
    }
    return (
        <div className="container">
            <Header />
             <Link to="/" >
                <img src="back.png" className="back" />
             </Link>
             <label className="ser">
                <div className="ser_title">사전 검색</div>
                <div className="ser_bar">
                    <input onChange={(e) => {setText(e.target.value);}} value={ser_text} type={'text'}  placeholder="search..." className="ser_input" />
                    <img onClick={searchWord} src="search.png" className="ser_ck" />
                </div>
             </label>
             <div className="wordMean"></div>
        </div>
    );
}