import React from "react";
import Grid from "@material-ui/core/Grid";
import styled from "styled-components";

const TitleWrapper = styled.div`
  height: calc(100vh - 174px);
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Title = styled.h1`
  font-size: 132px;
  color: #ff7161;
  text-align: center;
  font-family: "Merienda", cursive;
`;

function Banner({}) {
  return (
    <Grid container alignItems="center" justify="center">
      <Grid item xs={12}>
        <TitleWrapper>
          <Title>Tacs Lab</Title>
        </TitleWrapper>
      </Grid>
    </Grid>
  );
}

export default Banner;
