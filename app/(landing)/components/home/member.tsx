import Image from "next/image";
import Link from "next/link";

const memberList = [
  {
    name: "城月 菜央",
    Romaji: "KIZUKI NAO",
    panggilan: "(Senshu)",
    imgUrl: "member-1.jpg",
  },
  {
    name: "涼海 すう",
    Romaji: "SUZUMI SUU",
    panggilan: "(Suu-chan)",
    imgUrl: "member-2.jpg",
  },
  {
    name: "橋本 桃呼",
    Romaji: "HASHIMOTO MOMOKO",
    panggilan: "(Momo-chan)",
    imgUrl: "member-3.jpg",
  },
  {
    name: "葉月 紗蘭",
    Romaji: "HAZUKI SAARA",
    panggilan: "(Saa-chan)",
    imgUrl: "member-4.jpg",
  },
  {
    name: "東山 恵里沙",
    Romaji: "HIGASHIYAMA ERISA",
    panggilan: "(Richan)",
    imgUrl: "member-5.jpg",
  },
  {
    name: "日向端 ひな",
    Romaji: "HINAHATA HINA",
    panggilan: "(Hinatama)",
    imgUrl: "member-6.jpg",
  },
  {
    name: "星谷 美来",
    Romaji: "HOSHITANI MIKURU",
    panggilan: "(Mikurun)",
    imgUrl: "member-7.jpg",
  },
  {
    name: "松本ももな",
    Romaji: "MATSUMOTO MOMONA",
    panggilan: "(Momonan)",
    imgUrl: "member-8.jpg",
  },
  {
    name: "籾山 ひめり",
    Romaji: "MOMIYAMA HIMERI",
    panggilan: "(Momichan)",
    imgUrl: "member-9.jpg",
  },
  {
    name: "??????",
    Romaji: "??????",
    imgUrl: "member-10.png",
  },
];

const MemberSection = () => {
  return (
    <section id="members-section" className="container mx-auto mt-25">
      <h2 className="font-bold built titling text-4xl text-center mb-11">
        TAKANEKO MEMBER
      </h2>
      <div className="grid grid-cols-4 gap-10 mt-8 px-15">
        {memberList.map((member, index) => (
          <Link
            href="#"
            key={index}
            className="p-1.5 bg-white hover:drop-shadow-xl duration-300" style={{ background: 'linear-gradient(to right, #608edf, #d43691)' }}
          >
            <div className=" bg-gray-200 aspect-square w-full flex justify-center items-center relative">
              <Image
                src={`/images/members/${member.imgUrl}`}
                alt={member.name}
                width={500}
                height={300}
                className="object-contain"
              />
            </div>
            <h3 className="font-medium text-lg mb-1.5 mt-4">{member.name}</h3>
            <div className="flex justify-between mb-8">
              <div className="text-black-500">{member.Romaji}</div>
                <div className="item-center gap-4">{member.panggilan}</div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default MemberSection;