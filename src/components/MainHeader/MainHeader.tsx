import React from "react";
import { Link } from "react-router-dom";
import * as S from "./style";

export default function MainHeader() {
  return (
    <S.MainHeader>
      <Link to="/">
        <S.MainLogo>HMW - Helping Memorize Words</S.MainLogo>
      </Link>
    </S.MainHeader>
  );
}
