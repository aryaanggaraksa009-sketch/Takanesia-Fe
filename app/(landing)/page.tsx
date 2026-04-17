import AdminSection from "./components/home/admin";
import CategoriesSection from "./components/home/categories";
import DaftarisiSection from "./components/home/daftarisi";
import FilosofiSection from "./components/home/Filosofi";
import HeroSection from "./components/home/hero";
import MemberSection from "./components/home/member";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <CategoriesSection />
      <FilosofiSection />
      <DaftarisiSection />
      <MemberSection />
      <AdminSection />
    </main>
  );
}
