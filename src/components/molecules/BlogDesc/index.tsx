import Image from "next/image";

const readMore = "Read More >>";
const BlogsDecsription = () => {
  return (
    <div className=" flex items-center flex-col pb-8 w-full px-6 bg-[#292F36]">
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
          variety of tasks and processes involved in creating websites for the
          internet…
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
    </div>
  );
};

export default BlogsDecsription;