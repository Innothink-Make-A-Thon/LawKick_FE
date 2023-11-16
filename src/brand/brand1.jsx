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

const AskText2 = styled.div`
  color: #707070;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
  text-align: left;
  white-space: pre-line;
  margin-top: 1rem;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  position: relative;
  margin-top: 1.5rem;
  margin-left: 1rem;
`;

const DropdownContainer = styled.div`
  position: relative;
  width: 353px;
  height: 49px;
  margin-top: 40px;
  margin-left:1rem;
`;

const Dropdown = styled.select`
  width: 353px;
  height: 49px;
  border-radius: 8px;
  border: 1px solid ${({ isOpen, isSelected }) => (isOpen ? "var(--main-yellow, #FDC727)" : isSelected ? "#FDC727" : "#E5E5E5")};
  color: ${({ isOpen, isSelected }) => (isOpen ? "var(--main-yellow, #111)" : isSelected ? "#111" : "#E5E5E5")};
  padding: 10px;
  appearance: none;
  background-color: transparent;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.3);
`;

const ArrowIcon = styled.span`
  position: absolute;
  top: 50%;
  right: 15px;
  transform: translateY(-50%) rotate(${(props) => (props.isOpen ? "180deg" : "0deg")});
  color: ${({ isOpen }) => (isOpen ? "var(--main-yellow, #FDC727)" : "#E5E5E5")};
  transition: transform 0.01s ease, color 0.3s ease;
`;

function Brand1() {
  const [selectedBrand, setSelectedBrand] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };


  const isNextBtnEnabled = !!selectedBrand;

  const navigate = useNavigate();

  const handleNextBtnClick = () => {
    navigate("/company/brand2");
  };

  return (
    <div>
      <Backbtn />
      <TextContainer>
        <AskText>브랜드를 등록해보세요</AskText>
        <AskText2>브랜드별로 마커 색상을 등록할 수 있어요</AskText2>
      </TextContainer>

      <DropdownContainer>
        <Dropdown
          value={selectedBrand}
          onChange={(e) => setSelectedBrand(e.target.value)}
          onClick={toggleDropdown}
          onBlur={() => setIsOpen(false)}
          isOpen={isOpen}
          isSelected={!!selectedBrand} // Check if any brand is selected
        >
          <option value="" disabled hidden>
            브랜드 찾기
          </option>
          <option value="디어">디어</option>
          <option value="씽">씽</option>
          <option value="스윕">스윙</option>
          <option value="씽씽">씽씽</option>
          <option value="지쿠">지쿠</option>
          <option value="킥고잉">킥고잉</option>
        </Dropdown>
        <ArrowIcon isOpen={isOpen}>&#9660;</ArrowIcon>
      </DropdownContainer>

      <NextBtn isEnabled={isNextBtnEnabled} onClick={handleNextBtnClick} buttonText="다음" />
    </div>
  );
}

export default Brand1;
