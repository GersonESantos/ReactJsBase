import { styled } from "@mui/material"
import '.App.css';
import { useState, useEffect } from 'react';


const Hero = () => {  

    const StyledHero = styled("div")(() => ({
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        background: "black",
    }));

       

  return (
    <>
        <StyledHero>
            <h1 style={{ color: "white" }}>Welcome to My Portfolio</h1>
        </StyledHero>
        
    </>
  )
}

export default Hero
