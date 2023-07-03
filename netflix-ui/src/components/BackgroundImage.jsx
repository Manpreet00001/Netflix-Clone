import React from 'react'
import backgroud from "../assets/login.jpg";
import styled from "styled-components";
export default function BackgroundImage() {
  return (
    <Container>
      <img src={backgroud} alt="background" />
    </Container>
  )
} 

const Container = styled.div`
height: 100vh;
width: 100vw;
img {
    height:100vh;
    width: 100vw;
}
`;



