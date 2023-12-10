import BlogsDecsription from "@/components/molecules/BlogDesc";
import Title from "@/components/molecules/Title";

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
        <BlogsDecsription />
        <div className=" flex flex-wrap pb-16 pt-8 w-full gap-4 justify-center text-xl">
          <button className=" bg-[#12F7D6] rounded-[32px] px-8 py-3">
            <p>View More</p>
          </button>{" "}
          <button className=" border-2 text-white border-[#12F7D6] rounded-[32px] px-8 py-3">
            <p>Subscribe</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogContent;
