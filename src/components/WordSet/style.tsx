import styled from "styled-components";
export const WordSetBox = styled.div`
  width: 200px;
  height: 200px;
  display: flex;
  flex-direction: column;
  box-shadow: 10px 10px 10px 10px #dcdcdc;
  background-color: white;
  cursor: pointer;
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
  color: white;
  border-radius: 1000px;
  text-align: center;
  line-height: 350%;
  font-size: 3vh;
  cursor: pointer;
  text-decoration: none;
  margin: 10px 0;
  border: none;
`;
export const PopupContainer = styled.form`
  width: 800px;
  height: 250px;
  background-color: #1f8bf7;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  border-radius: 30px;
`;
export const PopupSetName = styled.span`
  font-size: 25px;
  margin-bottom: 20px;
  color: white;
`;
export const Title = styled.p`
  font-size: 30px;
`;
export const PopupTop = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const SetInput = styled.input`
  width: 50%;
  height: 50px;
  border-radius: 15px;
  font-size: 25px;
  padding-left: 20px;
  border: none;
`;
export const PopupSubmit = styled.input`
  background-color: transparent;
  font-size: 40px;
  border: none;
`;
