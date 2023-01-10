import styled from "styled-components";

* {
    margin: 0;
    padding: 0;
}
export const MContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: grey;
`;
.switch{
    width: 20%;
    height: 5%;
    position: relative;
    display: inline-block;
}

.switch input {
    opacity: 0;
    width: 0;
    height: 0;
    
}

.content{
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: 0.5s;
}

.setlist{
    height: 10%;
}

.slider_round{
    position: absolute;
    cursor: pointer;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 4vh !important;
    width: 4vw;
    background-color: #ccc;
    -webkit-transition: .4s;
    transition: .4s;
    border-radius: 34px;
}
.slider_round:before{
    position: absolute;
    content: "";
    height: 80%;
    width: 40%;
    left: 4px;
    bottom: 10%;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
    border-radius: 50%;
}

.switch input:checked + .slider_round {
    background-color: #1f8bf7;
}

.switch input:checked + .slider_round::before {
    -webkit-transform: translateX(1.8vw);
    -ms-transform: translateX(1.8vw);
    transform: translateX(1.8vw);
}

export const GoBack = styled.a`
    position: fixed;
    color: white;
    font-size: 150%;
    top: 2%;
    left: 2%;
    z-index: 7;
`;

.memorize_way, .setlist{
    margin-left: 20px;
    margin-right: 20px;
    display: flex;
    justify-content: space-between;
}
.startMemo{
    align-self: center;
    width: 80%;
    height: 20%;
    font-size: 100%;
    font-weight: bold;
    background-color: #1f8bf7;
    border-radius: 10px;
    margin-bottom: 10px;
}
.index{
    opacity: 1;
}

.check {
    width: 20vw;
    height: 40vh;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 10px;
}

.box_title{
    margin-left: 20px;
    margin-right: 20px;
    margin-top: 20px;
    font-weight: 700;
    font-size: 110%;
}

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
`;
export const Words = styled.p`
    font-size: 60px;
`;
export const Answers = styled.span`
    font-size: 40px;
    color: black;
    margin-bottom: 40px;
`;
export const NonClickedBox = styled.div`
    position: fixed;
    background-color: #1f8bf7;
    width: 65%;
    height: 33%;
    top: 55.5%;
    border-bottom-left-radius: 50px;
    border-bottom-right-radius: 50px;
`;
export const ClickedBox = styled.div`
    position: fixed;
    background-color: #1f8bf7;
    width: 65%;
    height: 33%;
    top: 50.5%;
    border-bottom-left-radius: 50px;
    border-bottom-right-radius: 50px;
    animation-duration: 1s;
    animation-name: slidein;
    animation-fill-mode: forwards;

    @keyframes slidein {
    from {
        position: fixed;
        top: 55.5%;
        height: 33%;
    }
    50% {
        width: 65%;
    }
    to {
        position: fixed;
        top: 88.5%;
        width: 59%;
        height: 0;
    }
}
`;

export const SpaceButton = styled.div`
    width: 20%;
    height: 7vh;
    background-color: #CCD6F9;
    border-radius: 100000px;
    text-align: center;
    line-height: 7vh;
    font-size: 30px;
    cursor: pointer;
`;
export const NextBtn = styled.svg`
    position: fixed;
    right: 12%;
    top: 46%;
`;

export const BeforeBtn = styled.svg`
    position: fixed;
    left: 12%;
    top: 46%;
    z-index: 7;
`;

.backTo{
    font-size: 30px;
}

.finish{
    justify-content: space-around;
}

.non{
    justify-content: center;
}

.finish span {
    font-size: 80px;
    color: black;
}


.bts {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    font-size: 40px;
    width: 100%;
    margin-top: 50px;
}
.bts a{
    background-color: #1f8bf7;
    text-align: center;
    width: 40%;
    height: 100%;
    line-height: 70px;
    border-radius: 1000px;
}
export const VoiceBtn = styled.button`
    background-color: transparent;
    margin-top:30px;
`;