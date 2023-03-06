import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import MainHeader from "../../components/MainHeader/MainHeader";
import * as S from "./style";
import * as qs from "qs";

interface ILogin {
  name: string;
  password: string;
}

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    watch,
  } = useForm<ILogin>();
  const onValid = (data: ILogin) => {
    axios
      .post("/api/auth/login", qs.stringify(data))
      .then((res) => {
        if (res.data.result !== "error") {
          localStorage.setItem("token", res.data.result);
          window.location.replace("/");
        } else alert("아이디 또는 비밀번호를 확인하세요");
      })
      .catch((err) => alert(err));
  };
  // const [loginData, setLoginData] = useState<ILoginData>({
  //   id: "",
  //   password: "",
  // });
  // async function login(e: React.FormEvent<HTMLFormElement>) {
  //   e.preventDefault();
  //   await axios
  //     .post("https://192.168.10.74/user/login", loginData)
  //     .then((response) => {
  //       if (response.data.result !== "error") {
  //         localStorage.setItem("token", response.data.result);
  //         window.location.replace("/");
  //       } else {
  //         alert("아이디 또는 비밀번호를 확인하세요");
  //       }
  //     })
  //     .catch((err) => {
  //       alert(err);
  //     });
  // }
  return (
    <S.LoginContainer>
      <MainHeader />
      <S.LoginForm onSubmit={handleSubmit(onValid)}>
        <S.LoginInput
          {...register("name", {
            required: "아이디를 입력해 주세요",
          })}
          placeholder="아이디"
        />
        <S.LoginInput
          {...register("password", {
            required: "비밀번호를 입력해 주세요.",
          })}
          type="password"
          placeholder="비밀번호"
        />
        <S.ErrorMsg>{errors.name?.message}</S.ErrorMsg>
        {!errors.name?.message && (
          <S.ErrorMsg>{errors.password?.message}</S.ErrorMsg>
        )}
        <S.Submit>회원가입</S.Submit>
        <Link to="/login">
          <S.ToJoin>계정이 이미 있으신가요? 로그인 하기</S.ToJoin>
        </Link>
      </S.LoginForm>
    </S.LoginContainer>
  );
}
