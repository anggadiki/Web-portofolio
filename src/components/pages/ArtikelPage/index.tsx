import Footer from "@/components/molecules/Footer";
import Nav from "@/components/molecules/Nav";
import Artikel from "@/components/templates/Artikel";
import More from "@/components/templates/More";

const ArtikelPage = () => {
  return (
    <div className=" w-full">
      <Nav />
      <Artikel />
      <More />
      <div className=" bg-[#1A1E23] md:pb-8">
        <Footer />
      </div>
    </div>
  );
};

export default ArtikelPage;
