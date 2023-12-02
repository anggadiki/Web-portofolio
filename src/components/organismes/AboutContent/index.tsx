const AboutContent = () => {
  return (
    <div className=" w-full py-16">
      <div className=" flex flex-col items-center">
        <div className=" flex justify-center items-center w-56 h-16 rounded-tl-[40px] rounded-br-[40px] border-[4px] border-[#12F7D6] bg-[#292F36]">
          <p className=" font-ubuntu text-white text-3xl">About me</p>
        </div>
        <div className=" w-full bg-[#292F36] mt-8 rounded-[40px]">
          <div className=" p-6 w-full font-ibm text-white">
            <div className=" py-6 px-2">
              <p className="">
                <span className=" text-[#12F7D6] font-medium text-[32px]">
                  Hello!
                </span>
              </p>
              <p className="">
                My name is Sinan and I specialize in web developement that
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
                <span className=" text-[#12F7D6]">bolgs</span> , reading, or
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
        <div
          className="mt-16 w-[272px] h-[364px] bg-cover rounded-2xl"
          style={{ backgroundImage: 'url("/bg.jpeg")' }}
        ></div>
      </div>
    </div>
  );
};

export default AboutContent;
