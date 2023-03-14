import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
`;
export const Content = styled.div`
  width: 100%;
  height: 88vh;
  display: flex;
  flex-direction: row;
`;
export const ClassInfo = styled.div`
  width: 25%;
  height: 100%;
  border-right: 1px solid rgb(237, 239, 245);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
`;
export const ListBox = styled.div`
  width: 75%;
  /* height: 100%; */
  text-align: center;
  /* align-items: center; */
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;
export const ClassName = styled.h2`
  font-size: 5vh;
  font-weight: 600;
  margin-top: 30%;
`;
export const Teacher = styled.p`
  font-size: 4vh;
  margin-top: 10%;
`;
export const TokenBox = styled.div`
  width: 60%;
  height: 7%;
  margin-top: 30%;
`;
export const Token = styled.div`
  width: 100%;
  height: 100%;
  background-color: #1f8bf7;
  border-radius: 10px;
  color: white;
  text-align: center;
  line-height: 220%;
  font-size: 3vh;
  font-weight: 600;
  margin-top: 10%;
`;
export const Text = styled.p`
  font-size: 2.3vh;
  text-align: center;
`;
