import BlogsDecsription from "@/components/molecules/BlogDesc";
import Button from "@/components/molecules/Button";
import Footer from "@/components/molecules/Footer";
import Nav from "@/components/molecules/Nav";
import Title from "@/components/molecules/Title";
type BlogType = {
  id: number;
  title?: string;
}[];

const blogs: BlogType = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];

const BlogsPage = () => {
  return (
    <>
      <div className=" w-full bg-[#292F36]">
        <Nav />
        <div className=" bg-[#292F36] pt-16 md:px-16 xl:pt-32 xl:px-32">
          <div className=" md:px-20 xl:px-60">
            <Title>Blogs</Title>
          </div>
          <p className=" text-center font-ibm text-white px-4 pt-4">
            My thoughts on technology and business, welcome to subscribe
          </p>
          <div className=" flex justify-center py-16">
            <Button>Subscribe My Blogs</Button>
          </div>
          <div className=" px-6">
            <hr className=" border-1 border-white" />
          </div>
        </div>
        {blogs.map((blog) => (
          <div key={blog.id} className=" md:px-16 xl:px-32">
            <BlogsDecsription />
          </div>
        ))}
        <div className=" pb-16 xl:pb-32"></div>
        <div className=" bg-[#1A1E23] pb-8">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default BlogsPage;
