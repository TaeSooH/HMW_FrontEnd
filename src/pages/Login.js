import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import MainHeader from "../components/MainHeader";
import "../styles/Login.css";

export default function Login() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  async function login(e) {
    e.preventDefault();
    const form = new FormData();
    form.append("name", id);
    form.append("password", password);
    await axios
      .post("https://helpingmemo.ga/user/login", form)
      .then((response) => {
        if (response.data.result !== "error") {
          localStorage.setItem("token", response.data.result);
          window.location.replace("/");
        } else {
          alert("아이디 또는 비밀번호를 확인하세요");
        }
      })
      .catch((err) => {
        alert(err);
      });
  }
  return (
    <div className="login_container">
      <MainHeader />
      <form onSubmit={login}>
        <input
          value={id}
          type={"text"}
          placeholder="아이디"
          className="id"
          onChange={(e) => {
            setId(e.target.value);
          }}
        />
        <input
          value={password}
          type={"password"}
          placeholder="비밀번호"
          className="pw"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <input type={"submit"} value="로그인" className="submit" />
        <Link to="/register">
          <p className="toJoin">회원가입 하기</p>
        </Link>
      </form>
    </div>
  );
}
