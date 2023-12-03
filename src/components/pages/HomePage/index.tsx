import Nav from "@/components/molecules/Nav";
import About from "@/components/templates/About";
import HeroHome from "@/components/templates/Hero/HeroHome";
import Skills from "@/components/templates/Skills";

const HomePage = () => {
  return (
    <>
      <div className=" w-full bg-[#292F36]">
        <Nav />
        <HeroHome />
      </div>
      <About />
      <Skills />
    </>
  );
};

export default HomePage;
