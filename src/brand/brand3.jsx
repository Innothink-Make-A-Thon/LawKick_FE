import React, { useState } from "react";
import styled from "styled-components";
import Backbtn from "../components/Backtbn";
import NextBtn from "../components/Nextbtn";
import { useNavigate } from "react-router-dom";
import Logoimg from "../logo/y.png";

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

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7); /* Adjust the transparency here */
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
`;

const ModalContent = styled.div`
  background: none;
  padding: 20px;
  border: none;
  box-shadow: none;
  color: #fff;
  text-align: center;
  font-family: Pretendard;
  font-size: 25px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const LogoImage = styled.img`
  width: 44.277px;
  height: 72.003px;
  flex-shrink: 0;
  margin: 20px;
`;

const CenterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  position: relative;
`;

function Brand3() {
  const [email, setEmail] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const navigate = useNavigate();

  const handleNextBtnClick = () => {
    setIsModalVisible(true);

    setTimeout(() => {
      setIsModalVisible(false);
      navigate("/signup");
    }, 3000); 
  };

  return (
    <div>
      <Backbtn />
      <TextContainer>
        <AskText>위치 API 담당자<br />이메일을 알려주세요!</AskText>
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

      {isModalVisible && (
        <ModalOverlay>
          <CenterContainer>
            <LogoImage src={Logoimg} alt="Logo" />
            <ModalContent>
              브랜드 등록 신청이<br />접수되었습니다!
            </ModalContent>
          </CenterContainer>
        </ModalOverlay>
      )}
    </div>
  );
}

export default Brand3;
