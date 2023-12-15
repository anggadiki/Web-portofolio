import Title from "@/components/molecules/Title";
import Image from "next/image";

const SkillsContent = () => {
  return (
    <div className=" w-full absolute flex justify-center">
      <div className=" py-16 md:px-16">
        <div className=" md:px-20">
          <Title>Skills</Title>
          <div className=" font-ibm text-center px-7 pt-4 text-white">
            <p>I am striving to never stop learning and improving</p>
          </div>
        </div>
        <div className=" hidden md:flex md:pt-16 md:justify-center md:gap-8">
          <div className=" flex justify-center">
            <div className="skills flex flex-col py-4 items-center bg-[#98FAEC] px-8 rounded-lg">
              <div className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="34"
                  height="34"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-monitor"
                >
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                  <line x1="8" y1="21" x2="16" y2="21"></line>
                  <line x1="12" y1="17" x2="12" y2="21"></line>
                </svg>
              </div>
              <div className=" w-full flex flex-col items-center font-ibm text-2xl py-2">
                <p>Web Development</p>
                <p className=" text-base">HTML·CSS·JS·REACT</p>
              </div>
            </div>
          </div>{" "}
          <div className=" flex justify-center">
            <div className="skills flex flex-col py-4 items-center bg-[#98FAEC] px-8 rounded-lg">
              <div className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="34"
                  height="34"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-smartphone"
                >
                  <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
                  <line x1="12" y1="18" x2="12.01" y2="18"></line>
                </svg>
              </div>
              <div className=" w-full flex flex-col items-center font-ibm text-2xl py-2">
                <p>App Development</p>
                <p className=" text-base">iOS·Android</p>
              </div>
            </div>
          </div>
        </div>
        <div className=" md:hidden flex justify-center pt-16">
          <div className="skills flex flex-col py-4 items-center bg-[#98FAEC] px-8 rounded-lg">
            <div className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="34"
                height="34"
                viewBox="0 0 24 24"
                fill="none"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-monitor"
              >
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                <line x1="8" y1="21" x2="16" y2="21"></line>
                <line x1="12" y1="17" x2="12" y2="21"></line>
              </svg>
            </div>
            <div className=" w-full flex flex-col items-center font-ibm text-2xl py-2">
              <p>Web Development</p>
              <p className=" text-base">HTML·CSS·JS·REACT</p>
            </div>
          </div>
        </div>{" "}
        <div className=" md:hidden flex justify-center pt-8">
          <div className="skills flex flex-col py-4 items-center bg-[#98FAEC] px-8 rounded-lg">
            <div className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="34"
                height="34"
                viewBox="0 0 24 24"
                fill="none"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-smartphone"
              >
                <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
                <line x1="12" y1="18" x2="12.01" y2="18"></line>
              </svg>
            </div>
            <div className=" w-full flex flex-col items-center font-ibm text-2xl py-2">
              <p>App Development</p>
              <p className=" text-base">iOS·Android</p>
            </div>
          </div>
        </div>
        <div className=" flex flex-wrap gap-10 md:gap-24 justify-center md:px-20 pt-16">
          <div className=" py-7">
            <div className=" p-5 md:p-10 rounded-full bg-[#E54F26] relative">
              <Image
                src="/html5.svg"
                alt="programing"
                width={100}
                height={100}
                className=""
              />
              <p className=" text-[32px] -bottom-16 right-[50%] translate-x-[50%] font-ibm absolute text-[#E54F26]">
                HTML
              </p>
            </div>{" "}
          </div>
          <div className=" py-7">
            <div className=" p-5 md:p-10 rounded-full bg-[#0C73B8] relative">
              <Image
                src="/css.svg"
                alt="programing"
                width={100}
                height={100}
                className=""
              />
              <p className=" text-[32px] -bottom-16 right-[50%] translate-x-[50%] font-ibm absolute text-[#0C73B8]">
                CSS
              </p>
            </div>{" "}
          </div>
          <div className=" py-7">
            <div className=" p-5 md:p-10 rounded-full bg-[#E7A020] relative">
              <Image
                src="/node-js.svg"
                alt="programing"
                width={100}
                height={100}
                className=""
              />
              <p className=" text-[32px] -bottom-16 right-[50%] translate-x-[50%] font-ibm absolute text-[#E7A020]">
                JS
              </p>
            </div>{" "}
          </div>
          <div className=" py-7">
            <div className=" p-5 md:p-10 rounded-full bg-[#28A9E0] relative">
              <Image
                src="/react.svg"
                alt="programing"
                width={100}
                height={100}
                className=""
              />
              <p className=" text-[32px] -bottom-16 right-[50%] translate-x-[50%] font-ibm absolute text-[#28A9E0]">
                REACT
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsContent;
