import styled from 'styled-components';

const StyledNextBtn = styled.button`
  position: absolute;
  margin-bottom: 5vw;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 345px;
  min-width: 88px;
  height: 48px; 
  padding: 0; 
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background: ${({ isEnabled }) => (isEnabled ? 'var(--main-yellow, #FDC727)' : '#DADADA')};
  color: black;
  border: none;
  cursor: ${({ isEnabled }) => (isEnabled ? 'pointer' : 'not-allowed')};
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

const NextBtn = ({ isEnabled, onClick, buttonText }) => {
  return (
    <StyledNextBtn isEnabled={isEnabled} onClick={isEnabled ? onClick : null}>
      <TextStyle>
        {buttonText}
      </TextStyle>
    </StyledNextBtn>
  );
};

export default NextBtn;
