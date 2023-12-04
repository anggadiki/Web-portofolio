import Image from "next/image";

const SkillsContent = () => {
  return (
    <div className=" w-full absolute flex justify-center">
      <div className=" py-16">
        <div className=" flex flex-col items-center w-full font-ubuntu text-[#12F7D6] text-[64px]">
          <p className=" px-1">Skills</p>
          <div className=" flex items-center px-28 w-full">
            <div className=" w-5 h-4 rounded-full bg-[#12F7D6]"></div>
            <hr className=" border-2 border-[#12F7D6] w-full" />
            <div className=" w-5 h-4 rounded-full bg-[#12F7D6]"></div>
          </div>
        </div>
        <div className=" font-ibm text-center px-7 pt-4 text-white">
          <p>I am striving to never stop learning and improving</p>
        </div>
        <div className=" flex justify-center pt-16">
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
        <div className=" flex justify-center pt-8">
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
        <div className=" flex flex-wrap gap-10 justify-center pt-16">
          <div className=" py-7">
            <div className=" p-6 rounded-full bg-[#E54F26] relative">
              <Image
                src="/html5.svg"
                alt="programing"
                width={100}
                height={100}
                className=""
              />
              <p className=" text-[32px] -bottom-16 right-8 font-ibm absolute text-[#E54F26]">
                HTML
              </p>
            </div>{" "}
          </div>
          <div className=" py-7">
            <div className=" p-6 rounded-full bg-[#0C73B8] relative">
              <Image
                src="/css.svg"
                alt="programing"
                width={100}
                height={100}
                className=""
              />
              <p className=" text-[32px] -bottom-16 right-11 font-ibm absolute text-[#0C73B8]">
                CSS
              </p>
            </div>{" "}
          </div>
          <div className=" py-7">
            <div className=" p-6 rounded-full bg-[#E7A020] relative">
              <Image
                src="/node-js.svg"
                alt="programing"
                width={100}
                height={100}
                className=""
              />
              <p className=" text-[32px] -bottom-16 right-14 font-ibm absolute text-[#E7A020]">
                JS
              </p>
            </div>{" "}
          </div>
          <div className=" py-7">
            <div className=" p-6 rounded-full bg-[#28A9E0] relative">
              <Image
                src="/react.svg"
                alt="programing"
                width={100}
                height={100}
                className=""
              />
              <p className=" text-[32px] -bottom-16 right-5 font-ibm absolute text-[#28A9E0]">
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
