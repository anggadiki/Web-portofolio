import AboutContent from "@/components/organismes/AboutContent";

const About = () => {
  return (
    <div
      className=" w-full bg-[#1A1E23] bg-cover"
      style={{ backgroundImage: 'url("/background .png")' }}
    >
      <div className=" px-4">
        <AboutContent />
      </div>
    </div>
  );
};

export default About;
