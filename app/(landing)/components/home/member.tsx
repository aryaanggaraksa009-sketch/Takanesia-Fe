import Image from "next/image";
import Link from "next/link";

const memberList = [
  {
    name: "城月 菜央",
    Romaji: "KIZUKI NAO",
    panggilan: "(Senshu)",
    imgUrl: "member-1.jpeg",
  },
  {
    name: "涼海 すう",
    Romaji: "SUZUMI SUU",
    panggilan: "(Suu-chan)",
    imgUrl: "member-2.jpeg",
  },
  {
    name: "橋本 桃呼",
    Romaji: "HASHIMOTO MOMOKO",
    panggilan: "(Momo-chan)",
    imgUrl: "member-3.jpeg",
  },
  {
    name: "葉月 紗蘭",
    Romaji: "HAZUKI SAARA",
    panggilan: "(Saa-chan)",
    imgUrl: "member-4.jpeg",
  },
  {
    name: "東山 恵里沙",
    Romaji: "HIGASHIYAMA ERISA",
    panggilan: "(Richan)",
    imgUrl: "member-5.jpeg",
  },
  {
    name: "日向端 ひな",
    Romaji: "HINAHATA HINA",
    panggilan: "(Hinatama)",
    imgUrl: "member-6.jpeg",
  },
  {
    name: "星谷 美来",
    Romaji: "HOSHITANI MIKURU",
    panggilan: "(Mikurun)",
    imgUrl: "member-7.jpeg",
  },
  {
    name: "松本ももな",
    Romaji: "MATSUMOTO MOMONA",
    panggilan: "(Momonan)",
    imgUrl: "member-8.jpeg",
  },
  {
    name: "籾山 ひめり",
    Romaji: "MOMIYAMA HIMERI",
    panggilan: "(Momichan)",
    imgUrl: "member-9.jpeg",
  },
  {
    name: "??????",
    Romaji: "??????",
    imgUrl: "member-10.jpg",
  },
];

const MemberSection = () => {
  return (
    <section id="members-section" className="container mx-auto mt-25 py-20 bg-gradient-to-b from-pink-50 to-white" >
      <h2 className="font-bold built titling text-4xl text-center mb-11">
        ✿TAKANEKO MEMBER✿
      </h2>
      <div className="grid grid-cols-4 gap-10 mt-8 px-15">
        {memberList.map((member, index) => (
          <Link
            href="#"
            key={index}
            className="p-1.5" 
          >
            <div className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-gray-500 group rounded-full object-cover">
              <Image
                src={`/images/members/${member.imgUrl}`}
                alt={member.name}
                width={500}
                height={300}
                className="object-contain w-full object-cover group-hover:scale-110 transition-transform duration-500 rounded-full object-cover group-hover:brightness-110"
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