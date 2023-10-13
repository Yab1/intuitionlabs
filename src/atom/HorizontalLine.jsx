function HorizontalLine({ style }) {
  return (
    <span
      className={"w-full h-px bg-dark-gray opacity-20 block " + style}
    ></span>
  );
}

HorizontalLine.displayName = "/src/atom/HorizontalLine.jsx";

export default HorizontalLine;
