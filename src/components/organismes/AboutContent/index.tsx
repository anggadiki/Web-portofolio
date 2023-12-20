import MouseIcon from "@/components/molecules/MouseIcon";
import Image from "next/image";

const AboutContent = () => {
  return (
    <div className=" w-full py-16 md:px-16 xl:px-32 xl:py-32">
      <div className=" hidden xl:block xl:pb-32">
        <MouseIcon />
      </div>
      <div className=" flex flex-col items-center md:items-start">
        <div className=" flex justify-center items-center w-56 h-16 md:w-[367px] md:h-[104px] rounded-tl-[40px] rounded-br-[40px] border-[4px] border-[#12F7D6] bg-[#292F36]">
          <p className=" font-ubuntu text-white text-3xl md:text-[64px]">
            About me
          </p>
        </div>
        <div className=" w-full bg-[#292F36] mt-8 xl:mt-16 rounded-[40px]">
          <div className=" p-6 md:p-0 md:py-6 md:px-10 w-full font-ibm text-white">
            <div className=" py-6 px-2">
              <p className="">
                <span className=" text-[#12F7D6] font-medium text-[32px]">
                  Hello!
                </span>
              </p>
              <p className="">
                My name is Angga and I specialize in web developement that
                utilizes <span className=" text-[#12F7D6]">HTML</span>, {""}
                <span className=" text-[#12F7D6]">CSS</span>,{" "}
                <span className=" text-[#12F7D6]">JS</span>, and{" "}
                <span className=" text-[#12F7D6]">REACT</span> etc.
              </p>
              <p className=" pt-4">
                I am a highly motivated individual and eternal optimist
                dedicated to writing clear, concise, robust code that works.
                Striving to never stop learning and improving.
              </p>
              <p className=" pt-4">
                When I am not coding, I am writing{" "}
                <span className=" text-[#12F7D6]">blogs</span> , reading, or
                picking up some new hands-on art project like{" "}
                <span className=" text-[#12F7D6]">photography</span>.
              </p>
              <p className=" pt-4">
                I like to have my perspective and belief systems challenged so
                that I see the world through new eyes.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-16 xl:mt-32 w-[272px] h-[364px] md:w-[462px] md:h-[556px] md:mx-auto">
          <Image
            src="/bg.jpeg"
            alt="bg"
            width={3262}
            height={4156}
            className=" object-cover w-full h-full rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
