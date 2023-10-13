import { Hero, Offerings, Expertise } from "@/pages/HomePage/Sections";

function HomePage() {
  return (
    <main>
      <Hero />
      <Offerings />
      <Expertise />
    </main>
  );
}

HomePage.displayName = "/src/pages/HomePage.jsx";

export default HomePage;
