import React, { LegacyRef, RefObject, useEffect, useState } from "react";
import Header from "../../components/Header";
import WordSet from "../../components/WordSet/WordSet";
import Popup from "reactjs-popup";
import * as S from "./style";
import { IoAddOutline } from "react-icons/io5";
import { Link, useHref, useLocation } from "react-router-dom";
import { useHorizontalScroll } from "../../hooks/useSideScroll";
import axios from "axios";

interface IProp {
  name: string;
}
interface ISetData {
  title: string;
  id: number;
  word_length: number;
}

export default function MemoSet(props: IProp) {
  const [names, setNames] = useState([]);
  const [listName, setListName] = useState("");
  const nameList = names.map((data: ISetData, idx: number) => (
    <WordSet
      key={idx}
      name={data.title}
      id={data.id}
      length={data.word_length}
    />
  ));
  const [isLoading, setIsLoading] = useState(true);
  const [modalOpened, setModalOpened] = useState(false);
  const [isLogged, setIsLogged] = useState(false);
  const scrollRef: any = useHorizontalScroll();
  useEffect(() => {
    setIsLoading(true);
    console.log(props.name);
    if (localStorage.getItem("isLogged") === "true") {
      setIsLogged(true);
      async function GetWordSet() {
        await axios
          .get(`https://helpingmemo.ga/wordSet/getWordSet?owner=${props.name}`)
          .then((response) => {
            console.log(response.data);
            setNames(response.data);
          });
        setIsLoading(false);
      }
      GetWordSet();
    } else {
      alert("로그인이 필요한 작업입니다.");
      window.location.replace("/login");
    }
  }, []);
  const setWordSet = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (listName) {
      const form = new FormData();
      form.append("title", listName);
      form.append("owner", props.name);
      axios
        .post("https://helpingmemo.ga/wordSet/setWordSet", form)
        .then((response) => {
          setListName("");
          setModalOpened(false);
          axios
            .get(
              `https://helpingmemo.ga/wordSet/getWordSet?owner=${props.name}`
            )
            .then((response) => {
              console.log(response.data);
              setNames(response.data);
            })
            .catch((err) => {
              console.log(err);
            });
        })
        .catch((error) => {
          alert(error);
        });
    } else {
      alert("이름이 입력되지 않았습니다.");
    }
  };
  if (isLoading || !isLogged) return <div>...</div>;
  return (
    <>
      <S.MemoSetContainer>
        <Header username={props.name} />
        {names.length < 1 ? (
          <S.NoSet> 아직 세트가 없습니다 . . .</S.NoSet>
        ) : names.length <= 6 ? (
          <S.MemoSetBox ref={scrollRef}>{nameList}</S.MemoSetBox>
        ) : (
          <S.LongMemoSetBox ref={scrollRef}></S.LongMemoSetBox>
        )}
        <Popup
          open={modalOpened}
          onClose={() => {
            setModalOpened(false);
            setListName("");
          }}
        >
          <S.PopupInput>
            <S.InputText>단어장의 이름을 입력해주세요.</S.InputText>
            <form onSubmit={setWordSet}>
              <S.SetNameInput
                value={listName}
                onChange={(e) => {
                  setListName(e.target.value);
                }}
                type="text"
              />
              <S.PopSubmit type="submit" value="enter" />
            </form>
          </S.PopupInput>
        </Popup>
        <S.AddMemoSet
          onClick={() => {
            setModalOpened(true);
          }}
        >
          새로 만들기
        </S.AddMemoSet>
      </S.MemoSetContainer>
    </>
  );
}
