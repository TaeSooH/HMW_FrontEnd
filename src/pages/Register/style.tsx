import styled from "styled-components";
import * as S from "../Login/style";

export const RegisterContainer = styled(S.LoginContainer)``;
export const RegisterInput = styled(S.LoginInput)`
  margin-bottom: 1.5%;
  &:focus {
    outline: none;
  }
`;
export const Submit = styled(S.Submit)`
  margin-top: 1%;
`;
export const InputForm = styled(S.LoginForm)``;
export const ToLogin = styled(S.ToJoin)``;
export const ErrorMsg = styled.span`
  color: red;
`;
