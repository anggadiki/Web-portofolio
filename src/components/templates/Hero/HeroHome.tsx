import HeroContaint from "@/components/organisme/HeroContaint";
import DeskripsiContent from "@/components/organisme/HeroContaint/DeskripsiContent";
import Highlight from "@/components/organisme/HeroContaint/Hightlight";

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
