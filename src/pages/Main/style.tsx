import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
`;
export const SectionOne = styled.div`
  background-color: #1f8bf7;
  width: 100%;
  height: 85%;
  display: flex;
`;
export const Title = styled.div`
  color: white;
  font-size: 30px;
  font-weight: bold;
`;
export const LeftBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10%;
  padding-top: 10%;
`;
export const RightBox = styled.div`
  width: 50%;
  font-size: 70px;
  font-weight: bold;
`;
export const ExText = styled.div`
  width: 30%;
  margin-top: 19%;
  margin-left: 32%;
`;
interface IAniWord {
  delayTime: string;
}
export const AniWord = styled.p<IAniWord>`
  opacity: 0;
  animation: fadeIn 1s;
  animation-delay: ${(props) => props.delayTime};
  animation-fill-mode: forwards;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
export const FirContent = styled.div`
  font-size: 50px;
  margin-top: 3%;
  font-weight: bold;
`;
export const SectionTwo = styled.div`
  width: 100%;
  height: 85%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const SubTitle = styled.div`
  padding-top: 7%;
  font-size: 44px;
  font-weight: bold;
`;
export const SecContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80%;
  margin-top: 2%;
  height: 100%;
  background: linear-gradient(180deg, #beddfc 0%, #5aaafa 100%);
  border-radius: 15px;

  img {
    width: 700px;
  }
`;
export const GoSet = styled.a`
  margin-top: 3%;
  text-decoration: underline;
  font-weight: bolder;
  font-size: 24px;
  color: black;

  &:hover {
    color: #4c79ff;
    transition: 0.2s;
  }
`;
export const SectionThree = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const ThirdContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  width: 100%;
  justify-content: space-around;
  margin-top: 5%;
`;
export const RegisterBox = styled.div`
  width: 43%;
  height: 100%;
  background: linear-gradient(180deg, #beddfc 0%, #5aaafa 100%);
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const RegisterTitle = styled.div`
  font-size: 40px;
  font-weight: bold;
  padding-top: 10%;
`;
export const RegisterImg = styled.img`
  width: 90%;
  height: 56%;
  padding-top: 10%;
  object-fit: contain;
`;
export const MemoBox = styled.div`
  width: 43%;
  height: 100%;
  background: linear-gradient(180deg, #beddfc 0%, #5aaafa 100%);
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const MemoTitle = styled.div`
  font-size: 40px;
  font-weight: bold;
  padding-top: 10%;
`;
export const MemoImg = styled.img`
  width: 90%;
  height: 56%;
  padding-top: 10%;
  object-fit: contain;
`;
export const SectionFour = styled.div`
  width: 100%;
  height: 110%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const FourthBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
  height: 100%;
  margin-top: 2%;
  background: linear-gradient(180deg, #beddfc 0%, #5aaafa 100%);
  border-radius: 15px;
`;
export const SearchImg = styled.img`
  width: 90%;
`;
export const GoSearch = styled.a`
  margin-top: 3%;
  text-decoration: underline;
  font-weight: bolder;
  font-size: 25px;
  color: black;
  &:hover {
    color: #4c79ff;
    transition: 0.2s;
  }
`;
