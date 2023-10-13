function Typography({ innerText, style }) {
  return (
    <h2
      className={
        "font-noto-serif-jp font-light text-[42px] text-dark-gray " + style
      }
    >
      {innerText}
    </h2>
  );
}

Typography.displayName = "/src/atom/Typography.jsx";

export default Typography;
