interface LessLogoProps {
  className?: string;
  color?: string;
  isDisabled?: boolean;
  onClick?: () => void;
}

const LessIcon = ({ className, color, isDisabled, onClick }: LessLogoProps) => {
  return (
    <svg
    onClick={onClick}
      xmlns="http://www.w3.org/2000/svg"
      fill={color}
      className={`${className} ${isDisabled ? "hidden" : "flex"} cursor-pointer rounded-full border-[1px] border-black`}
      viewBox="0 0 448 512"
    >
      <path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z" />
    </svg>
  );
};

export default LessIcon;
