import React, { useRef } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const StyledSubmitBtn = styled.button`
  position: fixed;
  bottom: 4%;
  left: 50%;
  transform: translateX(-50%);
  width: 65%;
  min-width: 88px;
  max-width: 400px;
  height: 5%;
  padding: 0;
  justify-content: center;
  align-items: center;
  border-radius: 22px;
  background: ${({ isYellow }) => (isYellow ? "var(--main-yellow, #FDC727)" : "#DADADA")};
  color: black;
  border: none;
`;

const TextStyle = styled.div`
  color: #000;
  text-align: center;
  font-family: Noto Sans KR;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: 16px;
`;

const SubmitBtn = ({ isYellow, buttonText, handleImageUpload }) => {
  // const inputRef = useRef();
  const navigate = useNavigate();

  // const handleClick = () => {
  //   inputRef.current.click();
  // };

  // const handleFileChange = (event) => {
  //   const file = event.target.files[0];
  //   console.log("Selected file:", file);
  //   // You can perform any additional logic with the selected file here
  //   navigate("/report");
  // };

  return (
    <StyledSubmitBtn isYellow={isYellow}>
      <TextStyle>{buttonText}</TextStyle>
    </StyledSubmitBtn>
  );
};

export default SubmitBtn;
