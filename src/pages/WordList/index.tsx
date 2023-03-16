import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { GrAddCircle } from "react-icons/gr";
import Header from "../../components/Header";
import * as S from "./style";
import Word from "../../components/Word/index";
import Popup from "reactjs-popup";
import axios from "axios";

interface IProp {
  name: string;
}
interface IWord {
  word: string;
  meaning: string;
  id: number;
}

const WordList = ({ name }: IProp) => {
  const { setId } = useParams<string>();
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
      setId={setId}
    />
  ));
  useEffect(() => {
    document.addEventListener("keydown", enter, true);
    console.log(setId);
    axios
      .get(`/api/wordSet/getOneWordSet?wordSetId=${setId}`)
      .then((res) => {
        console.log(res.data);
        setSet_name(res.data.title);
      })
      .catch((err) => console.log(err));
    axios
      .get(`/api/word/getWords?setId=${setId}`)
      .then((res) => {
        console.log(res.data);
        setWords(res.data);
      })
      .catch((err) => console.log(err));
    setLoading(false);
  }, []);
  const enter = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      setModalOpened(true);
    }
  };
  if (loading) return <div>...</div>;
  return (
    <S.Container>
      <Header username={name} />
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
              color={"black"}
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
              const response = await axios.put(`/api/word/putWord/${setId}`, {
                word: word,
                meaning: meaning,
              });
              setModalOpened(false);
              setWord("");
              setMeaning("");
              axios
                .get(`/api/word/getWords?setId=${setId}`)
                .then((res) => setWords(res.data))
                .catch((err) => console.log(err));
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
          <S.Start
            className="hvr-grow"
            as={Link}
            to={`/memoset/wordlist/memorize/${setId}/`}
          >
            암기학습
          </S.Start>
          <S.MemorizeWay>단어 또는 의미를 보고 맞추기</S.MemorizeWay>
        </S.InnerBox>
        <S.InnerBox>
          <S.Start
            className="hvr-grow"
            as={Link}
            to={`/memoset/wordlist/spelling/${setId}/`}
          >
            스펠학습
          </S.Start>
          <S.MemorizeWay>의미를 보고 단어의 스펠링을 맞추기</S.MemorizeWay>
        </S.InnerBox>
      </S.BottomMenu>
    </S.Container>
  );
};

export default WordList;
