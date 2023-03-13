import axios from "axios";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import * as S from "./style";

interface IClass {
  classId: number;
  title: string;
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

const index = ({ classId, owner, title }: IClass) => {
  return (
    <S.LinkTo as={Link} to={`/myclass/inclass/${classId}`}>
      <S.ClassBox>
        <S.TopBox>
          <S.Title>{title}</S.Title>
        </S.TopBox>
        <S.SubTitle>{owner.username}의 수업</S.SubTitle>
      </S.ClassBox>
    </S.LinkTo>
  );
};

export default index;
