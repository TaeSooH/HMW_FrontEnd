import styled from "styled-components";
import * as S from "../Memorize/style";

export const MContainer = styled(S.MContainer)``;
export const Switch = styled(S.Switch)``;

export const ShuffleCheck = styled(S.ShuffleCheck)``;

export const SetMode = styled(S.SetMode)``;

export const SliderRound = styled(S.SliderRound)``;

export const GoBack = styled(S.GoBack)``;
export const MemorizeWay = styled(S.MemorizeWay)``;
export const StartMemo = styled(S.StartMemo)``;
// .index{
//     opacity: 1;
// }

export const CheckBox = styled(S.CheckBox)``;

export const CheckTitle = styled(S.CheckTitle)``;

export const ContainerText = styled(S.ContainerText)``;
export const ContentBox = styled(S.ContentBox)``;

export const InnerBox = styled(S.InnerBox)`
  p {
    font-size: 60px;
  }
`;
export const Word = styled.p`
  font-size: 60px;
`;
export const Meanings = styled(S.Meanings)``;
export const NonClickedBox = styled(S.NonClickedBox)``;
export const ClickedBox = styled(S.ClickedBox)``;

export const SpaceButton = styled(S.SpaceButton)``;
export const NextBtn = styled(S.NextBtn)``;

export const BeforeBtn = styled(S.BeforeBtn)``;
export const ToBack = styled(S.ToBack)``;

export const FinishText = styled(S.FinishText)``;

export const Btns = styled(S.Btns)``;
export const LinkTabs = styled(S.LinkTabs)``;
export const VoiceBtn = styled(S.VoiceBtn)``;
export const MidLine = styled.hr`
  width: "100%";
  height: "1px";
  background-color: "grey";
`;
export const SpellingInput = styled.input`
  width: 70%;
  height: 100%;
  border: 1px solid grey;
  border-radius: 10px;
  font-size: 20px;
  padding-left: 10px;
  &:focus {
    outline: none;
  }
`;
export const SpellingRight = styled(SpellingInput)`
  color: #1f8bf7;
  border: 1px solid #1f8bf7;
  animation: right 0.8s;

  @keyframes right {
    from {
      transform: scale(1);
    }
    25% {
      transform: scale(1.2, 1.45);
    }
    38% {
      transform: scale(1.2, 1.45);
    }
    to {
      transform: scale(1);
    }
  }
`;
export const SpellingWrong = styled(SpellingInput)`
  border: 1px solid red;
  color: red;
  animation: wrong 0.3s;

  @keyframes wrong {
    from {
      transform: translateX(-10px);
    }
    20% {
      transform: translateX(20px);
    }
    40% {
      transform: translateX(-20px);
    }
    60% {
      transform: translateX(20px);
    }
    80% {
      transform: translateX(-20px);
    }
    to {
      transform: translateX(10px);
    }
  }
`;
export const InnerSpan = styled.span<{ tColor: string }>`
  position: absolute;
  top: 76%;
  font-size: 30px !important;
  color: ${(props) => props.tColor};
`;
export const SubmitForm = styled.form`
  width: 100%;
  height: 15%;
  margin-bottom: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
