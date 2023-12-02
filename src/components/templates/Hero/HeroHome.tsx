import HeroContaint from "@/components/organismes/HeroContaint";
import DeskripsiContent from "@/components/organismes/HeroContaint/DeskripsiContent";
import Highlight from "@/components/organismes/HeroContaint/Hightlight";

const HeroHome = () => {
  return (
    <div className=" w-full">
      <HeroContaint />
      <DeskripsiContent />
      <Highlight />
    </div>
  );
};

export default HeroHome;
