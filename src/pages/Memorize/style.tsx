import styled from "styled-components";

export const MContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex !important;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: grey;
`;
export const Switch = styled.label`
  width: 20%;
  height: 5%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;
// export const CarouselBox = styled.div`
//   display: flex;
//   flex-direction: row;
//   flex-flow: row;
// `;
export const ShuffleCheck = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
  &:checked + span {
    background-color: #1f8bf7;
  }
  &:checked + span::before {
    -webkit-transform: translateX(1.8vw);
    -ms-transform: translateX(1.8vw);
    transform: translateX(1.8vw);
  }
`;

export const SetMode = styled.div`
  height: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* background-color: red; */
`;

export const SliderRound = styled.span`
  margin-top: 8px;
  position: absolute;
  cursor: pointer;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 4vh !important;
  width: 4vw;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
  border-radius: 34px;

  &:before {
    position: absolute;
    content: "";
    height: 80%;
    width: 40%;
    left: 4px;
    bottom: 10%;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 50%;
  }
`;

export const GoBack = styled.a`
  position: fixed;
  color: white;
  font-size: 150%;
  top: 2%;
  left: 2%;
  z-index: 7;
`;
export const MemorizeWay = styled.div`
  margin-left: 20px;
  margin-right: 20px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
export const StartMemo = styled.button`
  align-self: center;
  width: 80%;
  height: 20%;
  font-size: 100%;
  font-weight: bold;
  background-color: #1f8bf7;
  border-radius: 10px;
  margin-bottom: 10px;
  border: none;
`;
// .index{
//     opacity: 1;
// }

export const CheckBox = styled.div`
  width: 20vw;
  height: 40vh;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 10px;
`;

export const CheckTitle = styled.p`
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 20px;
  font-weight: 700;
  font-size: 110%;
`;

export const ContainerText = styled.span`
  height: 10%;
  line-height: 200%;
  font-size: 40px;
`;
export const ContentBox = styled.div`
  width: 65%;
  height: 65%;
  background-color: white;
  border-radius: 50px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;

  &:last-of-type {
    margin-top: 7%;
  }
`;

export const InnerBox = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  border-radius: 50px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  box-sizing: border-box;
`;
export const Words = styled.p`
  font-size: 60px;
`;
export const Meanings = styled.span`
  font-size: 40px;
  color: black;
  margin-bottom: 40px;
`;
export const NonClickedBox = styled.div`
  position: fixed;
  background-color: #1f8bf7;
  width: 65vw;
  height: 33vh;
  top: 55.5%;
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
`;
export const ClickedBox = styled.div`
  position: fixed;
  background-color: #1f8bf7;
  width: 65vw !important;
  height: 33vh;
  top: 50.5%;
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
  animation-duration: 1s;
  animation-name: slideIn;
  animation-fill-mode: forwards;

  @keyframes slideIn {
    from {
      position: fixed;
      top: 55.5%;
      height: 33vh;
    }
    50% {
      width: 65vw;
    }
    to {
      position: fixed;
      top: 88.5%;
      width: 59vw;
      height: 0;
    }
  }
`;

export const SpaceButton = styled.div`
  width: 20%;
  height: 7vh;
  background-color: #ccd6f9;
  border-radius: 100000px;
  text-align: center;
  line-height: 7vh;
  font-size: 30px;
  cursor: pointer;
`;
export const NextBtn = styled.svg`
  position: fixed;
  right: 12%;
  top: 51%;
`;

export const BeforeBtn = styled.svg`
  position: fixed;
  left: 12%;
  top: 46%;
  z-index: 7;
`;
export const ToBack = styled.a`
  font-size: 35px;
  text-decoration: none;
  color: #3434ff;
`;

export const FinishText = styled.span`
  line-height: 400%;
  font-size: 80px;
  color: black;
`;

export const Btns = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  font-size: 40px;
  width: 100%;
  margin-top: 50px;
`;
export const LinkTabs = styled.a`
  background-color: #1f8bf7;
  text-align: center;
  width: 40%;
  height: 100%;
  line-height: 70px;
  border-radius: 1000px;
`;
export const VoiceBtn = styled.button`
  background-color: transparent;
  margin-top: 30px;
  border: none;
`;

export const StyledSlider = styled.div``;
