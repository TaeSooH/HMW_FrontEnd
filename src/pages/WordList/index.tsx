import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { GrAddCircle } from "react-icons/gr";
import Header from "../../components/Header";
import * as S from "./style";
import Word from "../../components/Word/index";
import Popup from "reactjs-popup";
import axios from "axios";
import { DefaultSerializer } from "v8";

interface IProp {
  name: string;
}
interface IWord {
  word: string;
  meaning: string;
  id: number;
}

const WordList = (props: IProp) => {
  const { id } = useParams<string>();
  const [modalOpened, setModalOpened] = useState(false);
  const [word, setWord] = useState("");
  const [meaning, setMeaning] = useState("");
  const [words, setWords] = useState([]);
  const [set_name, setSet_name] = useState("");
  const [loading, setLoading] = useState(true);
  const resultList = words.map((word: IWord, idx: number) => (
    <Word
      word={word.word}
      mean={word.meaning}
      id={word.id}
      idx={idx}
      setId={id}
    />
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
    document.addEventListener("keydown", enter, true);
    console.log(id);
    getWords();
  }, []);
  const enter = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      setModalOpened(true);
    }
  };
  if (loading) return <div>...</div>;
  return (
    <S.Container>
      <Header username={props.name} />
      <S.ListContainer>
        <S.ListBox>
          <S.ListHeader>
            <S.SetName>{set_name}</S.SetName>
            <S.TopLine></S.TopLine>
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

          <S.ListFooter>
            <S.BottomLine></S.BottomLine>
            <S.AddIcon
              as={GrAddCircle}
              size="120"
              color="black"
              onKeyDown={() => {}}
              onClick={() => {
                setModalOpened(true);
                setWord("");
                setMeaning("");
              }}
            />
            <S.BottomLine></S.BottomLine>
          </S.ListFooter>
          <S.BottomBox></S.BottomBox>
        </S.ListBox>
      </S.ListContainer>
      <Popup
        open={modalOpened}
        onClose={() => {
          setModalOpened(false);
        }}
      >
        <S.PopupContainer
          onSubmit={async (e) => {
            e.preventDefault();
            if (word !== "" && meaning !== "") {
              const form = {
                word: word,
                meaning: meaning,
              };
              const response = await axios.put(
                `https://helpingmemo.ga/word/setWords/${id}`,
                form
              );
              setModalOpened(false);
              setWord("");
              setMeaning("");
              alert(response.data);
              async function getWords() {
                const response = await axios.get(
                  `https://helpingmemo.ga/word/getWords/?setId=${id}`
                );
                setWords(response.data);
              }
              getWords();
            } else {
              alert("단어나 의미가 없습니다!");
            }
          }}
        >
          <S.PopupSetName>암기할 단어 입력</S.PopupSetName>
          <S.PopupBottom>
            <S.PopupTop>
              <S.Title>단어</S.Title>
              <S.SetInput
                onChange={(e) => {
                  setWord(e.target.value);
                }}
                type="text"
                value={word}
              />
            </S.PopupTop>
            <S.PopupTop>
              <S.Title>의미</S.Title>
              <S.SetInput
                onChange={(e) => {
                  setMeaning(e.target.value);
                }}
                type="text"
                value={meaning}
              />
            </S.PopupTop>
          </S.PopupBottom>
          <S.PopupSubmit type="submit" value="추가하기" />
        </S.PopupContainer>
      </Popup>
      <S.BottomMenu>
        <S.InnerBox>
          <S.Start as={Link} to={`/memoset/wordlist/memorize/${id}/`}>
            암기학습
          </S.Start>
          <S.MemorizeWay>단어 또는 의미를 보고 맞추기</S.MemorizeWay>
        </S.InnerBox>
        <S.InnerBox>
          <Link
            className="start_memorizing"
            to={`/memoset/wordlist/spelling/${id}/`}
          >
            스펠학습
          </Link>
          <S.MemorizeWay>의미를 보고 단어의 스펠링을 맞추기</S.MemorizeWay>
        </S.InnerBox>
      </S.BottomMenu>
    </S.Container>
  );
};

export default WordList;
