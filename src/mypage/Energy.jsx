import React from "react";
import styled from "styled-components";
import Marker from './marker.png'

const TextContainer = styled.div`
  padding: 40px;
  margin-top: 4rem;
`;

const Hero = styled.div`
  color: #eAAF00;
  font-family: Pretendard;
  font-size: 22px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px;
`;

const Name = styled.div`
  color: #191919;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px;
  margin-top: 15px;
`;

const MyEnergy = styled.div`
  color: #191919;
  font-family: Pretendard;
  font-size: 30px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-left: 10px;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  margin-left: 40px;
`;

const ProgressBar = styled.div`
  width: 96%;
  height: 6.166px;
  flex-shrink: 0;
  border-radius: 17px;
  background: #d9d9d9;
  margin:10px;
  margin-top: 50px;
  position: relative;
`;

const ProgressBarFill = styled.div`
  height: 100%;
  border-radius: 17px;
  background: #fdc727;
  width: ${(props) => props.percentage}%;
`;

const IconImage = styled.img`
  position: absolute;
  top: 50%;
  left: ${(props) => props.percentage}%;
  transform: translate(-50%, -110%);
  width: 24.624px;
  height: 30.78px;
`;

const Explain = styled.div`
  color: #A7A7A7;
  text-align: right;
  font-family: Pretendard;
  font-size: 10px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px; 
  white-space: pre-line; 
  margin-right:10px;
`;

const Energy = () => {
  const energyPercentage = 30;

  return (
    <>
      <TextContainer>
        <Hero>내일의 히어로</Hero>
        <Name>KimInha님의 보유 에너지</Name>
      </TextContainer>

      <Container>
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" viewBox="0 0 30 31" fill="none">
          <circle cx="14.9756" cy="15.9014" r="14.9756" fill="#FDC727" />
          <path d="M8.8291 15.9019L17.0251 4.93164V15.9019H8.8291Z" fill="white" />
          <path d="M21.123 15.9019L12.9271 26.8721L12.9271 15.9019L21.123 15.9019Z" fill="white" />
        </svg>
        <MyEnergy>{energyPercentage} E</MyEnergy>
      </Container>
      <ProgressBar>
          <ProgressBarFill percentage={energyPercentage} />
          <IconImage src = {Marker} alt="Icon" percentage={energyPercentage} />
        </ProgressBar>
        <Explain>100 E<br/>이때부터 사용가능해요</Explain>
    </>
  );
};

export default Energy;
