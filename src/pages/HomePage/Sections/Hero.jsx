import { HorizontalLine, Button } from "@/atom";
import HeroCover from "@/assets/home_page/alex-perez-pEgsWN0kwbQ-unsplash 1.svg";

function Hero() {
  return (
    <section className="min-h-[702px] mb-24 flex flex-col">
      <h1 className="font-noto-serif-jp font-light text-[42px] text-dark-gray mb-5">
        We empower businesses to become fully AI enabled.
      </h1>

      <HorizontalLine style={"bg-dark-gray"} />

      <figure className="relative my-3">
        <img
          src={HeroCover}
          alt="Image Made with Stable Diffusion and a prompt from Kenny Schumacher"
          className="rounded-md"
        />

        <figcaption className="text-white font-gothic-a1 text-xs absolute left-0 right-0 bottom-0 bg-dark-gray opacity-80 h-[68px] px-5 grid content-center rounded-b-md">
          Made with Stable Diffusion and a prompt from Kenny Schumacher
        </figcaption>
      </figure>

      <HorizontalLine style={"bg-dark-gray"} />

      <p className="text-dark-gray font-gothic-a1 text-[14px] mt-9 mb-5">
        Don't let your business fall behind. Leverage the power of AI to improve
        efficiency, create a better customer experience, and increase profits.
      </p>

      <Button innerText={"Chat with us"} style={"h-10 px-4 mt-auto"} />
    </section>
  );
}

Hero.displayName = "/src/pages/HomePage/Sections/Hero.jsx";

export default Hero;
