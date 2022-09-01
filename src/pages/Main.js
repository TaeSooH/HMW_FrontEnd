import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import "../styles/Main.css"

export default function Main({name}){
    console.log(name);
    return(
        <div className="container">
            <Header username={name} />
            <div className="btn">
            <Link to="/search" state={{username: name}} style={{ textDecoration: 'none' }} className="ser_word">
                <button className="ser_bt">    
                사전 검색    
                </button>
            </Link>
            <Link to="/memoset" state={{username: name}} className="memo_word" style={{ textDecoration: 'none' }}>  
                <button className="memo_bt">단어 암기</button>
            </Link>
            </div>
        </div>
    );
}