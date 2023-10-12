import { Fragment } from "react";
import { HorizontalLine, Button } from "@/atom";
import { Image_Info } from "@/utility";

function Offerings() {
  const renderServices = Image_Info.Header.offerings.map(({ id, src, alt }) => (
    <Fragment key={id}>
      <div className="h-[78px] w-full bg-light-silver grid place-content-center">
        <img src={src} alt={alt} />
      </div>

      <HorizontalLine style={"bg-dark-gray my-3"} />
    </Fragment>
  ));

  return (
    <section className="min-h-[647px] mb-24">
      <h1 className="font-noto-serif-jp font-light text-[38px] text-dark-gray mb-12">
        We help brands like yours stay competitive through AI.
      </h1>
      <HorizontalLine style={"bg-dark-gray my-3"} />

      {renderServices}

      <Button innerText={"Work with us"} style={"h-10 px-5 pt-10 pb-5"} />

      <HorizontalLine style={"bg-dark-gray my-3"} />
    </section>
  );
}

Offerings.displayName = "/src/pages/HomePage/Sections/Offerings.jsx";

export default Offerings;
