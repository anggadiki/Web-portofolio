import BlogsDecsription from "@/components/molecules/BlogDesc";

const mores = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];
const More = () => {
  return (
    <div className=" w-full bg-[#292F36] md:px-16">
      <div className=" font-ubuntu px-6">
        <p className=" text-[32px] pb-8 text-center text-[#12F7D6]">
          You might also like
        </p>
        <hr className=" border-1 border-white" />
      </div>
      {mores.map((more) => (
        <div className="" key={more.id}>
          <BlogsDecsription />
        </div>
      ))}
    </div>
  );
};

export default More;
