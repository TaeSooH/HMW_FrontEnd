import React, { useEffect, useState } from "react";
import * as S from "./style";
import { MdOutlineNavigateNext } from "react-icons/md";
import { MdOutlineNavigateBefore } from "react-icons/md";
import { GiSpeaker } from "react-icons/gi";
import { CgPlayPause } from "react-icons/cg";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { useSpeech } from "react-web-voice";
import { IoMdArrowRoundBack } from "react-icons/io";
import MemoWord from "../../components/MemoWord";

interface IData {
  word: string;
  meaning: string;
}

const index = () => {
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
  useEffect(() => {
    async function getWords() {
      const response = await axios.get(
        `https://helpingmemo.ga/word/getWords/?setId=${id}`
      );
      setWordList(response.data);
    }
    async function getShuffles() {
      console.log("enter");
      const response = await axios.get(
        `https://helpingmemo.ga/word/getWords/?setId=${id}`
      );
      setShuffleList(response.data);
      setLoad(false);
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
    document.addEventListener("keydown", space, true);
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
  const space = (e: KeyboardEvent) => {
    if (e.key === " ") {
      setIsClick(true);
    }
  };
  const implShuffle = (array: IData[]) => {
    for (let index = array.length - 1; index > 0; index--) {
      const randomPosition = Math.floor(Math.random() * (index + 1));
      [array[index], array[randomPosition]] = [
        array[randomPosition],
        array[index],
      ];
    }
  };
  if (load) return <div>...</div>;
  if (!start)
    return (
      <S.MContainer>
        <S.CheckBox>
          <S.CheckTitle>
            적절한 모드와 방법으로 단어를 효율적으로 외우세요!
          </S.CheckTitle>
          <S.SetMode>
            <p>셔플모드</p>
            <S.Switch>
              <S.ShuffleCheck
                type={"checkbox"}
                onClick={() => {
                  implShuffle(shuffleList);
                  setShuffle(!shuffle);
                }}
              />
              <span className="slider_round"></span>
            </S.Switch>
          </S.SetMode>

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
            암기 학습 시작
          </button>
        </S.CheckBox>
      </S.MContainer>
    );
  return (
    <>
      <S.GoBack as={Link} to="/memoset">
        <IoMdArrowRoundBack size="20" /> 학습 종료
      </S.GoBack>
      {wordList.length !== 0 ? (
        <Carousel
          showThumbs={false}
          showIndicators={false}
          showStatus={false}
          renderArrowNext={(clickHandler, hasNext, labelNext) =>
            hasNext && (
              <S.NextBtn
                as={MdOutlineNavigateNext}
                onClick={() => {
                  clickHandler();
                  setIsClick(false);
                }}
                color="white"
                size="70"
              />
            )
          }
          renderArrowPrev={(clickHandler, hasPrev, labelPrev) =>
            hasPrev && (
              <S.BeforeBtn
                as={MdOutlineNavigateBefore}
                onClick={() => {
                  clickHandler();
                  setIsClick(false);
                }}
                color="white"
                size="70"
              />
            )
          }
        >
          <>
            {shuffle
              ? shuffleList.map((data: IData, index: number) => (
                  <S.MContainer>
                    <S.ContainerText>{set_name}</S.ContainerText>
                    <S.ContainerText>
                      {index + 1}/{wordList.length}
                    </S.ContainerText>
                    <S.ContentBox>
                      {way === "meaning" ? (
                        !isClick ? (
                          <S.VoiceBtn>
                            <GiSpeaker size="30" color="grey" />
                          </S.VoiceBtn>
                        ) : (
                          <S.VoiceBtn onClick={() => speech(data.word)}>
                            {playing ? (
                              <CgPlayPause size="30" />
                            ) : (
                              <GiSpeaker size="30" />
                            )}
                          </S.VoiceBtn>
                        )
                      ) : (
                        <S.VoiceBtn onClick={() => speech(data.word)}>
                          {playing ? (
                            <CgPlayPause size="30" />
                          ) : (
                            <GiSpeaker size="30" />
                          )}
                        </S.VoiceBtn>
                      )}
                      <S.InnerBox>
                        <S.Words>
                          {way === "word" ? data.word : data.meaning}
                        </S.Words>
                        <S.Answers>
                          {way === "word" ? data.meaning : data.word}
                        </S.Answers>
                        {isClick ? (
                          <S.NonClickedBox></S.NonClickedBox>
                        ) : (
                          <S.ClickedBox></S.ClickedBox>
                        )}
                      </S.InnerBox>
                    </S.ContentBox>
                    <S.SpaceButton
                      onClick={() => {
                        setIsClick(true);
                      }}
                    >
                      space
                    </S.SpaceButton>
                  </S.MContainer>
                ))
              : wordList.map((data: IData, index: number) => (
                  <S.MContainer>
                    <S.ContainerText>{set_name}</S.ContainerText>
                    <S.ContainerText>
                      {index + 1}/{wordList.length}
                    </S.ContainerText>
                    <S.ContentBox>
                      {way === "meaning" ? (
                        !isClick ? (
                          <S.VoiceBtn>
                            <GiSpeaker color="grey" size="30" />
                          </S.VoiceBtn>
                        ) : (
                          <S.VoiceBtn onClick={() => speech(data.word)}>
                            {playing ? (
                              <CgPlayPause size="30" />
                            ) : (
                              <GiSpeaker size="30" />
                            )}
                          </S.VoiceBtn>
                        )
                      ) : (
                        <S.VoiceBtn onClick={() => speech(data.word)}>
                          {playing ? (
                            <CgPlayPause size="30" />
                          ) : (
                            <GiSpeaker size="30" />
                          )}
                        </S.VoiceBtn>
                      )}
                      <S.InnerBox>
                        <S.Words>
                          {way === "word" ? data.word : data.meaning}
                        </S.Words>
                        <S.Answers>
                          {way === "word" ? data.meaning : data.word}
                        </S.Answers>
                        {isClick ? (
                          <S.NonClickedBox></S.NonClickedBox>
                        ) : (
                          <S.ClickedBox></S.ClickedBox>
                        )}
                      </S.InnerBox>
                    </S.ContentBox>
                    <S.SpaceButton
                      onClick={() => {
                        setIsClick(true);
                      }}
                    >
                      space
                    </S.SpaceButton>
                  </S.MContainer>
                ))}
          </>
          <S.MContainer>
            <div className="content_box finish">
              <span>finish!</span>
              <Link to="/memoset" className="backTo">
                돌아가기
              </Link>
            </div>
          </S.MContainer>
        </Carousel>
      ) : (
        <S.MContainer>
          <S.ContentBox>
            <p>단어가 아직 없습니다...</p>
            <S.Btns>
              <S.LinkTabs as={Link} to="/memoset">
                돌아가기
              </S.LinkTabs>
              <S.LinkTabs
                as={Link}
                state={{ set_name: set_name, id: id }}
                to="/memoset/wordlist"
              >
                단어 추가하러 가기
              </S.LinkTabs>
            </S.Btns>
          </S.ContentBox>
        </S.MContainer>
      )}
    </>
  );
};

export default index;
