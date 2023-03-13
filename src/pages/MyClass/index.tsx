import axios from "axios";
import React, { useEffect, useState } from "react";
import Popup from "reactjs-popup";
import ClassList from "../../components/ClassList";
import Header from "../../components/Header";
import * as S from "./style";

interface IClass {
  id: number;
  joinToken: string;
  name: string;
  owner: {
    email: string;
    id: number;
    password: string;
    role: number;
    signupVerifyToken: string;
    username: string;
    verified: 2;
  };
}

const Index = ({ name }) => {
  const [modalOpened, setModalOpened] = useState(false);
  const [token, setToken] = useState("");
  const [classes, setClasses] = useState([]);
  useEffect(() => {
    if (name) {
      axios
        .get("api/class/getJoinedClasses")
        .then((res) => {
          setClasses(res.data);
          console.log(res.data);
        })
        .catch((err) => alert(err));
    } else {
      console.log("no good");
    }
  }, []);
  const joinClass = () => {
    axios
      .put("/api/class/joinClass", { token: token })
      .then((res) => alert(res.data))
      .catch((err) => alert(err));
  };
  return (
    <S.Container>
      <Header username={name} />
      <S.ClassListBox>
        {classes.length < 1 ? (
          <S.NoClass> 아직 수업이 없습니다 . . .</S.NoClass>
        ) : (
          classes.map((data: IClass) => (
            <ClassList classId={data.id} owner={data.owner} title={data.name} />
          ))
        )}
      </S.ClassListBox>
      <Popup
        open={modalOpened}
        onClose={() => {
          setModalOpened(false);
          setToken("");
        }}
      >
        <S.PopupInput>
          <S.InputText>선생님께 받은 수업코드를 입력해주세요.</S.InputText>
          <S.PopupForm onSubmit={joinClass}>
            <S.SetNameInput
              value={token}
              onChange={(e) => {
                setToken(e.target.value);
              }}
              type="text"
            />
            <S.PopSubmit type="submit" value="enter" />
          </S.PopupForm>
        </S.PopupInput>
      </Popup>
      <S.AddClass
        onClick={() => {
          setModalOpened(true);
        }}
      >
        수업 참여하기
      </S.AddClass>
    </S.Container>
  );
};

export default Index;
