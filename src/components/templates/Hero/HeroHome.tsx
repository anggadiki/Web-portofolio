import SideBar from "@/components/molecules/SideBar";
import HeroContaint from "@/components/organismes/HeroContaint";
import DeskripsiContent from "@/components/organismes/HeroContaint/DeskripsiContent";
import Highlight from "@/components/organismes/HeroContaint/Hightlight";

const HeroHome = () => {
  return (
    <div className=" w-full xl:relative">
      <div className=" hidden xl:flex justify-center font-ubuntu text-[117px] pt-14">
        <p className=" text-[#98FAEC]">Developer</p>
      </div>
      <HeroContaint />
      <div className=" xl:flex xl:items-center xl:px-32 xl:pb-20">
        <DeskripsiContent />
        <Highlight />
      </div>
      <div className=" hidden xl:block xl:absolute xl:top-16 xl:left-10">
        <SideBar />
      </div>
    </div>
  );
};

export default HeroHome;
