import React, { useState } from "react";
import styled from "styled-components";
import Backbtn from "../components/Backtbn";
import NextBtn from "../components/Nextbtn";

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
  margin-left: -10rem;
  margin-top: 1.5rem;
`;

const LoginText = styled.div`
  color: #1D1D1E;
  font-family: Pretendard Variable;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: 18px; /* 120% */
  text-align: left;
  white-space: pre-line;
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

const Container = styled.div`
`

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isNextBtnEnabled = email && password;

  return (
    <div>
      <Backbtn />
      <Container>
      <TextContainer>
        <AskText>로그인을 해주세요</AskText>
      </TextContainer>

      <TextContainer2>
        <LoginText>이메일(아이디)</LoginText>
        <InputBox
          placeholder="example@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </TextContainer2>

      <TextContainer2>
        <LoginText>비밀번호</LoginText>
        <InputBox
          type="password"
          placeholder="비밀번호 입력"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </TextContainer2>
      </Container>  
      <NextBtn
        isEnabled={isNextBtnEnabled}
        onClick={() => console.log("Next button clicked")}
        buttonText="로그인"
      />
    </div>
  );
}

export default SignIn;
