import ArtikelParagraf from "@/components/molecules/ArtikelParagraf";
import Button from "@/components/molecules/Button";
import Remark from "@/components/molecules/Remark";
import Image from "next/image";

const ArtikelContent = () => {
  return (
    <div className=" w-full py-16 px-5">
      <div className=" flex justify-center">
        <div className=" font-ubuntu">
          <p className=" text-[#12F7D6] text-[32px] px-5">
            What does it take to become a web developer?
          </p>
          <Remark />
          <div className=" w-full flex flex-col items-center">
            <div className=" w-[320px] h-[295px] bg-red-50">
              <Image
                src="/blog.jpeg"
                alt="blog"
                width={4070}
                height={2752}
                className=" object-cover w-full h-full"
              />
            </div>
            <ArtikelParagraf />
            <div className=" flex flex-wrap gap-6 text-white font-ubuntu font-light text-sm">
              <div className=" bg-[#43454D] px-2 py-1 rounded-2xl">
                Web Developer
              </div>
              <div className=" bg-[#43454D] px-2 py-1 rounded-2xl">
                Web Developer Job
              </div>
              <div className=" bg-[#43454D] px-2 py-1 rounded-2xl">
                Web Development
              </div>
            </div>
          </div>
          <Remark />
          <div className=" flex justify-center">
            <Button>Subscribe My Blogs</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtikelContent;
