type TitleProps = {
  children?: React.ReactNode;
};

const Title = (props: TitleProps) => {
  const { children = "Skills" } = props;
  return (
    <div className=" w-full">
      <div className=" flex flex-col items-center w-full font-ubuntu text-[#12F7D6] text-[64px]">
        <p className=" px-1">{children}</p>
        <div className=" flex items-center px-16 w-full">
          <div className=" w-5 h-4 rounded-full bg-[#12F7D6]"></div>
          <hr className=" border-2 border-[#12F7D6] w-full" />
          <div className=" w-5 h-4 rounded-full bg-[#12F7D6]"></div>
        </div>
      </div>
    </div>
  );
};

export default Title;
