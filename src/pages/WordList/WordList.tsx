import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { GrAddCircle } from "react-icons/gr";
import Header from "../../components/Header/Header";
import "./WordList.css";
import Word from "../../components/Word/Word";
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
    <div className="container">
      <Header username={props.name} />
      <div className="wordList_container">
        <div className="wordList_box">
          <div className="wordList_header">
            <div className="setName">{set_name}</div>
            <hr></hr>
          </div>
          {words.length > 0 ? (
            <div className="wordList_content">
              <div className="word_classification">
                <span>단어</span>
                <span>의미</span>
              </div>
              {resultList}
            </div>
          ) : (
            <div className="noWords">단어가 아직 없습니다.</div>
          )}

          <div className="wordList_footer">
            <hr></hr>
            <GrAddCircle
              size="120"
              color="black"
              className="wordList_addIcon"
              onKeyDown={() => {}}
              onClick={() => {
                setModalOpened(true);
                setWord("");
                setMeaning("");
              }}
            />
            <hr></hr>
          </div>
          <div className="Bottom_box"></div>
        </div>
      </div>

      <Popup
        open={modalOpened}
        onClose={() => {
          setModalOpened(false);
        }}
      >
        <form
          className="popup_word_container"
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
          <p>암기할 단어 입력</p>
          <div className="popup_bot">
            <div className="popup_top">
              <span>단어</span>
              <input
                onChange={(e) => {
                  setWord(e.target.value);
                }}
                type="text"
                value={word}
              />
            </div>
            <div className="popup_top">
              <span>의미</span>
              <input
                onChange={(e) => {
                  setMeaning(e.target.value);
                }}
                type="text"
                value={meaning}
              />
            </div>
          </div>
          <input className="popup_word_submit" type="submit" value="추가하기" />
        </form>
      </Popup>
      <div className="Bottom_menu">
        <div className="Menu_inner_box">
          <Link
            className="start_memorizing"
            to={`/memoset/wordlist/memorize/${id}/`}
          >
            암기학습
          </Link>
          <p>단어 또는 의미를 보고 맞추기</p>
        </div>
        <div className="Menu_inner_box">
          <Link
            className="start_memorizing"
            to={`/memoset/wordlist/spelling/${id}/`}
          >
            스펠학습
          </Link>
          <p>의미를 보고 단어의 스펠링을 맞추기</p>
        </div>
      </div>
    </div>
  );
};

export default WordList;
