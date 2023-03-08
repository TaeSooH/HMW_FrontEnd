import styled from "styled-components";
export const SharedSet = styled.div`
  margin: 25px auto;
  width: 80%;
  height: 300px;
  background-color: #b1cfff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  border-radius: 20px;
  box-shadow: 1px 1px 5px 5px rgb(216, 216, 216);
  margin-top: 60px;
`;
export const RowBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;
export const SetBox = styled.div`
  width: 200px;
  height: 200px;
`;
export const MainBox = styled.div`
  width: 200px;
  height: 175px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  font-size: 1.15vw;
  font-weight: 700;
  /* margin-right: 3%; */
`;
export const BottomBox = styled.div`
  width: 200px;
  height: 25px;
  background-color: #1f8bf7;
`;
export const RightSetBox = styled.div`
  width: calc(80% - 250px);
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  /* margin-left: 3%; */
  /* align-items: center; */
  /* justify-content: space-evenly; */
`;
export const SetName = styled.p`
  width: 100%;
  font-weight: bold;
  font-size: 1.1vw;
  text-align: center;
`;
export const Download = styled.button`
  font-size: 20px;
  height: 40px;
  width: 50%;
  border-radius: 5px;
  cursor: pointer;
  border: none;
`;
