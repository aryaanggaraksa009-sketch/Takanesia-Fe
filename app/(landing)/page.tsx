import CategoriesSection from "./components/home/categories";
import HeroSection from "./components/home/hero";
import MemberSection from "./components/home/member";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <CategoriesSection />
      <MemberSection />
    </main>
  );
}
