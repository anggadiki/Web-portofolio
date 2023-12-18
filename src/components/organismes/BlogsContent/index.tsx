import BlogsDecsription from "@/components/molecules/BlogDesc";
import Button from "@/components/molecules/Button";
import MouseIcon from "@/components/molecules/MouseIcon";
import Title from "@/components/molecules/Title";

const BlogContent = () => {
  return (
    <div className=" w-full xl:py-[100px]">
      <div className=" hidden xl:block">
        <MouseIcon />
      </div>
      <div className=" md:p-16 xl:p-0 xl:pt-16 xl:px-32">
        <div className=" md:px-20 xl:px-60">
          <Title>Blogs</Title>
        </div>
        <p className=" text-center text-white font-ibm px-6 py-2 md:pb-16">
          My thoughts on technology and business, welcome to subscribe
        </p>
        <BlogsDecsription />
        <div className=" flex flex-wrap pb-16 xl:pb-0 pt-8 w-full gap-4 md:gap-8 justify-center text-xl">
          <button className=" bg-[#12F7D6] rounded-[32px] px-8 py-3">
            <p>View More</p>
          </button>{" "}
          <Button />
        </div>
      </div>
    </div>
  );
};

export default BlogContent;
