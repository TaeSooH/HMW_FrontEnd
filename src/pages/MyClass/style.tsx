import styled from "styled-components";
import * as S from "../MemoSet/style";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #f5f7fb;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const NoClass = styled(S.NoSet)`
  width: 100%;
  text-align: center;
`;
export const PopupInput = styled(S.PopupInput)``;
export const InputText = styled(S.InputText)``;
export const SetNameInput = styled(S.SetNameInput)``;
export const PopupForm = styled(S.PopupForm)``;
export const PopSubmit = styled(S.PopSubmit)``;
export const AddClass = styled(S.AddMemoSet)`
  margin-top: 2.5%;
`;
export const ClassListBox = styled(S.MemoSetBox)`
  margin-top: 1%;
  width: 100vw;
  height: 70vh;
  flex-wrap: wrap;
  &::-webkit-scrollbar {
    display: block;
  }
`;
