import MuiPaper from "@material-ui/core/Paper";
import React, { Component } from "react";
import styled from "styled-components";

const StyledPaper = styled.section`
  && {
    padding: ${props => props.spacing}px;
  }
`;

const PaperHeader = styled.div`
  padding: 10px 20px;
  border-bottom: 1px solid #EEEEEE;
`;

const PaperTitle = styled.h4`
  width: 100%;
  color: #ff7161;
  margin: 0;
  font-size: 18px;
`;

function Paper({ title, spacing, children }) {
  return (
    <MuiPaper elevation={1}>
      {title && (
        <PaperHeader>
          <PaperTitle>{title}</PaperTitle>
        </PaperHeader>
      )}
      <StyledPaper spacing={spacing}>{children}</StyledPaper>
    </MuiPaper>
  );
}

export default Paper;
