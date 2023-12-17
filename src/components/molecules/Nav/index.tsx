"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Nav = () => {
  const title = "<C/>";

  // to navigate and replace nav color
  const pathname = usePathname();

  return (
    <div className=" w-full flex flex-col bg-[#292F36] text-white font-ibm">
      <div className=" flex justify-between py-6 px-6 md:px-8 xl:px-32">
        <div className=" flex gap-2 md:text-2xl xl:text-[32px]">
          <p className=" text-[#12F7D6]">{title}</p>
          <p>AnggaDiki</p>
        </div>
        <div className=" flex gap-4 md:gap-8 items-center xl:text-2xl">
          <Link href="/">
            <p
              className={`${
                pathname === "/" ? "text-[#12F7D6]" : "text-white"
              }`}
            >
              Home
            </p>
          </Link>
          <Link href="/blogs">
            <p
              className={`${
                pathname === "/blogs" ? " text-[#12F7D6]" : " text-white"
              }`}
            >
              Blogs
            </p>
          </Link>
          <div className=" xl:relative xl:pl-10">
            <input
              type="text"
              className=" hidden xl:flex w-52 bg-white rounded-3xl text-black"
            />
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
              className="feather feather-search w-auto h-auto md:pl-10 xl:absolute xl:top-1 xl:stroke-black xl:right-4"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </div>
        </div>
        <div className=" hidden md:flex md:gap-8 md:items-center">
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
            className="feather feather-instagram stroke-[#12F7D6] md:w-5 md:h-5"
          >
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
          </svg>
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
            className="feather feather-linkedin stroke-[#12F7D6] md:h-5 md:w-5"
          >
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
            <rect x="2" y="9" width="4" height="12"></rect>
            <circle cx="4" cy="4" r="2"></circle>
          </svg>
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
            className="feather feather-github stroke-[#12F7D6] md:w-5 md:h-5"
          >
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
          </svg>
        </div>
      </div>
      <div className=" px-6 md:px-8 xl:px-32">
        <hr className="border-[#43454D] border-2 py-0" />
      </div>
    </div>
  );
};

export default Nav;
