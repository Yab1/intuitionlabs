function HorizontalLine({ color }) {
  return (
    <span className={"w-full h-px opacity-20 block " + `bg-${color}`}></span>
  );
}

HorizontalLine.displayName = "/src/atom/HorizontalLine.jsx";

export default HorizontalLine;
