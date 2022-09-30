import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import MainHeader from "../components/MainHeader";
import "../styles/Register.css";

export default function Register(){
    const [id, setId] = useState();
    const [password1, setPassword1] = useState();
    const [password2, setPassword2] = useState();
    async function register(e){
        e.preventDefault();
        if(password1 !== password2){
            alert("패스워드가 일치하지 않습니다.");
        }
        else{
            const form = new FormData();
            form.append('name', id);
            form.append('password1', password1);
            form.append('password2', password2);
            await axios.post("https://helpingmemo.ga/user/signup", form)
            .then(response => {
                alert(response.data);
                window.location.replace("/");
            })
            .catch(err => {
                console.log(err);
                alert("사용자가 이미 있습니다!");
            })
        }
    }
    return (
        <div className="register_container">
            <MainHeader />
            <form onSubmit={register}>
                <input type={'text'} placeholder="아이디" className="id" value={id} onChange={(e) => {setId(e.target.value)}} />
                <input type={'password'} placeholder="비밀번호" className="pw" value={password1} onChange={(e) => {setPassword1(e.target.value)}} />
                <input type={'password'} placeholder="비밀번호 재입력" className="ckpw"  value={password2} onChange={(e) => {setPassword2(e.target.value)}} />
                <input type={'submit'} value="회원가입" className="submit" />
                <Link to="/login"><p className="toJoin">계정이 이미 있으신가요? 로그인 하기</p></Link>
            </form>
        </div>
    );
}