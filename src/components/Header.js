import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css"

export default function Header({username}){
    function logout(){
        localStorage.removeItem('token');
        window.location.replace("/");
    }
    return(
        <header>
                <Link to="/" style={{ textDecoration: 'none' }} className="logo">
                <p>HMW</p>
                </Link>
                <Link to="/search" state={{username: username}} style={{ textDecoration: 'none' }} className="ser_word2">
                    사전 검색하러 가기
                </Link>
                <Link to="/memoset" state={{username: username}} className="memo_word2" style={{ textDecoration: 'none' }}>
                    단어 세트
                </Link>
                {username !== '' ? 
                <div className="user" onClick={logout}>{username}(로그아웃)</div> 
                : 
                <>
                <Link to="/login" className="login">로그인</Link>
                <Link to="/register" className="join">회원가입</Link>
                </>
                }
        </header>
    );
}