const DeskripsiContent = () => {
  return (
    <div className=" w-full">
      <div className=" flex px-6 flex-col w-full">
        <div className="title pl-6 font-ubuntu text-white text-[32px]">
          <h1>Hey</h1>
          <h1>
            I’m <span className="text-[#12F7D6]">Angga,</span>
          </h1>
          <h1>Full-stack developer</h1>
        </div>
        <div className="paragraf py-8 flex justify-center font-ibm text-white">
          <div className="text text-base px-6">
            <p className=" px-1">
              I help business grow by crafting amazing web experiences. If
              you’re looking for a developer that likes to get stuff done,
            </p>
          </div>
        </div>
        <div className=" w-full flex gap-4 items-center font-ibm text-[#12F7D6] text-4xl font-medium">
          <h1 className=" pl-6">Let’s Talk</h1>
          <div className=" w-10 h-10 rounded-full bg-[#43454D]">
            <div className=" flex items-center justify-center w-full h-full">
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
                className="feather feather-mail w-auto h-auto"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeskripsiContent;
