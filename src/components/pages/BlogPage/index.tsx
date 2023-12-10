import BlogsDecsription from "@/components/molecules/BlogDesc";
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
        <div className=" bg-[#292F36] pt-16">
          <Title>Blogs</Title>
          <p className=" text-center font-ibm text-white px-4 pt-4">
            My thoughts on technology and business, welcome to subscribe
          </p>
        </div>
        {blogs.map((blog) => (
          <div key={blog.id}>
            <BlogsDecsription />
          </div>
        ))}
        <div className=" bg-[#1A1E23] pb-8">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default BlogsPage;
