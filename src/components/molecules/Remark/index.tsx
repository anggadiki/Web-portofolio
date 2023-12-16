const Remark = () => {
  return (
    <div className=" text-white font-ubuntu text-sm py-8">
      <hr className="" />
      <div className=" flex justify-center md:justify-between md:items-center gap-6 py-4">
        <div className=" flex gap-6">
          <div className=" flex gap-2">
            <p className=" font-medium">Text</p>
            <p className=" font-light">Angga</p>
          </div>
          <div className=" flex gap-2">
            <p className=" font-medium">Date</p>
            <p className=" font-light">10.Oct 2023</p>
          </div>
          <div className=" flex gap-2">
            <p className=" font-medium">Read</p>
            <p className=" font-light">1 Min</p>
          </div>
        </div>
        <div className=" hidden md:flex justify-center items-center p-2 bg-[#98FAEC] rounded-[48px]">
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
            className="feather feather-share stroke-black"
          >
            <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path>
            <polyline points="16 6 12 2 8 6"></polyline>
            <line x1="12" y1="2" x2="12" y2="15"></line>
          </svg>
        </div>
      </div>
      <hr className="" />
    </div>
  );
};
export default Remark;
