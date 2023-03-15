import React from "react";
import * as S from "./style";
import "hover.css";
import { Link } from "react-router-dom";

interface IClassSet {
  title: string;
  owner: string;
  wordLength: number;
  setId: number;
}

const Index = ({ title, owner, wordLength, setId }) => {
  return (
    <Link
      to={`/myclass/inclass/wordList/${setId}`}
      style={{ textDecorationLine: "none" }}
    >
      <S.ClassBox className="hvr-sink">
        <S.Title>{title}</S.Title>
        <S.Words>단어 개수 : {wordLength}개</S.Words>
        <S.Owner>{owner}님의 세트</S.Owner>
      </S.ClassBox>
    </Link>
  );
};

export default Index;
