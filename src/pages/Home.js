import React from "react";
import { Link } from "react-router-dom";
import MainHeader from "../components/MainHeader";
import "../styles/Home.css";

export default function Home(){
    return(
        <div className="container">
        <MainHeader />
        <div className="main">
            <Link to="/login" style={{ textDecoration: 'none' }} className="log_bt">
            <button className="inbt">
                
                로그인
                
            </button>
            </Link>
            <Link to="/register" style={{ textDecoration: 'none' }} className="reg_bt">
            <button className="inbt">
                
                회원가입
                
            </button>
            </Link>
        </div>
        </div>
    );
}