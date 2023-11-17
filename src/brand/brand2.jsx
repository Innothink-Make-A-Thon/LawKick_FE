import React, { useState, useCallback } from "react";
import styled from "styled-components";
import TopBar from "../components/TopBar";
import NextBtn from "../components/Nextbtn";
import { ChromePicker } from 'react-color';
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
  margin-top: 3rem;
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
  width: 344px;
  height: 48px;
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

const ColorPreview = styled.div`
  width: 48px;
  height: 48px;
  border: 1px solid #b9b9bb;
  border-radius: 4px;
  position: absolute;
  right: 1px;
  top: 85%;
  transform: translateY(-50%);
  background-color: ${(props) => props.color || "#ffffff"};
`;


const CenterContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  position: relative; 
  padding: 50px
`;

function Brand2() {
  const [inputValue, setInputValue] = useState("");
  const [selectedColor, setSelectedColor] = useState("#000000");
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    setSelectedColor(value);
  };

  const handleColorChange = (color) => {
    const hexColor = color.hex;
    setSelectedColor(hexColor);
    setInputValue(hexColor);
  };

  const handleNextBtnClick = () => {
    console.log("Next button clicked");
    navigate("/company/brand3");
  };

  return (
    <div>
      <TopBar />
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
        <ColorPreview color={selectedColor} />
      </TextContainer2>

      <CenterContainer>
      <ChromePicker
        color={selectedColor}
        onChange={handleColorChange}
      />
      </CenterContainer>

      <NextBtn
        isEnabled={inputValue.trim() !== "" && selectedColor !== ""}
        onClick={handleNextBtnClick}
        buttonText="다음"
      />
    </div>
  );
}

export default Brand2;
