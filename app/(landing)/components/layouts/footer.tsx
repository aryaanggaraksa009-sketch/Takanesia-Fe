import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-52">
      <div className="container flex justify-between pt-14 pb-9">
        <div className="w-105 mx-7">
          <Image
            src="/images/logo1.png"
            alt="logo Takanesia"
            width={100}
            height={44}
          />
          <p className="mt-8">
            Kami hadir sebagai wadah untuk menyatukan para fans Indonesia yang ingin berbagi kabar, momen, dan semangat mendukung perjalanan Takane no Nadeshiko✨
          </p>
          <p className="mt-12">
        ~ Dibuat dengan cinta oleh mas Arya ~         
        </p>
        </div>
        <div className="w-105 grid grid-cols-2">
          <div className="flex gap-7 flex-col">
            <Link href="hero">Home</Link>
            <Link href="category">Category</Link>
            <Link href="members">Members</Link>
            <Link href="about">About Us</Link>
          </div>
          <div className="flex gap-7 flex-col">
            <Link href="https://www.instagram.com/takanesia.id" target="_blank" rel="noopener noreferrer">
              Instagram
            </Link>
            <Link href="https://www.facebook.com/people/Takanesia-ID/61582971665549/?ref=PROFILE_EDIT_xav_ig_profile_page_web#" target="_blank" rel="noopener noreferrer">
              Facebook
            </Link>
            <Link href="https://www.tiktok.com/@takanesia.id" target="_blank" rel="noopener noreferrer">
              TikTok
            </Link>
            <Link href="https://www.youtube.com/@TakanesiaID" target="_blank" rel="noopener noreferrer">
              YouTube
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t border-t-white/15">
        <div className="mx-7 py-6 flex">
          <div>Takanesia © 2026 All Rights Reserverd.</div>
          <div className="grid grid-cols-2 w-105 ml-120">
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;