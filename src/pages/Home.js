import React from "react";
import { Link } from "react-router-dom";
import MainHeader from "../components/MainHeader";
import "../styles/Home.css";

export default function Home(){
    return(
        <div className="container">
        <MainHeader />
        <div className="main">
            <button className="log_bt">
                <Link to="/login" style={{ textDecoration: 'none' }}>
                로그인
                </Link>
            </button>
            <button className="reg_bt">
                <Link to="/register" style={{ textDecoration: 'none' }}>
                회원가입
                </Link>
            </button>
        </div>
        </div>
    );
}