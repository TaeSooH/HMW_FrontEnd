import styled from "styled-components";

export const ClassBox = styled.div`
  width: 70%;
  height: 80px;
  border-radius: 15px;
  margin: 3% auto;
  display: flex !important;
  flex-direction: row !important;
  align-items: center;
  justify-content: space-evenly;
  box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.4) !important;
  border-left: 10px solid #1f8bf7;
  cursor: pointer;
`;
export const Title = styled.p`
  font-size: 30px;
  font-weight: 600;
`;
export const Owner = styled.span`
  font-size: 20px;
  color: #666;
`;
export const Words = styled(Owner)`
  color: black;
`;
