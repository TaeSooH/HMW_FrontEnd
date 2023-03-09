import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import Header from "../../components/Header";
import SharedSet from "../../components/SharedSet";
import * as S from "./style";

interface IProp {
  name: string;
}
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

const Share = (props: IProp) => {
  const [sharedSets, setSharedSet] = useState([]);
  useEffect(() => {
    axios
      .get("/api/wordSet/getSharedWordSet")
      .then((res) => {
        setSharedSet(res.data);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
        alert(err);
      });
  }, []);
  return (
    <>
      <S.Container>
        <Header username={props.name} />
        <S.ShareContainer>
          <S.FlexBox>
            {sharedSets.map((data: ISharedSet, index: number) => (
              <SharedSet
                key={index}
                id={data.id}
                title={data.title}
                wordsLength={data.wordsLength}
                owner={data.owner}
                isShared={data.isShared}
              />
            ))}
          </S.FlexBox>
        </S.ShareContainer>
      </S.Container>
    </>
  );
};

export default Share;
