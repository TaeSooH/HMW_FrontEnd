import React from "react";
import * as S from "./style";

interface IWord {
  idx: number;
  word: string;
  mean: string;
}

const SharedWord = (props: IWord) => {
  return (
    <S.WordContainer>
      <S.Times>{props.idx + 1}</S.Times>
      <S.WordBox>
        <S.Word>{props.word}</S.Word>
        <S.Word>{props.mean}</S.Word>
      </S.WordBox>
      <S.RightSide></S.RightSide>
    </S.WordContainer>
  );
};

export default SharedWord;
