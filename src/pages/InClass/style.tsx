import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
`;
export const Content = styled.div`
  width: 100%;
  height: 87.8vh;
  display: flex;
  flex-direction: row;
`;
export const ClassInfo = styled.div`
  width: 25%;
  height: 100%;
  border-right: 1px solid rgb(237, 239, 245);
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
