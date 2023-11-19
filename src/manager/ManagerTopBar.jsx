import React from "react";
import styled from "styled-components";

const HeadBox = styled.div`
  width: 100%;
  height: 50px;
  background-color: none;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 1px 0px 0px #00000024;
`;

const TextStyle = styled.p`
  font-weight: bold;
  color: ${props => props.isRed ? '#FF5934' : '#1D1D1E'};
`;

const ManagerTopBar = () => {
  return (
    <HeadBox>
      <TextStyle isRed>{'허위 신고\u00a0'}</TextStyle>
      <TextStyle>{'판단하기'}</TextStyle>
    </HeadBox>
  );
};

export default ManagerTopBar;
