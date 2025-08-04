import { Box, Container, Grid, Typography, styled } from "@mui/material"
import Avatar from "../../../../assets/images/GersonES2025.jpg"
import DownloadIcon from '@mui/icons-material/Download';
import StyledButton from "../../../../components/StyledButton/StyledButton";
import CV from "../../../../assets/pdfs/Open.pdf";
import EmailIcon from '@mui/icons-material/Email';
import { AnimatedBackground } from "../../../../components/AnimatedBackground/AnimatedBackground"

interface HeroProps {
  theme: string;
}

const Hero: React.FC<HeroProps> = ({ theme }) => {  
    const StyledHero = styled("div")(({ theme: muiTheme }) => ({
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        background: theme === 'dark' ? "black" : 
                   theme === 'light' ? "white" : 
                   theme === 'expressive' ? "linear-gradient(45deg, #ff6b6b, #4ecdc4)" : "black",
        color: theme === 'light' ? "black" : "white",
        transition: "all 0.3s ease",
        [muiTheme.breakpoints.up('xs')]: {
            paddingTop: "100px",
        },
        [muiTheme.breakpoints.up('md')]: {
            paddingTop: "0",
        }
    }));  

    const StyledImg = styled("img")(({ theme }) => ({   
        width: "75%",
        borderRadius: "50%",
        height: "300px",
        objectFit: "cover",
        border: `1px solid ${theme.palette.primary.contrastText}`
    }));

    const handleDownload = () => {
        console.log("download")
        const link = document.createElement('a');
        link.href = CV
        link.download = 'example.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const handleEmail = () => {
        const emailAddress = 'example@example.com';
        const subject = 'Subject';
        const body = 'Hello! I saw your portfolio...';
        const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.open(mailtoLink);
    }

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
                                    <Typography variant="h4" color="primary.contrastText" mt={2}>
                                        Welcome to My Portfolio
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={7}>
                            <Typography color="primary.contrastText" variant="h1" textAlign="center" pb={2}>
                                Gerson E. Santos
                            </Typography>
                            <Typography color="primary.contrastText" variant="h2" textAlign="center">
                                I'm a Software Engineer
                            </Typography>
                            
                            <Grid container spacing={3} sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
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
                            
                            <Grid container spacing={3} sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
                                <Grid item xs={12} md={4} sx={{ display: "flex", justifyContent: "center" }}>
                                    {/* Conteúdo adicional aqui */}
                                </Grid>
                                <Grid item xs={12} md={4} sx={{ display: "flex", justifyContent: "center" }}>
                                    {/* Conteúdo adicional aqui */}
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </StyledHero>
        </>
    );
};

export default Hero;