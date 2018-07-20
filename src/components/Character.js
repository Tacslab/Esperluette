import React, { Component } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 65px;
  height: 65px;
  border-right: 2px solid #dedede;
  position: relative;
`;

const SVGLetter = styled.span`
  width: 45px;
  margin: 0 auto;
  font-size: 55px;
`;

const Letter = styled.span`
  position: absolute;
  top: 3px;
  right: 3px;
`;

function Caracter({ children }) {
  return (
    <Wrapper>
      <SVGLetter>A</SVGLetter>
      <Letter>A</Letter>
    </Wrapper>
  );
}

export default Caracter;
