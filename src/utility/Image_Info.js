import HeroCover from "@/assets/home_page/alex-perez-pEgsWN0kwbQ-unsplash 1.svg";
import BeatPortLink from "@/assets/home_page/beatport-link.svg";
import Shimadzu from "@/assets/home_page/shimadzu.svg";
import AWS from "@/assets/home_page/aws.svg";

const Image_Info = {
  Header: {
    hero: {
      src: HeroCover,
      alt: "Image Made with Stable Diffusion and a prompt from Kenny Schumacher",
    },
    offerings: [
      {
        id: 0,
        src: BeatPortLink,
        alt: "BeatPortLink Service Logo",
      },
      {
        id: 1,
        src: Shimadzu,
        alt: "Shimadzu Service Logo",
      },
      {
        id: 2,
        src: AWS,
        alt: "AWS Service Logo",
      },
    ],
  },
};

export default Image_Info;
