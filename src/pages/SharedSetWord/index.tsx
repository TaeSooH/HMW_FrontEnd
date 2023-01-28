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

const SharedSetWord = (props: IProp) => {
  const params = useParams();
  const id = params.setId;
  const [words, setWords] = useState([]);
  const [set_name, setSet_name] = useState("");
  const [loading, setLoading] = useState(true);
  const resultList = words.map((word: IWord, idx) => (
    <SharedWord word={word.word} mean={word.meaning} idx={idx} />
  ));
  useEffect(() => {
    async function getWords() {
      const response = await axios.get(
        `https://helpingmemo.ga/word/getWords/?setId=${id}`
      );
      setWords(response.data);
      setLoading(false);
    }
    axios
      .get(`https://helpingmemo.ga/wordSet/getWordSetTitle/?setId=${id}`)
      .then((response) => {
        setSet_name(response.data);
      })
      .catch((err) => {
        alert("서버 오류");
        window.location.replace("/");
      });
    console.log(id);
    getWords();
  }, []);
  if (loading) return <div>...</div>;
  return (
    <S.Container>
      <Header username={props.name} />
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
