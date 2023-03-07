import styled from "styled-components";
import * as S from "../../pages/WordList/style";
export const WordContainer = styled.div`
  position: relative;
  width: 100%;
  height: 60px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin: 20px;
`;
export const WordBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;
export const Word = styled.div`
  width: 40%;
  border-radius: 20px;
  line-height: 55px;
  height: 55px;
  padding-left: 15px;
  font-size: 25px;
  background-color: rgb(186, 229, 254);
  box-shadow: 1px 2px 4px 2px rgb(44, 121, 177);
  box-sizing: border-box;

  &:nth-child(2) {
    margin-right: 6%;
  }
`;
export const Times = styled.span`
  position: absolute;
  left: 10px;
  top: 17px;
  font-size: 25px;
`;
export const RightSide = styled.div`
  position: absolute;
  right: 35px;
  bottom: 3px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  /* align-items: center; */
  width: 5%;
  height: 100%;
`;
export const FuncBtn = styled.span`
  font-size: 20px;
  height: 25px;
  width: 100%;
  line-height: 25px;
  background-color: rgb(113, 182, 255);
  text-align: center;
  border-radius: 1000px;
  color: white;
  cursor: pointer;
`;
export const PopupContainer = styled(S.PopupContainer)``;
export const PopupSetName = styled(S.PopupSetName)``;
export const PopupInput = styled(S.SetInput)``;
export const PopupBottom = styled(S.PopupBottom)``;
export const PopupTop = styled(S.PopupTop)``;
export const Title = styled(S.Title)``;
export const PopupSubmit = styled(S.PopupSubmit)``;
