import { useSelector, useDispatch } from "react-redux";
import { increaseCarousel, decreaseCarousel } from "@/slices";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";
import { HorizontalLine, Typography } from "@/atom";
import { Image_Info } from "@/utility";

function Expertise() {
  const { Adrien, Kenny } = Image_Info.HomePage.expertise;
  const { carousel } = useSelector((state) => state.ui);
  const dispatch = useDispatch();

  return (
    <section className="min-h-[753px] bg-light-silver mb-24 pt-16">
      <Typography
        innerText={"Work with AI experts."}
        style={"text-[38px] mb-12 px-5"}
      />

      <HorizontalLine />

      <div className="flex mt-3 overflow-x-hidden">
        <article className="w-[242px] mx-3 flex-shrink-0">
          <img src={Adrien.src} alt={Adrien.alt} className="rounded-md" />
          <h3 className="font-gothic-a1 font-bold mt-3 mb-1">Adrien Laurent</h3>
          <h4 className="font-gothic-a1 text-sm opacity-60 mb-4">Co-Founder</h4>
          <p className="font-gothic-a1 text-sm text-dark-gray">
            Founded and sold a telecom company of 20 employees. Built a
            proprietary telecommunication platform that's still powering
            thousands of institutional and enterprise clients. 8+ years EO
            member.
          </p>
        </article>

        <HorizontalLine style={"w-px h-[390px] flex-shrink-0"} />

        <article className="w-[242px] mx-3 flex-shrink-0 relative before:absolute before:inset-0 before:bg-light-silver before:z-10 before:opacity-70">
          <img src={Kenny.src} alt={Kenny.alt} className="rounded-md" />
          <h3 className="font-gothic-a1 font-bold mt-3 mb-1">
            Kenny Schumacher
          </h3>
          <h4 className="font-gothic-a1 text-sm opacity-60 mb-4">
            Head of Process
          </h4>
          <p className="font-gothic-a1 text-sm text-dark-gray">
            Founded two startups with successful exits. Scaled companies as
            founder from 0 - 70+ employees. Productized services in B2B, SaaS.
            Founder Institute mentor.
          </p>
        </article>
      </div>

      <div className="flex items-center mt-3">
        <HorizontalLine style={"w-[202px] mx-5 self-end"} />

        <button
          className={
            "border p-2 rounded-full " +
            (carousel === 1 ? "border-intense-red" : "border-light-gray")
          }
          onClick={() => dispatch(decreaseCarousel())}
        >
          <IoMdArrowDropleft
            className={
              "text-2xl opacity-40 " +
              (carousel === 1
                ? "text-intense-red opacity-100"
                : "text-muted-gray")
            }
          />
        </button>

        <p className="font-noto-serif-jp text-xs px-4">{carousel}/2</p>

        <button
          className={
            "border p-2 rounded-full mr-5 " +
            (carousel === 2 ? "border-intense-red" : "border-light-gray")
          }
          onClick={() => dispatch(increaseCarousel())}
        >
          <IoMdArrowDropright
            className={
              "text-2xl opacity-40 " +
              (carousel === 2
                ? "text-intense-red opacity-100"
                : "text-muted-gray")
            }
          />
        </button>
      </div>
    </section>
  );
}

Expertise.displayName = "/src/pages/HomePage/Sections/Expertise.jsx";

export default Expertise;
