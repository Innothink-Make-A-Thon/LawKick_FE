import React, { useState } from "react";
import styled from "styled-components";
import Backbtn from "../components/Backtbn";
import NextBtn from "../components/Nextbtn";
import { useNavigate } from "react-router-dom";

const AskText = styled.div`
  color: #1D1D1E;
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 34.5px;
  text-align: left;
  white-space: pre-line;
`;


const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  position: relative;
  margin-top: 1.5rem;
  margin-left: 1rem;
`;

const InputBox = styled.input`
  width: 344px;
  height: 48px;
  border: 1px solid #b9b9bb;
  border-radius: 4px;
  padding: 8px;
  margin-top: 0.5rem;
  font-family: Pretendard Variable;
  font-size: 15px;
  color: #1d1d1e;
  ::placeholder {
    color: #b9b9bb;
  }
  &:focus {
    border-color: #fdc727;
    outline: none;
  }
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.3);
`;

const TextContainer2 = styled.div`
  flex-direction: row;
  justify-content: space-evenly;
  position: relative;
  margin-left: 1rem;
  margin-top: 2rem;
`;

function Brand3() {
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    const handleNextBtnClick = () => {
        console.log("Next button clicked");
        navigate("/company/brand1");
      };
    
  return (
    <div>
      <Backbtn />
      <TextContainer>
        <AskText>위치 api 담당자<br/>이메일을 알려주세요!</AskText>
      </TextContainer>
      <TextContainer2>
      <InputBox
          placeholder="example@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        </TextContainer2>

        <NextBtn
        isEnabled={email.trim() !== ""}
        onClick={handleNextBtnClick}
        buttonText="브랜드 등록 신청을 하시겠습니까?"
      />
    
    
    </div>
  );
}

export default Brand3;
