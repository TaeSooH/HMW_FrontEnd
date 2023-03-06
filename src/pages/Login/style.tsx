import styled from "styled-components";

export const LoginContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #edf1f7;
`;
export const LoginInput = styled.input`
  width: 25%;
  height: 11%;
  margin-bottom: 2%;
  border: 1px solid lightgray;
  padding-left: 1%;
  font-size: 2.5vh;
  box-shadow: 0 5px 5px gray;
  border-radius: 10px;

  &:focus {
    outline: none;
  }
`;

export const Submit = styled.button`
  width: 15%;
  height: 11%;
  border: none;
  background-color: #1f8bf7;
  box-shadow: 0 5px 5px gray;
  font-size: 3vh;
  border-radius: 10px;
  text-align: center;
  cursor: pointer;
`;
export const LoginForm = styled.form`
  height: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ToJoin = styled.p`
  margin-top: 20px;
  text-decoration: underline;
  color: #1f8bf7;
`;
