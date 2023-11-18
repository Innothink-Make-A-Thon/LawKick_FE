import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import ReportTopBar from "./report_component/ReportTopBar";
import ReportKickInfo from "./report_component/ReportKickInfo";
import ReportImage from "./report_component/ReportImage";
import ReportDetail from "./report_component/ReportDetail";

const ReportPage = () => {
  const location = useLocation();
  const selectedImage = location.state?.selectedImage;

  return (
    <>
      <ReportTopBar />
      <ReportKickInfo />
      {/* Pass the selectedImage as a prop to ReportImage */}
      <ReportImage selectedImage={selectedImage} />
      <ReportDetail />
    </>
  );
};

export default ReportPage;
