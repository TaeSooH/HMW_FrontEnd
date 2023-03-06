import styled from "styled-components";

export const HeaderContainer = styled.div`
  top: 0;
  width: 100%;
  height: 12%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-bottom: 1px solid #edeff5;

  a {
    color: black;
  }
`;

export const Logo = styled.span`
  margin-left: 30%;
  font-size: 3vw;
  font-weight: bold;
  color: #1f8bf7;
`;

export const User = styled.div`
  font-size: 1.25vw;
  margin-left: 30%;
  &:not(:first-of-type) {
    margin-left: 2%;
    cursor: pointer;
    &:hover {
      color: #828282;
    }
  }
`;

interface IMargin {
  marginValue: string;
}
export const NavMenu = styled.a<IMargin>`
  font-size: 1.25vw;
  margin-left: ${(props) => props.marginValue};
  text-decoration: none;
`;
export const LinkMenu = styled.a<IMargin>`
  margin-left: ${(props) => props.marginValue};
`;
