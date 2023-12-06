import Title from "@/components/molecules/Title";
import Image from "next/image";

const readMore = "Read More >>";
const BlogContent = () => {
  return (
    <div className=" w-full">
      <div className="">
        <div className="">
          <Title>Blogs</Title>
          <p className=" text-center text-white font-ibm px-6 py-2">
            My thoughts on technology and business, welcome to subscribe
          </p>
        </div>
        <div className=" flex items-center flex-col py-8 w-full px-6">
          <div className=" pb-9 w-full">
            <hr className=" border-1 border-white" />
          </div>
          <div className=" w-[130px] h-[130px]">
            <Image
              src="/blog.jpeg"
              alt="blog"
              width={4070}
              height={2752}
              className=" w-full h-full bg-cover"
            />
          </div>
          <div className=" px-5 pt-8 font-ubuntu text-[#12F7D6]">
            <div className="">
              <p className=" text-[32px] leading-9">
                What does it take to become a web developer?
              </p>
            </div>
            <p className=" text-white py-6">
              Web development, also known as website development, encompasses a
              variety of tasks and processes involved in creating websites for
              the internet…
            </p>
            <div className=" pb-6">
              <p>{readMore}</p>
              <hr className=" border-white w-3/12" />
            </div>
            <div className=" rounded-2xl bg-[#43454D] w-[132px] text-white py-1 flex justify-center items-center ">
              <p className=" font-light">Web Developer</p>
            </div>
            <div className=" flex flex-wrap text-white gap-2 text-sm pt-4">
              <p className=" font-medium">Text</p>
              <p className=" font-light">Sinan</p>
              <p className=" font-medium">Date</p>
              <p className=" font-light">10.Oct 2023</p>
              <p className=" font-medium">Read</p>
              <p className=" font-light">1 Min</p>
            </div>
          </div>
          <div className=" pt-9 w-full">
            <hr className=" border-1 border-white" />
          </div>
          <div className=" flex flex-wrap py-14 w-full gap-4 justify-center text-xl">
            <button className=" bg-[#12F7D6] rounded-[32px] px-8 py-3">
              <p>View More</p>
            </button>{" "}
            <button className=" border-2 text-white border-[#12F7D6] rounded-[32px] px-8 py-3">
              <p>Subscribe</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogContent;
