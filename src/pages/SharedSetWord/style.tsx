import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
`;
export const ListContainer = styled.div`
  width: 100%;
  height: 88%;
  display: flex;
  justify-content: center;
`;
export const ListBox = styled.div`
  width: 80%;
  height: auto;
  margin-top: 40px;
`;
export const ListHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
`;
export const SetName = styled.div`
  display: inline-block;
  width: auto;
  font-size: 40px;
  margin-bottom: 10px;
`;
export const MidLine = styled.hr`
  width: 100%;
  height: 5px;
  background-color: black;
  border-radius: 1000px;
`;
export const ListContent = styled.div`
  width: 100%;
  height: auto;
`;
export const WordBox = styled.div`
  width: 100%;
  height: 70px;
  line-height: 90px;
  display: flex;
  justify-content: space-around;
`;
export const WordText = styled.span`
  font-size: 25px;
  margin-left: 20px;
`;
export const NoWord = styled.div`
  margin-top: 3%;
  text-align: center;
  font-size: 25px;
`;

export const BottomBox = styled.div`
  height: 25vh;
`;
