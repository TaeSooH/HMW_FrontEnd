import styled from "styled-components";
export const WordContainer = styled.div`
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
`;
export const Times = styled.span`
  position: relative;
  left: 20px;
  top: 17px;
  font-size: 25px;
`;
export const RightSide = styled.div`
  position: relative;
  right: 35px;
  bottom: 18px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 5%;
`;
export const FuncBtn = styled.span`
  font-size: 20px;
  height: 25px;
  line-height: 25px;
  background-color: rgb(113, 182, 255);
  text-align: center;
  border-radius: 1000px;
  color: white;
  cursor: pointer;
`;
