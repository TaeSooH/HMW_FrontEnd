import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import * as S from "./style";

interface IProp {
  name: string;
}

export default function Main(props: IProp) {
  return (
    <S.Container>
      <Header username={props.name} />
      <S.SectionOne>
        <S.LeftBox>
          <S.Title>영어 단어 암기를 편하게!</S.Title>
          <S.FirContent>
            쉽고,
            <br />
            빠르게,
            <br />
            영어 단어 성적 올리자!
          </S.FirContent>
        </S.LeftBox>
        <S.RightBox>
          <S.ExText>
            <S.AniWord delayTime={"0.5s"}>Helping</S.AniWord>
            <S.AniWord delayTime={"1s"}>Memorize</S.AniWord>
            <S.AniWord delayTime={"1.5s"}>Words</S.AniWord>
          </S.ExText>
        </S.RightBox>
      </S.SectionOne>
      <S.SectionTwo>
        <S.SubTitle>단어 세트를 편하게 등록해보세요</S.SubTitle>
        <S.GoSet
          as={Link}
          to="/memoset"
          state={{ username: props.name }}
          className="sec2_goSet"
        >
          바로가기
        </S.GoSet>
        <S.SecContent>
          <img src="/addSet.png" alt="사진이 없음" />
        </S.SecContent>
      </S.SectionTwo>
      <S.SectionThree>
        <S.SubTitle>단어를 등록하고, 등록한 단어를 암기해보세요</S.SubTitle>
        <S.ThirdContent>
          <S.RegisterBox>
            <S.RegisterTitle>단어 등록</S.RegisterTitle>
            <S.RegisterImg src="/reg.png" alt="사진이 없음" />
          </S.RegisterBox>
          <S.MemoBox>
            <S.MemoTitle>단어 암기</S.MemoTitle>
            <S.MemoImg src="/memo.png" alt="사진이 없음" />
          </S.MemoBox>
        </S.ThirdContent>
      </S.SectionThree>
      <S.SectionFour>
        <S.SubTitle>모르는 단어는 검색해보기!</S.SubTitle>
        <S.GoSearch
          as={Link}
          to="/search"
          state={{ username: props.name }}
          className="sec4_goSearch"
        >
          바로가기
        </S.GoSearch>
        <S.FourthBox>
          <S.SearchImg src="/search_content.png" alt="사진이 없음" />
        </S.FourthBox>
      </S.SectionFour>
    </S.Container>
  );
}
