import React from "react";
import MainHeader from "../components/MainHeader";
import "../styles/Login.css";

export default function Login(){
    return (
        <div className="container">
            <MainHeader />
            <form>
                <input type={'text'} placeholder="아이디" className="id" />
                <input type={'password'} placeholder="비밀번호" className="pw"/>
                <input type={'submit'} value="로그인" className="submit" />
            </form>
        </div>
    );
}