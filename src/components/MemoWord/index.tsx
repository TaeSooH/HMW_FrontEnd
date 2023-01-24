import React from "react";
import { GiSpeaker } from "react-icons/gi";
import { CgPlayPause } from "react-icons/cg";
import { useState } from "react";
import { useSpeech } from "react-web-voice";
import * as S from "./style";
interface IMemoWord {
  setIsClick(isClick: boolean): void;
  isClick: boolean;
  length: number;
  set_name: string;
  data: {
    word: string;
    meaning: string;
  };
  index: number;
}

export default function MemoWord({
  setIsClick,
  isClick,
  length,
  set_name,
  data,
  index,
}: IMemoWord) {
  const [playing, setPlaying] = useState(false);
  const { messages, speak } = useSpeech();
  async function speech(text: string) {
    setPlaying(true);
    const utterance = await speak({
      text: text,
      volume: 0.5,
      rate: 1,
      pitch: 1,
    });
    setPlaying(false);
  }
  return (
    <S.MContainer>
      <span>{set_name}</span>
      <span>
        []
        {index + 1}/{length}
      </span>
      {/* 세트 이름이랑 N번째 단어 span 스타일 체크 필요함 */}
      <S.ContentBox>
        <S.VoiceBtn onClick={() => speech(data.word)}>
          {playing ? <CgPlayPause size="30" /> : <GiSpeaker size="30" />}
        </S.VoiceBtn>
        <S.InnerBox>
          <S.Word>{data.word}</S.Word>
          {isClick ? (
            <S.ClickedBox></S.ClickedBox>
          ) : (
            <S.NonClickedBox></S.NonClickedBox>
          )}
          <S.Meaning>{data.meaning}</S.Meaning>
        </S.InnerBox>
      </S.ContentBox>
      <S.Space
        onClick={() => {
          setIsClick(true);
        }}
      >
        space
      </S.Space>
    </S.MContainer>
  );
}
