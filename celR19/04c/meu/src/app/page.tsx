import Menu from "@/components/Menu";
import Footer from "@/components/Footer";
import User from "@/components/user";

const Home = () => {
  const userName = "GersonES";
  const email = "gebhsantos@gmail.com";
  const address = "R. Areceburgo, 123 - São Paulo, SP";
  const phone = "11 99999-9999";
  const occupa = "Desenvolvedor de Software";
  const hobbies = ["programar", "ler", "jogar"];
  const bio = "Apaixonado por tecnologia e desenvolvimento de software.";
  const profilePicture = "/images/profile.jpg"; // Exemplo de caminho para imagem
  const socialMedia = {
    twitter: "@gersones",
    linkedin: "linkedin.com/in/gersones",
    facebook: "facebook.com/gersones", // Adicione esta propriedade
    instagram: "instagram.com/gersones", // Adicione esta propriedade
  };
  const preferences = {
    theme: "dark",
    notifications: true,
    children: null,
  };

  return (
    <div>
      <Menu /><br />

      <User
        name={userName}
        age={68}
        email={email}
        address={address}
        phone={phone}
        occupa={occupa}
        hobbies={hobbies}
        bio={bio}
        profilePicture={profilePicture}
        socialMedia={socialMedia}
        preferences={preferences}
      />
      <h2>Bem vindo GersonES</h2><br />
      <Footer />
    </div>
  );
};

export default Home;