"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function CategoriesSection() {
  const items = [
    { text: "YouTube", link: "https://www.youtube.com/channel/UCoR4zDVvWUIqEWz4HS-sA" },
    { text: "Official Shop", link: "https://takanenonadeshiko-ec.com/" },
    { text: "Fanclub", link: "https://takanekofc.com/" },
    { text: "出演依頼", link: "https://example.com/request" },
    { text: "高嶺のなでしこ", link: "https://example.com/home" },
  ];

  return (
    <section id="categories-section" className="mt-20">
      <div className="w-full h-[200px] mx-auto">
        <Swiper
          modules={[Navigation, Autoplay, Pagination]}
          slidesPerView={3.5}          // tampil 3 item penuh + 0.5 item “mengintip”
          centeredSlides={true}        // slide aktif di tengah layar
          spaceBetween={30}            // jarak antar item
          loop={true}                  // infinite loop, bisa ke kiri/kanan
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          navigation
          pagination={{ clickable: true }}
          className="w-full h-full"
        >
          <ul className="flex">
            {items.map((item, index) => (
              <SwiperSlide key={index}>
                <li className="flex items-center justify-center w-full h-[150px] bg-pink-500 text-white font-bold rounded-md shadow-md">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full h-full flex items-center justify-center"
                  >
                    {item.text}
                  </a>
                </li>
              </SwiperSlide>
            ))}
          </ul>
        </Swiper>
      </div>
    </section>
  );
}