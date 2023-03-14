import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import * as S from "./style";

interface IProps {
  name: string;
}

const Index = ({ name }: IProps) => {
  const { classId } = useParams();
  const [list, setList] = useState([]);
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
    </S.Container>
  );
};

export default Index;
