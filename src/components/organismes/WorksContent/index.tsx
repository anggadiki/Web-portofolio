import MouseIcon from "@/components/molecules/MouseIcon";
import Title from "@/components/molecules/Title";
import Image from "next/image";

const WorksContent = () => {
  return (
    <div className=" w-full xl:py-32">
      <div className=" hidden xl:block">
        <MouseIcon />
      </div>
      <div className=" py-16 md:px-16 xl:px-32">
        <div className=" md:px-20 xl:px-60">
          <Title>Works</Title>
        </div>
        <p className=" text-center text-white font-ibm px-6 py-2">
          I had the pleasure of working with these awesome projects
        </p>
        <div className=" flex justify-center pt-14">
          <div className="  w-[297px] md:w-[480.75px] md:h-[320px] h-[198px] relative">
            <Image
              src="/works.png"
              alt="works"
              width={1280}
              height={852}
              className=" w-full h-full"
            />
            <div className="absolute w-[100px] md:w-[160.04px] md:h-[209.93px] h-[132px] top-6 md:top-10 md:left-10 left-6">
              <Image
                src="/programing.png"
                alt="works"
                width={1080}
                height={852}
                className=" w-auto h-full object-cover"
              />
            </div>
            <div className="absolute w-[136.13px] md:w-[232px] md:h-[129.67px] h-[80px] md:top-[94.77px] md:right-[31px] top-[59px] right-[22px]">
              <Image
                src="/website.png"
                alt="works"
                width={1880}
                height={952}
                className=" w-auto h-full"
              />
            </div>
            <div className=" absolute w-9 h-9 md:w-[72px] md:h-[72px] rounded-full bg-[#292F36] top-20 -left-8 md:-left-20 md:translate-y-[50%]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-chevron-left w-full h-full stroke-white p-1"
              >
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </div>{" "}
            <div className=" absolute w-9 h-9 md:w-[72px] md:h-[72px] rounded-full bg-[#292F36] top-20 -right-8 md:translate-y-[50%] md:-right-20 rotate-180">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-chevron-left w-full h-full stroke-white p-1"
              >
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </div>
            <div className=" flex gap-2 items-center absolute font-ibm top-4 md:top-9 right-4 text-[#12F7D6]">
              <div className=" md:text-2xl">
                <p>view Website</p>
                <hr className=" w-full border-2 border-white" />
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#12F7D6"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-mouse-pointer"
              >
                <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"></path>
                <path d="M13 13l6 6"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorksContent;
