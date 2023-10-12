import { IoMdArrowForward } from "react-icons/io";

function Button({ innerText, style }) {
  return (
    <button
      className={
        "bg-intense-red w-full font-jetBrains-mono text-xs text-white font-light uppercase flex items-center justify-between rounded " +
        style
      }
    >
      {innerText}
      <IoMdArrowForward className="font-light text-sm" />
    </button>
  );
}

Button.displayName = "/src/atom/Button.jsx";

export default Button;
