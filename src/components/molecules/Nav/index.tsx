const Nav = () => {
  const title = "<C/>";
  return (
    <div className=" w-full flex flex-col bg-[#292F36] text-white font-ibm">
      <div className=" flex justify-between py-6 px-6">
        <div className=" flex gap-2">
          <p className=" text-[#12F7D6]">{title}</p>
          <p>AnggaDikiSaputra</p>
        </div>
        <div className=" flex gap-4 items-center">
          <p className=" text-[#12F7D6]">Home</p>
          <p>Blogs</p>
          <div className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-search w-auto h-auto"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </div>
        </div>
      </div>
      <div className=" px-6">
        <hr className="border-[#43454D] border-2 py-0" />
      </div>
    </div>
  );
};

export default Nav;
