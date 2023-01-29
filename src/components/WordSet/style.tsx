import styled from "styled-components";
export const WordSetBox = styled.div`
  width: 200px;
  height: 200px;
  display: flex;
  flex-direction: column;
  box-shadow: 10px 10px 10px 10px #dcdcdc;
  background-color: white;
`;
export const SetName = styled.p`
  font-size: 40px !important;
  width: 80%;
  text-align: center;
  word-wrap: break-word;
  margin-top: 30px;
`;
export const MainBox = styled.div`
  width: 200px;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;
export const BottomBox = styled.div`
  width: 100%;
  height: 25px;
  background-color: #1f8bf7;
`;
export const OptionList = styled.div`
  position: fixed;
  left: 37.5%;
  width: 25%;
  height: 70%;
  bottom: 15%;
  background-color: #1f8bf7;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
`;
export const OptionButton = styled.button`
  margin-top: 3%;
  width: 80%;
  height: 15%;
  background-color: white;
  border-radius: 1000px;
  text-align: center;
  line-height: 350%;
  font-size: 3vh;
  cursor: pointer;
  text-decoration: none;
  margin: 10px 0;
  border: none;
`;
