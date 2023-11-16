import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import NextBtn from "../components/Nextbtn";

const BoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  position: relative;
  padding: 50px;
`;

const commonBoxStyles = `
  width: 345px;
  height: 152px;
  flex-shrink: 0;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative; 

  white-space: pre-line;
  text-align: center;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%;
`;

const FirstBox = styled.div`
  ${commonBoxStyles}
  border: 2px solid ${({ isSelected }) => (isSelected ? "#FFC518" : "#A4A4A4")};
  background-color: ${({ isSelected }) => (isSelected ? "#FFF4D4" : "transparent")};
  color: ${({ isSelected }) => (isSelected ? "black" : "#A4A4A4")};
  border-radius: 9px;
`;

const SecondBox = styled.div`
  ${commonBoxStyles}
  border: 2px solid ${({ isSelected }) => (isSelected ? "#FFC518" : "#A4A4A4")};
  background-color: ${({ isSelected }) => (isSelected ? "#FFF4D4" : "transparent")};
  margin-top: 10px;
  color: ${({ isSelected }) => (isSelected ? "black" : "#A4A4A4")};
  border-radius: 9px;
`;

const firstTextStyles = `
  font-size: 16px;
`;

const secondTextStyles = `
  font-size: 14px;
`;

const BoxTitle = styled.div`
  ${firstTextStyles}
`;

const BoxDescription = styled.div`
  ${secondTextStyles}
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative; 
`;

const SvgContainer = styled.div`
  flex-direction: column;
  align-items: flex-end; 
  justify-content: center; 
  position: relative; 
  margin-left: auto;
  margin-top: -40px;
`;

const SvgIcon = styled.svg`
  fill: ${({ isSelected }) => (isSelected ? "#FFC518" : "#D0D0D0")};
  padding: 10px;
`;

function Choice() {
    const [selectedBox, setSelectedBox] = useState(null);
    const navigate = useNavigate();
  
    const isNextBtnEnabled = selectedBox !== null;
  
    const handleNextBtnClick = () => {
      if (selectedBox === "first") {
        navigate("/personal/signin");
      } else if (selectedBox === "second") {
        navigate("/company/signin");
      }
    };

  return (
    <div>
      <BoxContainer>
        <FirstBox isSelected={selectedBox === "first"} onClick={() => setSelectedBox("first")}>
          <TextContainer>
            <BoxTitle>신고할 거예요!</BoxTitle>
            <BoxDescription>(개인 사용자)</BoxDescription>
            <SvgContainer>
              <SvgIcon isSelected={selectedBox === "first"} xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                <circle cx="9" cy="9" r="9" />
                <path d="M3 8.18182L7.36364 14L15 6" stroke="white" />
              </SvgIcon>
            </SvgContainer>
          </TextContainer>
        </FirstBox>
        
        <SecondBox isSelected={selectedBox === "second"} onClick={() => setSelectedBox("second")}>
          <TextContainer>
            <BoxTitle>로우킥과 함께 일하고 싶어요!<br /></BoxTitle>
            <BoxDescription>(기업 사용자)</BoxDescription>
          </TextContainer>
          <SvgContainer>
            <SvgIcon isSelected={selectedBox === "second"} xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
              <circle cx="9" cy="9" r="9" />
              <path d="M3 8.18182L7.36364 14L15 6" stroke="white" />
            </SvgIcon>
          </SvgContainer>
        </SecondBox>
      </BoxContainer>

      {/* NextBtn 컴포넌트에 isEnabled 프롭 전달 */}
      <NextBtn isEnabled={isNextBtnEnabled} onClick={handleNextBtnClick} buttonText="다음" />
    </div>
  );
}

export default Choice;
