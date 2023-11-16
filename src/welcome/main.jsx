import React from "react";
import Logo from "../logo/b_logo.png";
import styled from "styled-components";

const PageContainer = styled.div`
  background-color: #fdc727;
  height: 100vh;
  display: flex;
  justify-content: center;
`;

const LogoImage = styled.img`
  width: 122.917px;
  height: 123.314px;
  flex-shrink: 0;
`;

const CenterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledButton = styled.button`
  width: 345px;
  height: 57px;
  flex-shrink: 0;
  border-radius: 8px;
  border: 2px solid #fff;
  background: #fee393;
  font-size: 18px;
  color: #1d1d1e;
  margin-top: 255px;
  cursor: pointer;
  outline: none;
  color: #434343;
    text-align: center;
    font-family: Noto Sans KR;
    font-style: normal;
    font-weight: 700;
    line-height: 16px; 

`;

const StyledLink = styled.a`
  color: white;
  text-align: center;
  font-family: Noto Sans KR;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: 16px;
  text-decoration-line: underline;
  cursor: pointer;
  margin-top: 10px; 
`;

function Main() {
  const handleClick = () => {
    console.log("Button clicked!");
  };

  return (
    <PageContainer>
      <CenterContainer>
        <LogoImage src={Logo} alt="Logo" />
        <StyledButton onClick={handleClick}>튜토리얼 보기</StyledButton>
        <StyledLink href="/signup">바로 시작하기</StyledLink>
      </CenterContainer>
    </PageContainer>
  );
}

export default Main;
