import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import WordSet from "../../components/WordSet";
import Classroom from "../../components/Classroom";
import * as S from "./style";
import { useRecoilValue } from "recoil";
import { classInfo } from "../../components/states";
import { IClass } from "../../components/ClassList/index";

interface IProps {
  name: string;
}
interface IWordSet {
  id: number;
  isShared: boolean;
  owner: {
    email: string;
    id: number;
    password: string;
    role: number;
    signupVerifyToken: string;
    username: string;
    verified: number;
  };
  title: string;
  wordsLength: number;
}

const Index = ({ name }: IProps) => {
  const { classId } = useParams();
  const data = useRecoilValue<IClass>(classInfo);
  const [list, setList] = useState<IWordSet[]>([]);
  useEffect(() => {
    axios
      .get(`/api/class/getWordSetInClass?classId=${classId}`)
      .then((res) => {
        console.log(res.data);
        setList(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <S.Container>
      <Header username={name} />
      <S.Content>
        <S.ClassInfo>
          <S.ClassName>{data.title}</S.ClassName>
          <S.Teacher>{data.owner.username} 선생님의 수업</S.Teacher>
          {data.owner.role === 1 ? (
            <S.TokenBox>
              <S.Text>버튼을 눌러 학생들에게 수업 코드를 보여주세요!</S.Text>
              <S.Token>수업 코드</S.Token>
            </S.TokenBox>
          ) : (
            ""
          )}
        </S.ClassInfo>
        <S.ListBox>
          {/* {list.map((data) => (
            <Classroom
              title={data.title}
              owner={data.owner.username}
              wordLength={data.wordsLength}
              setId={data.id}
            />
          ))} */}
          <Classroom
            title={"단어장"}
            owner={"이태현"}
            wordLength={20}
            setId={10}
          />
        </S.ListBox>
      </S.Content>
    </S.Container>
  );
};

export default Index;
