import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import * as S from "./style";
import { user } from "../states";

interface ISharedSet {
  id: number;
  isShared: boolean;
  owner: {
    email: string;
    id: number;
    password: string;
    role: number;
    signupVerifyToken: string;
    username: string;
    verified: number;
  };
  title: string;
  wordsLength: number;
}

const SharedSet = ({ id, title, wordsLength, owner }: ISharedSet) => {
  const [userName, setUserName] = useRecoilState(user);
  const download = () => {
    if (userName === owner.username) {
      alert("본인이 공유한 세트입니다.");
    } else {
      const form = { owner: userName };
      console.log(userName);
      axios
        .get(`/api/wordSet/downloadSharedWordSet?setId=${id}`)
        .then((res) => {
          console.log(res);
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
              {owner.username}
            </S.SetName>
          </S.RightSetBox>
        </S.RowBox>
        <S.Download onClick={download}>세트 다운로드</S.Download>
      </S.SharedSet>
    </>
  );
};

export default SharedSet;
