import React, { useEffect, useState } from "react";
import "../Memorize/Memorize.css";
import { MdOutlineNavigateNext } from "react-icons/md";
import { MdOutlineNavigateBefore } from "react-icons/md";
import { GiSpeaker } from "react-icons/gi";
import { CgPlayPause } from "react-icons/cg";
import { Link, useLocation, useParams } from "react-router-dom";
import axios from "axios";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { useSpeech } from "react-web-voice";
import "./Spelling.css";
import { IoMdArrowRoundBack } from "react-icons/io";
import "animate.css";

interface IData {
  word: string;
  meaning: string;
}

const Spelling = () => {
  const [playing, setPlaying] = useState(false);
  const { messages, speak } = useSpeech();
  const [isClick, setIsClick] = useState(false);
  const [way, setWay] = useState("word");
  const [start, setStart] = useState(false);
  const [shuffle, setShuffle] = useState(false);
  const params = useParams();
  const id = params.setId;
  const [set_name, setSet_name] = useState("");
  const [wordList, setWordList] = useState([]);
  const [load, setLoad] = useState(true);
  const [shuffleList, setShuffleList] = useState([]);
  const [answer, setAnswer] = useState("");
  const [first, setFirst] = useState(true);
  useEffect(() => {
    async function getWords() {
      console.log("enter");
      const response = await axios.get(
        `https://helpingmemo.ga/word/getWords/?setId=${id}`
      );
      console.log(response.data);
      setWordList(response.data);
      console.log(load);
      console.log(wordList);
      console.log(shuffle);
    }
    async function getShuffles() {
      console.log("enter");
      const response = await axios.get(
        `https://helpingmemo.ga/word/getWords/?setId=${id}`
      );
      console.log(response.data);
      setShuffleList(response.data);
      console.log(load);
      setLoad(false);
      console.log(wordList);
      console.log(shuffle);
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
    getWords();
    getShuffles();
  }, []);
  async function speech(text: string) {
    setPlaying(true);
    const utterance = await speak({
      text: text,
      volume: 0.5,
      rate: 1,
      pitch: 1,
    });
    setPlaying(false);
  }
  const implShuffle = (array: IData[]) => {
    for (let index = array.length - 1; index > 0; index--) {
      const randomPosition = Math.floor(Math.random() * (index + 1));
      [array[index], array[randomPosition]] = [
        array[randomPosition],
        array[index],
      ];
    }
  };
  function inspect(ans: string, target: string) {
    if (ans === target) {
      setIsClick(true);
      setFirst(false);
    } else setIsClick(false);
    setFirst(false);
  }
  if (load) return <div>...</div>;
  if (!start)
    return (
      <div className="memorize_container">
        <div className="check">
          <p className="box_title">
            적절한 모드와 방법으로 단어를 효율적으로 외우세요!
          </p>
          <div className="setlist">
            <p>셔플모드</p>
            <label className="switch">
              <input
                type={"checkbox"}
                onClick={() => {
                  implShuffle(shuffleList);
                  setShuffle(!shuffle);
                }}
              />
              <span className="slider_round"></span>
            </label>
          </div>

          <div className="memorize_way">
            <p>학습 방법</p>
            <select
              onChange={(e) => {
                setWay(e.target.value);
                console.log(e.target.value);
                console.log(way);
              }}
            >
              <option value="word">단어 제시</option>
              <option value="meaning">의미 제시</option>
            </select>
          </div>
          <button
            className="startMemo"
            onClick={() => {
              setStart(true);
            }}
          >
            스펠 학습 시작
          </button>
        </div>
      </div>
    );
  return (
    <>
      <Link className="go_to_back" to="/memoset">
        <IoMdArrowRoundBack size="20" /> 학습 종료
      </Link>
      {wordList.length !== 0 ? (
        <Carousel
          showThumbs={false}
          showIndicators={false}
          showStatus={false}
          renderArrowNext={(clickHandler, hasNext, labelNext) =>
            hasNext && (
              <MdOutlineNavigateNext
                onClick={() => {
                  clickHandler();
                  setIsClick(false);
                  setFirst(true);
                  setAnswer("");
                }}
                className="next_word_button"
                color="white"
                size="70"
              />
            )
          }
          renderArrowPrev={(clickHandler, hasPrev, labelPrev) =>
            hasPrev && (
              <MdOutlineNavigateBefore
                onClick={() => {
                  clickHandler();
                  setIsClick(false);
                  setFirst(true);
                  setAnswer("");
                }}
                className="before_word_button"
                color="white"
                size="70"
              />
            )
          }
        >
          <>
            {shuffle
              ? shuffleList.map((data: IData, index: number) => (
                  <div className="memorize_container">
                    <span>{set_name}</span>
                    <span>
                      {index + 1}/{wordList.length}
                    </span>
                    <div className="content_box">
                      {way === "meaning" ? (
                        !isClick ? (
                          <button className="voicebtn">
                            <GiSpeaker size="30" color="grey" />
                          </button>
                        ) : (
                          <button
                            className="voicebtn"
                            onClick={() => speech(data.word)}
                          >
                            {playing ? (
                              <CgPlayPause size="30" />
                            ) : (
                              <GiSpeaker size="30" />
                            )}
                          </button>
                        )
                      ) : (
                        <button
                          className="voicebtn"
                          onClick={() => speech(data.word)}
                        >
                          {playing ? (
                            <CgPlayPause size="30" />
                          ) : (
                            <GiSpeaker size="30" />
                          )}
                        </button>
                      )}
                      <div className="inner_box">
                        <p>{way === "word" ? data.word : data.meaning}</p>
                        <hr
                          style={{
                            width: "100%",
                            height: "1px",
                            backgroundColor: "grey",
                          }}
                        ></hr>
                        <form
                          className="word_submit_form"
                          onSubmit={(e) => {
                            e.preventDefault();
                            if (way === "word") {
                              inspect(answer, data.meaning);
                            } else {
                              inspect(answer, data.word);
                            }
                          }}
                        >
                          <input
                            onChange={(e) => {
                              setAnswer(e.target.value);
                            }}
                            className={
                              first
                                ? "Spelling_input"
                                : isClick
                                ? "Spelling_right"
                                : "Spelling_wrong"
                            }
                            type="text"
                            value={answer}
                          />
                        </form>
                        {!first &&
                          (isClick ? (
                            <span className="inner_span">정답입니다!</span>
                          ) : (
                            <span
                              className="inner_span"
                              style={{ color: "red" }}
                            >
                              틀렸습니다!
                            </span>
                          ))}
                        {/* {isClick ? <span>정답입니다!</span> : <span style={{color:"red"}}>틀렸습니다!</span>} */}
                      </div>
                    </div>
                    <div
                      onClick={() => {
                        if (way === "word") {
                          inspect(answer, data.meaning);
                        } else {
                          inspect(answer, data.word);
                        }
                      }}
                      onKeyDown={(e) => {
                        console.log(e.key);
                        if (e.key === " ") {
                          if (way === "word") {
                            inspect(answer, data.meaning);
                          } else {
                            inspect(answer, data.word);
                          }
                        }
                      }}
                      className="space_button"
                    >
                      enter
                    </div>
                  </div>
                ))
              : wordList.map((data: IData, index: number) => (
                  <div className="memorize_container">
                    <span>{set_name}</span>
                    <span>
                      {index + 1}/{wordList.length}
                    </span>
                    <div className="content_box">
                      {way === "meaning" ? (
                        !isClick ? (
                          <button className="voicebtn">
                            <GiSpeaker color="grey" size="30" />
                          </button>
                        ) : (
                          <button
                            className="voicebtn"
                            onClick={() => speech(data.word)}
                          >
                            {playing ? (
                              <CgPlayPause size="30" />
                            ) : (
                              <GiSpeaker size="30" />
                            )}
                          </button>
                        )
                      ) : (
                        <button
                          className="voicebtn"
                          onClick={() => speech(data.word)}
                        >
                          {playing ? (
                            <CgPlayPause size="30" />
                          ) : (
                            <GiSpeaker size="30" />
                          )}
                        </button>
                      )}
                      <div className="inner_box">
                        <p>{way === "word" ? data.word : data.meaning}</p>
                        <hr
                          style={{
                            width: "100%",
                            height: "1px",
                            backgroundColor: "grey",
                          }}
                        ></hr>
                        <form
                          className="word_submit_form"
                          onSubmit={(e) => {
                            e.preventDefault();
                            if (way === "word") {
                              inspect(answer, data.meaning);
                            } else {
                              inspect(answer, data.word);
                            }
                          }}
                        >
                          <input
                            onChange={(e) => {
                              setAnswer(e.target.value);
                            }}
                            className={
                              first
                                ? "Spelling_input"
                                : isClick
                                ? "Spelling_right"
                                : "Spelling_wrong"
                            }
                            type="text"
                            value={answer}
                          />
                        </form>
                        {/* {isClick ? <span className='inner_span'>정답입니다!</span> : <span className='inner_span' style={{color:"red"}}>틀렸습니다!</span>} */}
                        {!first &&
                          (isClick ? (
                            <span className="inner_span">정답입니다!</span>
                          ) : (
                            <span
                              className="inner_span"
                              style={{ color: "red" }}
                            >
                              틀렸습니다!
                            </span>
                          ))}
                      </div>
                    </div>
                    <div
                      onClick={() => {
                        if (way === "word") {
                          inspect(answer, data.meaning);
                        } else {
                          inspect(answer, data.word);
                        }
                      }}
                      className="space_button"
                    >
                      enter
                    </div>
                  </div>
                ))}
          </>
          <div className="memorize_container">
            <div className="content_box finish">
              <span>finish!</span>
              <Link to="/memoset" className="backTo">
                돌아가기
              </Link>
            </div>
          </div>
        </Carousel>
      ) : (
        <div className="memorize_container">
          <div className="content_box non">
            <p>단어가 아직 없습니다...</p>
            <div className="bts">
              <Link className="back" to="/memoset">
                돌아가기
              </Link>
              <Link
                state={{ set_name: set_name, id: id }}
                to="/memoset/wordlist"
              >
                단어 추가하러 가기
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Spelling;
