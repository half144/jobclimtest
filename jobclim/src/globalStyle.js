import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
    }
`;

export const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  min-height: 100vh;
  background-color: #edf6ff;
`;

export const LineDecoration = styled.div`
  top: 0px;
  height: 10px;
  background: linear-gradient(90.02deg, #1b0fa9 4.55%, #73b6ff 99.99%);
`;

export const Container = styled.div`
  width: calc(100% - 25vw);
`;

export const Title = styled.h1`
  color: #303f5e;
`;
