import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

interface IProps {
  username: string;
}

export default function Header(props: IProps) {
  function logout() {
    localStorage.removeItem("token");
    window.location.replace("/");
  }
  return (
    <header>
      <Link to="/" style={{ textDecoration: "none" }} className="logo">
        <p>HMW</p>
      </Link>
      <Link
        to="/search"
        state={{ username: props.username }}
        style={{ textDecoration: "none" }}
        className="ser_word2"
      >
        사전 검색하러 가기
      </Link>
      <Link
        to="/memoset"
        state={{ username: props.username }}
        className="memo_word2"
        style={{ textDecoration: "none" }}
      >
        단어 세트
      </Link>
      <Link
        to="/share"
        state={{ username: props.username }}
        className="memo_word2"
        style={{ textDecoration: "none" }}
      >
        단어 세트 공유
      </Link>
      {props.username !== "" ? (
        <div className="user" onClick={logout}>
          {props.username}(로그아웃)
        </div>
      ) : (
        <>
          <Link to="/login" className="login">
            로그인
          </Link>
          <Link to="/register" className="join">
            회원가입
          </Link>
        </>
      )}
    </header>
  );
}
