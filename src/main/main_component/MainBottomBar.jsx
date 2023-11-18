import React, { useState } from "react";
import styled from "styled-components";
import CameraButton from "../main_img/Camera_Button.png";
import { useNavigate } from "react-router-dom";

const BottomBarBox = styled.div`
  background-color: #fdc727;
  border-radius: 20px 20px 0rem 0rem;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 13.5vh;
  width: 100vw;
  z-index: 100;
`;

const BottomBarNewsBtn = styled.div`
  cursor: pointer;
`;

const BtnImg = styled.img`
  width: 3.5rem;
  height: 3.5rem;
  cursor: pointer;
`;

const HiddenInput = styled.input`
  display: none;
`;

const MainBottomBar = () => {
const navigate = useNavigate();
  const handleImageUpload = () => {
    inputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    console.log("Selected file:", file);
    navigate("/report");
  };

  const inputRef = React.createRef();

  return (
    <>
      <BottomBarBox>
        <BottomBarNewsBtn onClick={handleImageUpload}>
          <BtnImg src={CameraButton} />
          <HiddenInput
            type="file"
            ref={inputRef}
            accept="image/*"
            onChange={handleFileChange}
          />
        </BottomBarNewsBtn>
      </BottomBarBox>
    </>
  );
};

export default MainBottomBar;
