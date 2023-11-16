import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Footerbox = styled.div`
  width: 100vw;
  height: 100px;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  background: #FDC727;
  position: fixed;
  bottom: ${props => (props.isHidden ? '-100px' : '0')};
  transition: bottom 0.3s ease-in-out;
  z-index: 2;
  box-shadow: 0 -5px 5px -5px #a6a6a6;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
`;

const StyledLink = styled.a`
  color: black;
  text-align: center;
  font-family: Noto Sans KR;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: 16px;
  text-decoration-line: none;
  cursor: pointer;
  margin-top: 10px; 
`;

const Footer = () => {
  const [isHidden, setIsHidden] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    const isScrollingDown = currentScrollPos > prevScrollPos;

    setIsHidden(isScrollingDown);
    setPrevScrollPos(currentScrollPos);
  };

  return (
    <>
      <Footerbox isHidden={isHidden}>
      <StyledLink href="/signup">바로 시작하기</StyledLink>
      </Footerbox>
    </>
  );
};

export default Footer;