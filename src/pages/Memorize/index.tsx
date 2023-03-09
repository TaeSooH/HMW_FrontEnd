import React, { useEffect, useState } from "react";
import * as S from "./style";
import { MdOutlineNavigateNext as Next } from "react-icons/md";
import { MdOutlineNavigateBefore } from "react-icons/md";
import { GiSpeaker } from "react-icons/gi";
import { CgPlayPause } from "react-icons/cg";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { useSpeech } from "react-web-voice";
import { IoMdArrowRoundBack } from "react-icons/io";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

interface IData {
  id: number;
  meaning: string;
  word: string;
  wordSetId: number;
}
interface Props {
  children: React.ReactChild;
}

const Index = () => {
  const [playing, setPlaying] = useState<boolean>(false);
  const { messages, speak } = useSpeech();
  const [isClick, setIsClick] = useState<boolean>(false);
  const [way, setWay] = useState("word");
  const [start, setStart] = useState<boolean>(false);
  const [shuffle, setShuffle] = useState<boolean>(false);
  const { setId } = useParams();
  const id = setId;
  const [set_name, setSet_name] = useState("");
  const [wordList, setWordList] = useState([]);
  const [load, setLoad] = useState<boolean>(true);
  const [shuffleList, setShuffleList] = useState<IData[]>([]);

  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
  };

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <S.NextBtn
        as={Next}
        size={70}
        color="white"
        onClick={() => {
          onClick();
          setIsClick(true);
        }}
      />
    );
  }

  useEffect(() => {
    // async function getWords() {
    //   const response = await axios.get(
    //     `/api/word/getWords?setId=${id}`
    //   );
    //   setWordList(response.data);
    // }
    // async function getShuffles() {
    //   console.log("enter");
    //   const response = await axios.get(
    //     `/api/word/getWords?setId=${id}`
    //   );
    //   setShuffleList(response.data);
    //   setLoad(false);
    // }
    // document.addEventListener("keydown", space, true);
    // getWords();
    // getShuffles();
    document.addEventListener("keydown", space, true);
    axios
      .get(`/api/word/getWords?setId=${id}`)
      .then((res) => {
        console.log(res.data);
        setShuffleList(res.data);
        implShuffle(shuffleList);
        setWordList(res.data);
      })
      .catch((err) => console.log(err));
    setLoad(false);
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
      setIsClick(false);
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
                  setShuffle(!shuffle);
                }}
              />
              <S.SliderRound></S.SliderRound>
            </S.Switch>
          </S.SetMode>

          <S.MemorizeWay>
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
          </S.MemorizeWay>
          <S.StartMemo
            onClick={() => {
              setStart(true);
            }}
          >
            암기 학습 시작
          </S.StartMemo>
        </S.CheckBox>
      </S.MContainer>
    );
  return (
    <>
      <S.GoBack as={Link} to="/memoset">
        <IoMdArrowRoundBack size="20" /> 학습 종료
      </S.GoBack>
      {wordList.length !== 0 ? (
        <>
          <Slider {...settings}>
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
                        <S.Meanings>
                          {way === "word" ? data.meaning : data.word}
                        </S.Meanings>
                        {isClick ? <S.ClickedBox /> : <S.NonClickedBox />}
                      </S.InnerBox>
                    </S.ContentBox>
                    <S.SpaceButton
                      onClick={() => {
                        setIsClick(false);
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
                        <S.Meanings>
                          {way === "word" ? data.meaning : data.word}
                        </S.Meanings>
                        {isClick ? <S.NonClickedBox /> : <S.ClickedBox />}
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
            <S.MContainer>
              <S.ContentBox>
                <S.FinishText>finish!</S.FinishText>
                <S.ToBack as={Link} to="/memoset">
                  돌아가기
                </S.ToBack>
              </S.ContentBox>
            </S.MContainer>
          </Slider>
        </>
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

export default Index;
