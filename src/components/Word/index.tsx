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
    const response = await axios.delete(`/api/word/deleteWord/${id}`);
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
        <S.PopupContainer
          onSubmit={async (e) => {
            e.preventDefault();
            const form = {
              word: modifiedWord,
              meaning: modifiedMeaning,
            };
            const response = await axios.patch(
              `/api/word/modifyWord/${id}`,
              form
            );
            setModalOpened(false);
            // alert(response.data);
            window.location.replace(`/memoset/wordlist/${setId}`);
          }}
        >
          <S.PopupSetName>수정할 단어 입력</S.PopupSetName>
          <S.PopupBottom>
            <S.PopupTop>
              <S.Title>단어</S.Title>
              <S.PopupInput
                value={modifiedWord}
                onChange={(e) => {
                  setModifiedWord(e.target.value);
                }}
                type="text"
              />
            </S.PopupTop>
            <S.PopupTop>
              <S.Title>의미</S.Title>
              <S.PopupInput
                value={modifiedMeaning}
                onChange={(e) => {
                  setModifiedMeaning(e.target.value);
                }}
                type="text"
              />
            </S.PopupTop>
          </S.PopupBottom>
          <S.PopupSubmit type="submit" value="수정하기" />
        </S.PopupContainer>
      </Popup>
    </S.WordContainer>
  );
};

export default Index;
