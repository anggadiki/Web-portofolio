import Image from "next/image";

const HeroContaint = () => {
  return (
    <div className=" w-full bg-[#292F36] py-16">
      <div className=" flex flex-col items-center">
        <div className="hero-profil w-[320px] h-[520px] pt-3  border-[6px] rounded-tl-[160px] rounded-br-[160px] border-white">
          <div className=" w-full h-full flex flex-col items-center p-6">
            <div className=" w-24 h-24 border-[4px] border-[#12F7D6] rounded-full">
              <Image
                src="/profile.png"
                alt="profil"
                width={100}
                height={100}
                className=" object-cover w-full h-full rounded-full"
              />
            </div>
            <div className=" flex flex-col items-center pt-4 font-ibm text-white">
              <p className=" text-2xl font-medium">Angga</p>
              <p>Full-stack Developer</p>
            </div>
            <div className=" w-full flex-col pt-8">
              <div className="font-ibm text-white px-2">
                <div className=" flex gap-5 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#12F7D6"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-mail w-[14px]"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                  <p className=" text-sm">abdurrahman_sinan@hotmail.com</p>
                </div>{" "}
                <div className=" flex gap-5 items-center pt-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#12F7D6"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-map-pin w-[14px]"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <p className=" text-sm">Turkey</p>
                </div>
                <div className=" flex gap-5 items-center pt-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#12F7D6"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-briefcase w-[14px]"
                  >
                    <rect
                      x="2"
                      y="7"
                      width="20"
                      height="14"
                      rx="2"
                      ry="2"
                    ></rect>
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                  </svg>
                  <p className=" text-sm">Full-time / Freelancer</p>
                </div>{" "}
                <div className=" flex gap-5 items-center pt-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#12F7D6"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-link w-[14px]"
                  >
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                  </svg>
                  <p className=" text-sm">www.anggadiki.com</p>
                </div>
              </div>
            </div>
            <div className=" flex w-full px-2 pt-4 gap-4 ">
              <div className=" bg-[#12F7D6] px-2 rounded-full font-ibm text-sm">
                HTML
              </div>
              <div className=" bg-[#12F7D6] px-2 rounded-full font-ibm text-sm">
                CSS
              </div>
              <div className=" bg-[#12F7D6] px-2 rounded-full font-ibm text-sm">
                JS
              </div>
              <div className=" bg-[#12F7D6] px-2 rounded-full font-ibm text-sm">
                REACT
              </div>
            </div>
            <div className=" w-full flex pr-12 px-2 pt-6">
              <button className=" w-full flex justify-center gap-5 bg-white py-3 rounded-full font-ibm text-sm text-black">
                <p className="font-ubuntu text-lg">Download CV</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-download w-auto h-auto"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroContaint;
