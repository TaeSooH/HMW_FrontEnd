import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header/Header";
import "../styles/wordList.css";
import SharedWord from "../components/SharedWord";
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
          <div className="Bottom_box"></div>
        </div>
      </div>
    </div>
  );
};

export default SharedSetWord;
