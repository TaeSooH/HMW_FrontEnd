import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import MainHeader from "../../components/MainHeader/MainHeader";
import * as S from "./style";
import { useForm } from "react-hook-form";

interface ISignUp {
  Email: string;
  Username: string;
  PW: string;
  PWcheck: string;
}
export default function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<ISignUp>({
    defaultValues: {
      Email: "@bssm.hs.kr",
    },
  });
  const onValid = (data: ISignUp) => {
    if (data.PW !== data.PWcheck) {
      return setError(
        "PWcheck",
        { message: "비밀번호를 다시 확인해주세요." },
        { shouldFocus: true }
      );
    }
  };
  // const [registerData, setRegisterData] = useState({
  //   id: "",
  //   password1: "",
  //   password2: "",
  // });
  // async function goRegister(e: React.FormEvent<HTMLFormElement>) {
  //   e.preventDefault();
  //   if (registerData.password1 !== registerData.password2) {
  //     alert("패스워드가 일치하지 않습니다.");
  //   } else {
  //     await axios
  //       .post("https://192.168.10.74/api/auth/signup", registerData)
  //       .then((response) => {
  //         alert(response.data);
  //         window.location.replace("/");
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //         alert("사용자가 이미 있습니다!");
  //       });
  //   }
  // }
  return (
    <S.RegisterContainer>
      <MainHeader />
      <S.InputForm onSubmit={handleSubmit(onValid)}>
        <S.RegisterInput
          {...register("Email", {
            required: "이메일을 입력해 주세요",
            pattern: {
              value:
                /^[A-Za-z0-9._%+-]+@bssm.hs.kr$/ ||
                /^[A-Za-z0-9._%+-]+@bssm.teacher.hs.kr$/,
              message: "오직 소마고의 학생 또는 선생님만 가입할 수 있습니다.",
            },
          })}
          placeholder="이메일"
        />
        <S.RegisterInput
          {...register("Username", {
            required: "유저네임을 입력해 주세요.",
          })}
          placeholder="유저네임"
        />
        <S.RegisterInput
          {...register("PW", {
            required: "비밀번호를 입력해 주세요.",
          })}
          placeholder="비밀번호"
        />
        <S.RegisterInput
          {...register("PWcheck", {
            required: "비밀번호를 확인해 주세요.",
          })}
          placeholder="비밀번호 확인"
        />
        <S.ErrorMsg>{errors.Email?.message}</S.ErrorMsg>
        {!errors.Email?.message && (
          <S.ErrorMsg>{errors.Username?.message}</S.ErrorMsg>
        )}
        {!errors.Username?.message && (
          <S.ErrorMsg>{errors.PW?.message}</S.ErrorMsg>
        )}
        {!errors.PW?.message && (
          <S.ErrorMsg>{errors.PWcheck?.message}</S.ErrorMsg>
        )}
        <S.Submit
          onClick={() => {
            console.log(errors);
          }}
        >
          회원가입
        </S.Submit>
        <Link to="/login">
          <S.ToLogin>계정이 이미 있으신가요? 로그인 하기</S.ToLogin>
        </Link>
      </S.InputForm>
    </S.RegisterContainer>
  );
}
