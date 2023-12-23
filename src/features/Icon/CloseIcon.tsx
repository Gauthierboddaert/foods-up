type CloseIconProps = {
  width?: number;
  height?: number;
  color?: string;
  className?: string;
  handleModalStatus: () => void;
};

const CloseIcon = ({ className, handleModalStatus }: CloseIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      onClick={() => handleModalStatus()}
      className={`${className} stroke-current stroke-2 hover:cursor-pointer`}
      aria-hidden="true"
      role="presentation"
      focusable="false"
    >
      <path d="m6 6 20 20M26 6 6 26"></path>
    </svg>
  );
};

export default CloseIcon;
