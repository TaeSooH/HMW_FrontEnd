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
          `https://192.168.10.74/wordSet/downloadSharedWordSet/${id}?owner=${userName}`
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
                <p>눌러서 미리보기</p>
              </S.MainBox>
              <S.BottomBox></S.BottomBox>
            </S.SetBox>
          </Link>
          <S.RightSetBox>
            <S.SetName>
              세트이름
              <br />
              {title}
            </S.SetName>
            <S.SetName>
              유저이름
              <br />
              {owner}
            </S.SetName>
          </S.RightSetBox>
        </S.RowBox>
        <S.Download onClick={download}>세트 다운로드</S.Download>
      </S.SharedSet>
    </>
  );
};

export default SharedSet;
