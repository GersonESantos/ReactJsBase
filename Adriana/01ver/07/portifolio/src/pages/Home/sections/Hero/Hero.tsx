import { Box, Container, Grid, Typography, styled } from "@mui/material"
import Avatar from "../../../../assets/images/GersonES2025.jpg"
import DownloadIcon from '@mui/icons-material/Download';
import StyledButton from "../../../../components/StyledButton/StyledButton";
import CV from "../../../../assets/pdfs/Open.pdf";
import EmailIcon from '@mui/icons-material/Email';
import { AnimatedBackground } from "../../../../components/AnimatedBackground/AnimatedBackground"
const Hero = () => {
    const StyledHero = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.primary.main,
        height: "100vh",
        display: "flex",
        alignItems: "center",
        [theme.breakpoints.up('xs')]: { // <= mobile
            paddingTop: "100px",
        },
        [theme.breakpoints.up('md')]: { // >=mobile
            paddingTop: "0",
        }
    }))

    const StyledImg = styled("img")(() => ({   
        width: "75%",
        borderRadius: "50%",
        height: "300px", // Mantém proporção circular
        objectFit: "cover", // Garante que a imagem se ajuste bem
    }));

    const handleDownload = () => {
        console.log("download")
        // Create a link element
        const link = document.createElement('a');
        link.href = CV
        link.download = 'example.pdf'; // Set the download attribute to specify the file name
        // Append the link to the body
        document.body.appendChild(link);
        // Trigger the click event
        link.click();
        // Remove the link from the body
        document.body.removeChild(link);
    };

    const handleEmail = () => {
        const emailAddress = 'example@example.com';
        const subject = 'Subject';
        const body = 'Hello! I saw your portfolio...';

        const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.open(mailtoLink);
    }

    // const StyledImg = styled("img")(({ theme }) => ({
    //     width: "75%",
    //     borderRadius: "50%",
    //     border: `1px solid ${theme.palette.primary.contrastText}`
    // }))

    return (
        <>
            <StyledHero>
                <Container maxWidth="lg">
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={5}>
                            <Box position="relative">
                                    <Box width={"150%"} position="absolute" top={-100} right={0}>
                                    <AnimatedBackground />
                                </Box>
                                <Box position="relative" textAlign="center">
                                    <StyledImg src={Avatar} />
                                    <h1 style={{ color: "white" }}>Welcome to My Portfolio</h1>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={7}>
                            <Typography color="primary.contrastText" variant="h1" textAlign="center" pb={2}>  Gerson E. Santos</Typography>
                            <Typography color="primary.contrastText" variant="h2" textAlign="center" >I'm a Software Engineer</Typography>
                                                            <Grid container spacing={3} display="flex" justifyContent="center">
                                    <Grid item xs={10} md={4}>
                                        <StyledButton onClick={() => handleDownload()}>
                                            <DownloadIcon />
                                            <Typography>
                                                Download CV
                                            </Typography>
                                        </StyledButton>
                                    </Grid>
                                    <Grid item xs={10} md={4}>
                                        <StyledButton onClick={() => handleEmail()}>
                                            <EmailIcon />
                                            <Typography>
                                                Contact me
                                            </Typography>
                                        </StyledButton>
                                    </Grid>
                                </Grid>
                            
                            <Grid container display="flex" justifyContent="center" spacing={3} pt={3}>
                                <Grid item xs={12} md={4} display="flex" justifyContent="center">
                                    
                                </Grid>
                                <Grid item xs={12} md={4} display="flex" justifyContent="center">
                                    
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </StyledHero>
        </>
    )
}

export default Hero
