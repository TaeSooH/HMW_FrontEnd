import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import * as S from "./style";
import { user } from "../states";

interface ISharedSet {
  id: number;
  title: string;
  word_length: number;
  owner: string;
}

const SharedSet = ({ id, title, word_length, owner }: ISharedSet) => {
  const [userName, setUserName] = useRecoilState(user);
  const download = () => {
    if (userName === owner) {
      alert("본인이 공유한 세트입니다.");
    } else {
      const form = { owner: userName };
      console.log(userName);
      axios
        .post(
          `https://helpingmemo.ga/wordSet/downloadSharedWordSet/${id}?owner=${userName}`
        )
        .then((res) => {
          alert(res.data);
        })
        .catch((err) => {
          alert("다운로드 실패");
        });
    }
  };
  return (
    <>
      <S.SharedSet>
        <S.RowBox>
          <Link to={`/share/sharedSetWord/${id}/`}>
            <S.SetBox>
              <S.MainBox>
                <p>세트이름: {title}</p>
                <span>단어 개수: {word_length}개</span>
              </S.MainBox>
              <S.BottomBox></S.BottomBox>
            </S.SetBox>
          </Link>
          <S.RightSetBox>
            <S.SetName>세트이름 : {title}</S.SetName>
            <S.Owner>유저이름 : {owner}</S.Owner>
          </S.RightSetBox>
        </S.RowBox>
        <S.Download onClick={download}>세트 다운로드</S.Download>
      </S.SharedSet>
    </>
  );
};

export default SharedSet;
