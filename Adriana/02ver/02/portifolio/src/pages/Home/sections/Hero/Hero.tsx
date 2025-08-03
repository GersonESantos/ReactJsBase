import { styled } from "@mui/material";
import Avatar from "../../../../assets/images/GersonES2025.jpg"
interface HeroProps {
  theme: string;
}

const Hero: React.FC<HeroProps> = ({ theme }) => {  
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
const StyledImg = styled("img")(() => ({   
        width: "75%",
        borderRadius: "50%",
        height: "300px", // Mantém proporção circular
        objectFit: "cover", // Garante que a imagem se ajuste bem
    }));
    return (
        <StyledHero>
            <h1>Welcome to My Portfolio</h1>
        </StyledHero>
    );
};

export default Hero;