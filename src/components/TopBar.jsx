import React from 'react';
import styled from 'styled-components';
import Backbtn from './Backtbn';
import Logo from '../logo/logotxt.png';

const HeadBox = styled.div`
  width: 100%;
  height: 50px;
  background-color: none;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center; /* Center vertically */
`;

const LogoImg = styled.img`
  background-color: none;
  width: 124px;
  height: 26px;
  z-index: 0;
`;

const TopBar = () => {
  return (
    <>
      <HeadBox>
        <Backbtn />
        <LogoImg src={Logo} />
      </HeadBox>
    </>
  );
};

export default TopBar;
