import SkillsContent from "@/components/organismes/SkillsContent";

const Skills = () => {
  return (
    <>
      <div
        className=" w-full h-[1250px] bg-center bg-cover relative"
        style={{ backgroundImage: 'url("/programing.png")' }}
      >
        <div className=" w-full h-[1250px] min-h-screen bg-[#292F36] absolute opacity-80"></div>
        <SkillsContent />
      </div>
    </>
  );
};

export default Skills;
