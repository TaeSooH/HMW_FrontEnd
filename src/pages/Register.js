import axios from "axios";
import React, { useState } from "react";
import MainHeader from "../components/MainHeader";
import "../styles/Register.css";

export default function Register(){
    const [id, setId] = useState();
    const [password1, setPassword1] = useState();
    const [password2, setPassword2] = useState();
    async function register(e){
        e.preventDefault();
        const form = new FormData();
        form.append('name', id);
        form.append('password1', password1);
        form.append('password2', password2);
        const response = await axios.post("http://127.0.0.1:8080/user/signup", form)
        alert(response.data);
        window.location.replace("/");
    }
    return (
        <div className="container">
            <MainHeader />
            <form onSubmit={register}>
                <input type={'text'} placeholder="아이디" className="id" value={id} onChange={(e) => {setId(e.target.value)}} />
                <input type={'password'} placeholder="비밀번호" className="pw" value={password1} onChange={(e) => {setPassword1(e.target.value)}} />
                <input type={'password'} placeholder="비밀번호 재입력" className="ckpw"  value={password2} onChange={(e) => {setPassword2(e.target.value)}} />
                <input type={'submit'} value="회원가입" className="submit" />
            </form>
        </div>
    );
}