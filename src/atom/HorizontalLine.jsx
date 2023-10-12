function HorizontalLine({ color }) {
  return (
    <span
      // className={
      //   "relative block after:absolute after:left-0 after:right-0 after:h-px after:p-0 after:opacity-20 " +
      //   `after:bg-${color}`
      // }
      className={"w-full h-px opacity-20 block " + `bg-${color}`}
    ></span>
  );
}

HorizontalLine.displayName = "/src/atom/HorizontalLine.jsx";

export default HorizontalLine;
