import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { HeaderContainer, Logo } from "./style";
import * as S from "./style";
import { useCookies } from "react-cookie";
import axios from "axios";

interface IProps {
  username: string;
}

export default function Header(props: IProps) {
  const logOut = () => {
    axios
      .get("/api/auth/logout")
      .then((res) => {
        console.log(res.data);
        window.location.replace("/");
      })
      .catch((err) => console.log(err));
  };
  return (
    <S.HeaderContainer>
      <Link to="/" style={{ textDecoration: "none" }} className="logo">
        <S.Logo>HMW</S.Logo>
      </Link>
      <S.NavMenu
        marginValue={"16%"}
        as={Link}
        to="/search"
        state={{ username: props.username }}
      >
        사전 검색하러 가기
      </S.NavMenu>
      <S.NavMenu
        marginValue={"4%"}
        as={Link}
        to="/memoset"
        state={{ username: props.username }}
      >
        단어 세트
      </S.NavMenu>
      <S.NavMenu
        marginValue={"4%"}
        as={Link}
        to="/share"
        state={{ username: props.username }}
      >
        단어 세트 공유
      </S.NavMenu>
      {props.username ? (
        <>
          <S.User>{props.username}</S.User>
          <S.User onClick={logOut}>로그아웃</S.User>
        </>
      ) : (
        <>
          <S.LinkMenu as={Link} marginValue="23%" to="/login" className="login">
            로그인
          </S.LinkMenu>
          <S.LinkMenu
            as={Link}
            marginValue="3%"
            to="/register"
            className="join"
          >
            회원가입
          </S.LinkMenu>
        </>
      )}
    </S.HeaderContainer>
  );
}
