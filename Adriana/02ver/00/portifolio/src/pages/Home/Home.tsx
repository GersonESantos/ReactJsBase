import Hero from "./sections/Hero/Hero"
import NavBar from "../../components/NavBar/NavBar"

interface HomeProps {
  theme: string;
}

const Home: React.FC<HomeProps> = ({ theme }) => {  
  return (
    <>
        <Hero theme={theme} />
        <NavBar />
    </>
  )
}

export default Home