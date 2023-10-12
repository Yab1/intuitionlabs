import { Hero, Offerings } from "@/pages/HomePage/Sections";

function HomePage() {
  return (
    <main className="px-5">
      <Hero />
      <Offerings />
    </main>
  );
}

HomePage.displayName = "/src/pages/HomePage.jsx";

export default HomePage;
