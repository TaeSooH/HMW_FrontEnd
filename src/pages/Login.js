import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import MainHeader from "../components/MainHeader";
import "../styles/Login.css";

export default function Login(){
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    async function login(e){
        e.preventDefault();
        const form = new FormData();
        form.append('name', id);
        form.append('password', password);
        const response = await axios.post("http://127.0.0.1:8080/user/login", form);
        if(response.data.result !== "error") {
            localStorage.setItem('token', response.data.result);
        }
        else {
            alert("error");
        }
        window.location.replace("/");
    }
    return (
        <div className="container">
            <MainHeader />
            <form onSubmit={login}>
                <input value={id} type={'text'} placeholder="아이디" className="id" onChange={(e) => {setId(e.target.value)}} />
                <input value={password} type={'password'} placeholder="비밀번호" className="pw" onChange={(e) => {setPassword(e.target.value)}} />
                <input type={'submit'} value="로그인" className="submit" />
                <Link to="/register">
                <p className="toJoin">회원가입 하기</p>
                </Link>
            </form>
           
        </div>
    );
}