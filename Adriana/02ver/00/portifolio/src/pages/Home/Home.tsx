import NavBar from "../../components/NavBar/NavBar"
import Hero from "./sections/Hero/Hero"

interface HomeProps {
  theme: string;
}

const Home: React.FC<HomeProps> = ({ theme }) => {  
  return (
    <>
        <NavBar />
        <Hero theme={theme} />
    </>
  )
}

export default Home