import axios from "axios";
import React, { useState } from "react";
import Popup from "reactjs-popup";
import * as S from "./style";

interface IWord {
  idx: number;
  word: string;
  mean: string;
  id: number;
  setId?: string;
}

const Index = ({ idx, word, mean, id, setId }: IWord) => {
  const [modalOpened, setModalOpened] = useState<boolean>();
  const [modifiedWord, setModifiedWord] = useState(word);
  const [modifiedMeaning, setModifiedMeaning] = useState(mean);

  async function deleteWord() {
    const response = await axios.put(`/api/word/deleteWord/${id}`);
    alert(response.data);
    window.location.replace(`/memoset/wordlist/${setId}`);
  }

  return (
    <S.WordContainer>
      <S.Times>{idx + 1}</S.Times>
      <S.WordBox>
        <S.Word>{word}</S.Word>
        <S.Word>{mean}</S.Word>
      </S.WordBox>
      <S.RightSide>
        <S.FuncBtn
          onClick={() => {
            setModalOpened(true);
            setModifiedWord(word);
            setModifiedMeaning(mean);
          }}
        >
          수정
        </S.FuncBtn>
        <S.FuncBtn onClick={deleteWord}>삭제</S.FuncBtn>
      </S.RightSide>
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
            const form = {
              word: modifiedWord,
              meaning: modifiedMeaning,
            };
            const response = await axios.put(
              `https://192.168.10.74/word/modifyWord/${id}`,
              form
            );
            setModalOpened(false);
            alert(response.data);
            window.location.replace("/memoset/wordlist");
          }}
        >
          <p>수정할 단어 입력</p>
          <div className="popup_bot">
            <div className="popup_top">
              <span>단어</span>
              <input
                value={modifiedWord}
                onChange={(e) => {
                  setModifiedWord(e.target.value);
                }}
                type="text"
              />
            </div>
            <div className="popup_top">
              <span>의미</span>
              <input
                value={modifiedMeaning}
                onChange={(e) => {
                  setModifiedMeaning(e.target.value);
                }}
                type="text"
              />
            </div>
          </div>
          <input className="popup_word_submit" type="submit" value="수정하기" />
        </form>
      </Popup>
    </S.WordContainer>
  );
};

export default Index;
