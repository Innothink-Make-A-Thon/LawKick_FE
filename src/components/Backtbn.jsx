import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const SvgContainer = styled.div`
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  position: relative;
  margin-left: auto;
  cursor: pointer;
`;

function Backbtn() {
  const navigate = useNavigate();

  function moveToBack() {
    navigate(-1);
  }

  return (
    <SvgContainer onClick={moveToBack}>
      <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33" fill="none">
        <path d="M22 7L10 16.5L22 26" stroke="#5F5F5F" strokeWidth="2" strokeLinecap="round" />
      </svg>
    </SvgContainer>
  );
}

export default Backbtn;
