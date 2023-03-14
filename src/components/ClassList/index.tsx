import axios from "axios";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { classInfo } from "../states";
import * as S from "./style";

export interface IClass {
  classId: number;
  title: string;
  token: string;
  owner: {
    email: string;
    id: number;
    password: string;
    role: number;
    signupVerifyToken: string;
    username: string;
    verified: 2;
  };
}

const Index = ({ classId, owner, title, token }: IClass) => {
  const [data, setData] = useRecoilState(classInfo);
  return (
    <S.LinkTo as={Link} to={`/myclass/inclass/${classId}`}>
      <S.ClassBox
        onClick={() => {
          setData({ classId, title, owner, token });
        }}
        className="hvr-sink"
      >
        <S.TopBox>
          <S.Title>{title}</S.Title>
        </S.TopBox>
        <S.SubTitle>{owner.username}의 수업</S.SubTitle>
      </S.ClassBox>
    </S.LinkTo>
  );
};

export default Index;
