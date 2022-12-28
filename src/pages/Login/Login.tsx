import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import MainHeader from "../components/MainHeader";
import "../styles/Login.css";

interface ILoginData {
  id: string;
  password: string;
}

export default function Login() {
  const [loginData, setLoginData] = useState<ILoginData>({
    id: "",
    password: "",
  });
  async function login(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    await axios
      .post("https://helpingmemo.ga/user/login", loginData)
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
          value={loginData.id}
          type={"text"}
          placeholder="아이디"
          className="id"
          onChange={(e) => setLoginData({ ...loginData, id: e.target.value })}
        />
        <input
          value={loginData.password}
          type={"password"}
          placeholder="비밀번호"
          className="pw"
          onChange={(e) =>
            setLoginData({ ...loginData, password: e.target.value })
          }
        />
        <input type={"submit"} value="로그인" className="submit" />
        <Link to="/register">
          <p className="toJoin">회원가입 하기</p>
        </Link>
      </form>
    </div>
  );
}
