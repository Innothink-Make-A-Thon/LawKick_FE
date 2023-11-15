import React, { useState } from "react";
import styled from "styled-components";
import Backbtn from "../components/Backtbn";
import NextBtn from "../components/Nextbtn";

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
  margin-left: 1.5rem;
`;

const TextContainer2 = styled.div`
  flex-direction: row;
  justify-content: space-evenly;
  position: relative;
  margin-left: 1rem;
  margin-top: 2rem;
`;

const InputBox = styled.input`
  width: 344px;
  height: 48px;
  border: 1px solid #b9b9bb;
  border-radius: 4px;
  padding: 8px;
  margin-top: 0.5rem;
  margin-left: 1rem;
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

function Brand2() {
  const [inputValue, setInputValue] = useState("");
  const isNextBtnEnabled = inputValue.trim() !== "";

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleNextBtnClick = () => {
    // Handle the logic when NextBtn is clicked
    console.log("Next button clicked");
  };

  return (
    <div>
      <Backbtn />
      <TextContainer>
        <AskText>
          브랜드 고유 색상 코드를 <br />
          입력해주세요!
        </AskText>
      </TextContainer>

      <TextContainer2>
        <InputBox
          placeholder="#000000"
          value={inputValue}
          onChange={handleInputChange}
        />
      </TextContainer2>
      <NextBtn
        isEnabled={isNextBtnEnabled}
        onClick={handleNextBtnClick}
        buttonText="다음"
      />
    </div>
  );
}

export default Brand2;
