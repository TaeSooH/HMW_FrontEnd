import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as S from "./style";
import Popup from "reactjs-popup";
import axios from "axios";

interface IWordSet {
  id: number;
  name: string;
  length: number;
}

const WordSet = ({ id, name, length }: IWordSet) => {
  const [modalOpened, setModalOpened] = useState(false);
  const [set_nameModal, setSet_nameModal] = useState(false);
  const [modifiedSetName, setModifiedSetName] = useState(name);

  async function deleteSet() {
    const check = window.confirm("정말로 삭제하시겠습니까?");
    if (check) {
      console.log(id);
      const response = await axios.put(
        `https://192.168.10.74/wordSet/deleteWordSet/${id}`
      );
      setModalOpened(false);
      window.location.replace("/memoset");
    }
  }
  async function shareSet() {
    try {
      const response = await axios.put(
        `https://192.168.10.74/wordSet/shareWordSet/${id}`
      );
      alert(response.data);
      window.location.replace("/memoset");
    } catch (error) {
      console.log(error);
    }
  }
  async function modifySetName(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      const response = await axios.put(
        `https://192.168.10.74/wordSet/modifyWordSet/${id}`,
        { title: modifiedSetName }
      );
      setSet_nameModal(false);
      window.location.replace("/memoset");
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <S.WordSetBox>
      <S.MainBox
        onClick={() => {
          setModalOpened(true);
        }}
      >
        <S.SetName>{name}</S.SetName>
        <span>단어 {length}개</span>
      </S.MainBox>
      <S.BottomBox></S.BottomBox>

      <Popup
        open={modalOpened}
        onClose={() => {
          setModalOpened(false);
        }}
      >
        <S.OptionList>
          <S.OptionButton as={Link} to={`/memoset/wordlist/${id}/`}>
            세트 확인하기
          </S.OptionButton>
          <S.OptionButton onClick={deleteSet}>세트 삭제하기</S.OptionButton>
          <S.OptionButton
            onClick={() => {
              setSet_nameModal(true);
              setModalOpened(false);
            }}
          >
            세트이름 변경
          </S.OptionButton>
          <S.OptionButton onClick={shareSet}>세트 공유하기</S.OptionButton>
          <S.OptionButton
            onClick={() => {
              setModalOpened(false);
            }}
          >
            돌아가기
          </S.OptionButton>
        </S.OptionList>
      </Popup>
      <Popup
        open={set_nameModal}
        onClose={() => {
          setSet_nameModal(false);
          setModifiedSetName(name);
        }}
      >
        <S.PopupContainer onSubmit={modifySetName}>
          <S.PopupTop>
            <S.PopupSetName>세트 이름</S.PopupSetName>
            <S.SetInput
              type="text"
              value={modifiedSetName}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setModifiedSetName(e.target.value);
              }}
            />
          </S.PopupTop>
          <S.PopupSubmit type="submit" value="변경하기" />
        </S.PopupContainer>
      </Popup>
    </S.WordSetBox>
  );
};

export default WordSet;
