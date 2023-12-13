type Props = {
  children?: React.ReactNode;
};
const Button = (props: Props) => {
  const { children = "Subscribe" } = props;
  return (
    <button className=" border-2 text-white border-[#12F7D6] rounded-[32px] px-8 py-3">
      <p>{children}</p>
    </button>
  );
};

export default Button;
