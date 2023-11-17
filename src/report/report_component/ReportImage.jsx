import React, { useEffect, useState } from "react";
import styled from "styled-components";
import EmptyImage from "../report_image/Empty_Image.png";

const DefaultImage = styled.img`
    width: 100%;
`;

const ReportImage = () => {
 
    return (
        <>
        <DefaultImage src={EmptyImage}></DefaultImage>
        </>
    );
};

export default ReportImage;