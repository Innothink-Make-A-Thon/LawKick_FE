import styled from "styled-components";
import Logoimg from "./y.png";
import Choice from "./Choice";

const LogoImage = styled.img`
    width: 44.277px;
    height: 72.003px;
    flex-shrink: 0;
`;

const CenterContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  position: relative; 
  padding: 50px
`;

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
flex-direction: row;
justify-content: space-evenly;
align-items: center;
position: relative; 
margin-left: -5rem;
`
function Signup() {
    return (
        <div>
            <CenterContainer>
                <LogoImage src={Logoimg} alt="Logo" />
            </CenterContainer>
            <TextContainer>
                <AskText>
                    로우킥에는 무슨 이유로 <br/>
                    오셨나요?
                </AskText>
            </TextContainer>
            <Choice/>
        </div>
    );
}

export default Signup;
