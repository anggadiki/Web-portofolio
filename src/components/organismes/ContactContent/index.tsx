import Footer from "@/components/molecules/Footer";
import Title from "@/components/molecules/Title";

const ContactContent = () => {
  return (
    <div className=" w-full flex justify-center px-2">
      <div className="w-full py-16">
        <div className="">
          <Title>Contact</Title>
          <div className=" flex text-center pt-2 text-white font-ibm px-5">
            <p>I’m currently available for freelance work</p>
          </div>
        </div>
        <form action="POST" className=" px-3 py-16">
          <div className=" w-full border-2 border-[#12F7D6] py-4 rounded-tl-[32px] rounded-br-[32px]">
            <div className=" flex justify-center font-ibm text-[#12F7D6] text-2xl">
              <p>Send me a message</p>
            </div>
          </div>
          <div className=" flex flex-wrap justify-between font-ubuntu px-6 pt-16 text-[#12F7D6]">
            <div className=" flex w-[45%] flex-col gap-6">
              <label htmlFor="name">Your name *</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                className=" bg-transparent border-b-2 border-[#12F7D6] placeholder:text-white placeholder:font-light"
              />
            </div>{" "}
            <div className=" flex w-[45%] flex-col gap-6">
              <label htmlFor="email">Your email *</label>
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Enter your email"
                className=" bg-transparent border-b-2 border-[#12F7D6] placeholder:text-white placeholder:font-light"
              />
            </div>
          </div>
          <div className=" pt-16 px-6 font-ubuntu">
            <div className=" flex flex-col gap-6 text-[#12F7D6]">
              <label htmlFor="message">Your message *</label>
              <input
                id="message"
                name="message"
                type="text"
                placeholder="Enter your needs"
                className=" bg-transparent border-b-2 border-[#12F7D6] placeholder:text-white placeholder:font-light"
              />
            </div>
          </div>
          <div className=" flex justify-center pt-16 font-ubuntu">
            <button className=" flex justify-center items-center gap-4 bg-[#12F7D6] text-xl px-10 py-4 rounded-[32px]">
              <p className=" text-xl">Send Message</p>
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
                className="feather feather-send"
              >
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
            </button>
          </div>
        </form>
        <div className=" px-2">
          <hr className=" w-full" />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default ContactContent;
