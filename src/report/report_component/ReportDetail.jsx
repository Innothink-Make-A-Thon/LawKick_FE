import React, { useEffect, useState } from "react";
import styled from "styled-components";

const DetailContainer = styled.div`
    width: auto;
    padding: 0vw 6vw 6vw 6vw;

`;

const DetailSelectContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`;


const Title = styled.p`
    font-size: larger;
    font-weight: bold;
    margin-bottom: 5px;
    margin-top: 8%;
`;

const LittleTitle = styled.p`
    color: gray;
    margin-top: 0;
    margin-bottom: 5%;
`;

const IllegalBtn = styled.button`
    background: white;
    border: 1px #D9D9D9 solid;
    padding: 2% 12%;
    border-radius: 8px;
`;

const DetailInput = styled.textarea`
    width: 95%;
    height: 15vh;
    border: 1px solid rgba(0, 0, 0, 0.10);
    border-radius: 8px;
    padding: 0.5rem;
    resize: none;
    margin-bottom: 13vh;
    ::placeholder{
        color: gray;
    }
`;

const ReportDetail = () => {
 
    return (
        <DetailContainer>
            <Title>신고 상황 선택</Title>
            <LittleTitle>다중 선택 가능</LittleTitle>
            <DetailSelectContainer>
                <IllegalBtn>헬맷 미착용</IllegalBtn>
                <IllegalBtn>2인 이상 탑승</IllegalBtn>
            </DetailSelectContainer>
            <Title>상세 설명</Title>
            <LittleTitle>이 칸만 적어도 신고가 가능해요!</LittleTitle>
            <DetailInput placeholder="(예: 12시 쯤 교복을 입은 학생 2명이 타는 걸 발견)"></DetailInput>
        </DetailContainer>
    );
};

export default ReportDetail;