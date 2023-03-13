import React from "react";
import Header from "../../components/Header";
import * as S from "./style";

interface IProps {
  name: string;
}

const index = ({ name }: IProps) => {
  return (
    <S.Container>
      <Header username={name} />
    </S.Container>
  );
};

export default index;
