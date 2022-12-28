import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import MainHeader from "../../components/MainHeader/MainHeader";
import "../styles/Register.css";

export default function Register() {
  const [registerData, setRegisterData] = useState({
    id: "",
    password1: "",
    password2: "",
  });
  async function register(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (registerData.password1 !== registerData.password2) {
      alert("패스워드가 일치하지 않습니다.");
    } else {
      await axios
        .post("https://helpingmemo.ga/user/signup", registerData)
        .then((response) => {
          alert(response.data);
          window.location.replace("/");
        })
        .catch((err) => {
          console.log(err);
          alert("사용자가 이미 있습니다!");
        });
    }
  }
  return (
    <div className="register_container">
      <MainHeader />
      <form onSubmit={register}>
        <input
          type={"text"}
          placeholder="아이디"
          className="id"
          value={registerData.id}
          onChange={(e) => {
            setRegisterData({ ...registerData, id: e.target.value });
          }}
        />
        <input
          type={"password"}
          placeholder="비밀번호"
          className="pw"
          value={registerData.password1}
          onChange={(e) => {
            setRegisterData({ ...registerData, password1: e.target.value });
          }}
        />
        <input
          type={"password"}
          placeholder="비밀번호 재입력"
          className="ckpw"
          value={registerData.password2}
          onChange={(e) => {
            setRegisterData({ ...registerData, password2: e.target.value });
          }}
        />
        <input type={"submit"} value="회원가입" className="submit" />
        <Link to="/login">
          <p className="toJoin">계정이 이미 있으신가요? 로그인 하기</p>
        </Link>
      </form>
    </div>
  );
}
