import styled from "styled-components";
import * as S from "../SharedSetWord/style";
import * as D from "../../components/WordSet/style";

export const Container = styled(S.Container)``;
export const ListContainer = styled(S.ListContainer)``;
export const ListBox = styled(S.ListBox)``;
export const ListHeader = styled(S.ListHeader)``;
export const SetName = styled(S.SetName)``;
export const TopLine = styled(S.MidLine)``;
export const ListFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const BottomLine = styled.hr`
  width: 100%;
  height: 5px;
  border-radius: 1000px;
  background-color: black;
`;
export const AddIcon = styled.svg`
  border: none;
  cursor: pointer;
`;
export const ListContent = styled(S.ListContent)``;
export const WordBox = styled(S.WordBox)``;
export const WordText = styled(S.WordText)``;
export const NoWord = styled(S.NoWord)``;
export const BottomBox = styled(S.BottomBox)``;
export const PopupContainer = styled(D.PopupContainer)``;
export const PopupBottom = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;
export const PopupTop = styled(D.PopupTop)``;
export const PopupSetName = styled(D.PopupSetName)``;
export const Title = styled(D.Title)``;
export const SetInput = styled(D.SetInput)``;
export const PopupSubmit = styled(D.PopupSubmit)``;
export const BottomMenu = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 25vh;
  background-color: #ffffff;
  box-shadow: 3px 3px 10px 10px rgb(192, 192, 192);
  display: flex;
  justify-content: center;
`;
export const InnerBox = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  margin: 40px;
  &:nth-child(1) {
    margin-right: 75px;
  }
`;
// .Bottom_menu span {
//   background-color: #1f8bf7;
//   border-radius: 300px;
//   width: 60%;
//   height: 40px;
//   text-align: center;
//   line-height: 40px;
//   color: white;
//   font-weight: bold;
// }
export const MemorizeWay = styled.p``;
export const Start = styled.a`
  background-color: #1f8bf7;
  border-radius: 300px;
  width: 60%;
  height: 40px;
  text-align: center;
  line-height: 40px;
  color: white;
  font-weight: bold;
`;
