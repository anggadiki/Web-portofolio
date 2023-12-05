import Nav from "@/components/molecules/Nav";
import About from "@/components/templates/About";
import HeroHome from "@/components/templates/Hero/HeroHome";
import Skills from "@/components/templates/Skills";
import Works from "@/components/templates/Works";

const HomePage = () => {
  return (
    <>
      <div className=" w-full bg-[#292F36]">
        <Nav />
        <HeroHome />
      </div>
      <About />
      <Skills />
      <Works />
    </>
  );
};

export default HomePage;
