import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import MainHeader from "../../components/MainHeader/MainHeader";
import * as S from "./style";

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
    <S.RegisterContainer>
      <MainHeader />
      <S.InputForm onSubmit={register}>
        <S.RegisterInput
          type={"text"}
          placeholder="아이디"
          value={registerData.id}
          onChange={(e) => {
            setRegisterData({ ...registerData, id: e.target.value });
          }}
        />
        <S.RegisterInput
          type={"password"}
          placeholder="비밀번호"
          className="pw"
          value={registerData.password1}
          onChange={(e) => {
            setRegisterData({ ...registerData, password1: e.target.value });
          }}
        />
        <S.RegisterInput
          type={"password"}
          placeholder="비밀번호 재입력"
          value={registerData.password2}
          onChange={(e) => {
            setRegisterData({ ...registerData, password2: e.target.value });
          }}
        />
        <S.Submit type={"submit"} value="회원가입" />
        <Link to="/login">
          <S.ToLogin>계정이 이미 있으신가요? 로그인 하기</S.ToLogin>
        </Link>
      </S.InputForm>
    </S.RegisterContainer>
  );
}
