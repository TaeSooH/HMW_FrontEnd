import React from "react";
import MainHeader from "../components/MainHeader";
import "../styles/Register.css";

export default function Register(){
    return (
        <div className="container">
            <MainHeader />
            <form>
                <input type={'text'} placeholder="아이디" className="id" />
                <input type={'password'} placeholder="비밀번호" className="pw"/>
                <input type={'password'} placeholder="비밀번호 재입력" className="ckpw"/>
                <input type={'submit'} value="회원가입" className="submit" />
            </form>
        </div>
    );
}