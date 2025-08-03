import {  Container, Typography, Grid, styled } from "@mui/material"
import Avatar from "../../../../assets/images/GersonES2025.jpg"


const Hero = () => { 

    const StyledHero = styled("div")(() => ({
        background: "black",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    }))

    const StyledImg = styled("img")(() => ({   
        width: "75%",
        borderRadius: "50%",
        height: "300px", // Mantém proporção circular
        objectFit: "cover", // Garante que a imagem se ajuste bem
    }));

    return (
        <StyledHero>
          <Container>
            <Grid container spacing={2} alignItems="center">
                <Grid item xs={8} md={4}>
                    <StyledImg src={Avatar} alt="Gerson" /> 
                    <h1 style={{ color: "white" }}>Welcome to My Portfolio</h1>
                </Grid>
                <Grid item xs={4} md={8} sx={{ display: "flex", justifyContent: "center" }}>
                    <Typography color="primary.contrastText" variant="h1" pb={2} textAlign="center">
                        Gerson E. S.
                    </Typography>
                    <Typography color="primary.contrastText" variant="h2" textAlign="center" >
                        I'm a Software Engineer
                </Typography>
                </Grid>
            </Grid> 
          </Container>
        </StyledHero>
    )
}

export default Hero