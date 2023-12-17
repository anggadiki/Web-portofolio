const Highlight = () => {
  return (
    <div className=" w-full xl:w-1/3 py-16 bg-[#292F36]">
      <div className=" flex justify-center">
        <div className=" bg-[#1A1E23] px-8 py-12 rounded-[80px]">
          <div className=" flex gap-4 text-white font-ibm">
            <p className=" text-[#12F7D6] text-5xl font-medium">4</p>
            <div className=" text">
              <p>Programing</p>
              <p>Language</p>
            </div>
          </div>
          <div className=" flex gap-4 pt-12 text-white font-ibm">
            <p className=" text-[#12F7D6] text-5xl font-medium">6</p>
            <div className=" text">
              <p>Development</p>
              <p>Tools</p>
            </div>
          </div>{" "}
          <div className=" flex gap-4 pt-12 text-white font-ibm">
            <p className=" text-[#12F7D6] text-5xl font-medium">2</p>
            <div className=" text">
              <p>Years of</p>
              <p>Experience</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Highlight;
