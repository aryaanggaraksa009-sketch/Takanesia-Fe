import AdminSection from "./components/home/admin";
import CategoriesSection from "./components/home/categories";
import FilosofiSection from "./components/home/Filosofi";
import DaftarIsiSection from "./components/home/daftarisi";
import HeroSection from "./components/home/hero";
import MemberSection from "./components/home/member";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <CategoriesSection />
      <FilosofiSection />
      <DaftarIsiSection />
      <MemberSection />
      <AdminSection />
    </main>
  );
}
