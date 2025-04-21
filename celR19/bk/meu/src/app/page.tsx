import Menu from "@/components/Menu";
import Footer from "@/components/Footer";
import User from "@/components/user";

const  Home = () =>  {

  const userName = "GersonES";
  const email = "gebhsantos@gmail.com";
  const address = "R. Areceburgo, 123 - São Paulo, SP";
  const phone = "11 99999-9999";
  const occupa = "DesenvolvedordeSoftware";
  // const hobbies = ["programar", "ler", "jogar"];
  return (
    <div>
      <Menu /><br />

      <User name={userName}
            age={68}
            email={email}
            address={address}
            phone={phone}
            occupa={"Desenvolvedor de Software"}
            // hobbies={[...hobbies]}
      >
        
      </User>
      <h2>Bem vindo GersonES</h2><br />
      <Footer />
    </div>
   
  );
}
export default Home;