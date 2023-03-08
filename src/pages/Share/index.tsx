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
  title: string;
  wordsLength: number;
  owner: string;
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
                id={data.id}
                title={data.title}
                word_length={data.wordsLength}
                owner={data.owner}
              />
            ))}
          </S.FlexBox>
        </S.ShareContainer>
      </S.Container>
    </>
  );
};

export default Share;
