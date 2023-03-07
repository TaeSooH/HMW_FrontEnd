import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import * as S from "./style";
import SharedWord from "../../components/SharedSetWord";
import axios from "axios";

interface IProp {
  name: string;
}
interface IWord {
  word: string;
  meaning: string;
  id: number;
}

const SharedSetWord = ({ name }: IProp) => {
  const params = useParams();
  const id = params.setId;
  const [words, setWords] = useState([]);
  const [set_name, setSet_name] = useState("");
  const [loading, setLoading] = useState(true);
  const resultList = words.map((word: IWord, idx) => (
    <SharedWord word={word.word} mean={word.meaning} idx={idx} />
  ));
  useEffect(() => {
    axios
      .get(`/api/wordSet/getOneWordSet?wordSetId=${id}`)
      .then((res) => {
        console.log(res.data);
        setSet_name(res.data.title);
      })
      .catch((err) => console.log(err));
    axios
      .get(`/api/word/getWords?setId=${id}`)
      .then((res) => {
        console.log(res.data);
        setWords(res.data);
      })
      .catch((err) => console.log(err));
    setLoading(false);
  }, []);
  if (loading) return <div>...</div>;
  return (
    <S.Container>
      <Header username={name} />
      <S.ListContainer>
        <S.ListBox>
          <S.ListHeader>
            <S.SetName>{set_name}</S.SetName>
            <S.MidLine></S.MidLine>
          </S.ListHeader>
          {words.length > 0 ? (
            <S.ListContent>
              <S.WordBox>
                <S.WordText>단어</S.WordText>
                <S.WordText>의미</S.WordText>
              </S.WordBox>
              {resultList}
            </S.ListContent>
          ) : (
            <S.NoWord>단어가 아직 없습니다.</S.NoWord>
          )}
          <S.BottomBox></S.BottomBox>
        </S.ListBox>
      </S.ListContainer>
    </S.Container>
  );
};

export default SharedSetWord;
