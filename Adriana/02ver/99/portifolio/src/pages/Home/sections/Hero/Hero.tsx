import { styled } from "@mui/material";

interface Hero {
  theme: string;
}

const Hero: React.FC<Hero> = ({ theme }) => {  
    const StyledHero = styled("div")(() => ({
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        background: theme === 'dark' ? "black" : 
                   theme === 'light' ? "white" : 
                   theme === 'expressive' ? "linear-gradient(45deg, #ff6b6b, #4ecdc4)" : "black",
        color: theme === 'light' ? "black" : "white",
        transition: "all 0.3s ease"
    }));  

    return (
        <StyledHero>
            <h1>Welcome to My Portfolio</h1>
        </StyledHero>
    );
};

export default Hero;