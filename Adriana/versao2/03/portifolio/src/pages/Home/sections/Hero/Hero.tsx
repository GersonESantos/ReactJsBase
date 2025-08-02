import { styled } from "@mui/material"
const Hero = () => {  

const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme || 'light';
  });



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
