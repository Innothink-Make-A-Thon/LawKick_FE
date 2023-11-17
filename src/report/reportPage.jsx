import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ReportTopBar from "./report_component/ReportTopBar";
import ReportKickInfo from "./report_component/ReportKickInfo";
import ReportImage from "./report_component/ReportImage";
import ReportDetail from "./report_component/ReportDetail";
import ReportSubmit from "./report_component/ReportSubmit";

const ReportPage = () => {
 
    return (
        <>
            <ReportTopBar></ReportTopBar>
            <ReportKickInfo></ReportKickInfo>
            <ReportImage></ReportImage>
            <ReportDetail></ReportDetail>
            <ReportSubmit></ReportSubmit>
        </>
    );
};

export default ReportPage;