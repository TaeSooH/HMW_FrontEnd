import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
`;
export const BackBtn = styled.img`
  width: 4%;
  height: 10vh;
  padding-left: 2%;
`;
export const SerLabel = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;
export const SerTitle = styled.div`
  width: 28%;
  font-size: 6vh;
  font-weight: bold;
`;
export const SerBar = styled.div`
  width: 30%;
  height: 8vh;
  font-size: 3vh;
  margin-top: 1%;
  box-shadow: 3px 3px 3px gray;
  border: 0.5px solid black;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
`;
export const SerBtn = styled.img`
  width: 8%;
  height: 65%;
  margin-left: 1%;
`;
export const SerInput = styled.input`
  border: none;
  width: 85%;
  height: 100%;
  font-size: 100%;
  background-color: transparent;
  &:focus {
    outline: none;
  }
`;
export const WordMean = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: #1f8bf7;
  height: 50%;
  display: flex;
  flex-direction: column;
`;
export const Loading = styled.div`
  margin-top: 10%;
  font-size: 230%;
  text-align: center;
`;
export const SerResult = styled.div`
  color: black;
  font-size: 170%;
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-top: 2%;
`;
export const Mean = styled.div`
  margin-top: 5%;
  text-align: center;
  width: 100%;
  color: white;
  font-size: 5vh;
`;
