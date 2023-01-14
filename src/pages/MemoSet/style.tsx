import styled from "styled-components";

export const MemoSetContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #f5f7fb;
`;
export const MemoSetBox = styled.div`
  margin-top: 130px;
  width: auto;
  height: 45%;
  display: flex;
  justify-content: center;
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;
export const LongMemoSetBox = styled.div`
  &::-webkit-scrollbar {
    display: none;
  }
`;
export const WordSetBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 30px;
  margin-bottom: 0;
  cursor: pointer;
`;
export const AddMemoSet = styled.div`
  width: auto;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  cursor: pointer;
  font-size: 40px;
`;
export const PopupInput = styled.div`
  position: fixed;
  left: 30%;
  width: 40%;
  height: 40%;
  bottom: 30%;
  background-color: #1f8bf7;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`;

export const InputText = styled.p`
  font-size: 3.5vh;
  font-weight: 700;
  margin-bottom: 3%;
`;
export const SetNameInput = styled.input`
  padding-left: 5%;
  height: 40%;
  width: 80%;
  font-size: 7vh;
  border-radius: 30px;
  border: none;
  margin-bottom: 3%;

  &:focus {
    border: none;
  }
`;
// .popup_input div {
//     margin-top: 3%;
//     width: 50%;
//     height: 20%;
//     background-color: white;
//     border-radius: 1000px;
//     text-align: center;
//     line-height: 250%;
//     font-size: 3vh;
//     cursor: pointer;
// }
export const PopSubmit = styled.input`
  width: fit-content;
  font-size: 70px;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const NoSet = styled.div`
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 60px;
`;
