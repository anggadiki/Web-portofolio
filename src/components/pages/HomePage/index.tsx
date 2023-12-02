import Nav from "@/components/molecules/Nav";
import About from "@/components/templates/About";
import HeroHome from "@/components/templates/Hero/HeroHome";

const HomePage = () => {
  return (
    <>
      <div className=" w-full bg-[#292F36]">
        <Nav />
        <HeroHome />
      </div>
      <About />
    </>
  );
};

export default HomePage;
