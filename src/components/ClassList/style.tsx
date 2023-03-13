import styled from "styled-components";

export const LinkTo = styled.a`
  color: white;
  text-decoration: none;
  color: black;
`;
export const ClassBox = styled.div`
  width: 15vw;
  height: 25vh;
  background-color: white;
  margin-top: 4.5%;
  margin-left: 8%;
  box-shadow: 10px 10px 5px 5px rgba(74, 74, 74, 0.3);
  border-radius: 10px;
  cursor: pointer;
  &:nth-child(-n + 4) {
    margin-top: 2%;
  }
`;
export const TopBox = styled.div`
  width: 100%;
  height: 40%;
  background-color: #1f8bf7;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;
export const Title = styled.p`
  text-align: center;
  line-height: 290%;
  font-size: 30px;
  color: white;
  font-weight: 500;
`;
export const SubTitle = styled.p`
  text-align: center;
  font-size: 20px;
  line-height: 500%;
`;
