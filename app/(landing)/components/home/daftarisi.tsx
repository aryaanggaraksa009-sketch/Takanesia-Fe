import Link from "next/link";


const daftarisiList = [
  {
    name: "LOGO"
  },
  {
    name: "PALET WARNA",
  },
  {
    name: "TIPOGRAFI",
  },
  {
    name: "MEDIA PROMOSI",
  },
  {
    name: "TAKANESIA PROJECT",
  },
  {
    name: "DOKUMENTASI",
  },
];

const DaftarIsiSection = () => {
    return (
        <section id="daftarisi" className="container mx-auto mt- py-5">
            <h2 className="font-bold text-2xl text-center">Daftar Isi</h2>
            <div className="grid grid-cols-2 divide-x divide-gray-300 mt-8">
                <div className="flex flex-col ml-85 space-y-9 px-4">
                {daftarisiList.slice(0, 3).map((daftarisi, index) => (
                    <Link
                    href={`/daftar${daftarisi.name}`}
                    key={index}
                    className="rounded-lg bg-gradient-to-r from-[#F1F1F1] to-[#F7F7F7] 
                                w-45 h-13 flex items-center justify-center 
                                shadow-md ease-in-out cursor-pointer"
                    >
                    {daftarisi.name}
                    </Link>
                ))}
                </div>
                <div className="flex flex-col ml-19 space-y-9 px-4">
                {daftarisiList.slice(3, 6).map((daftarisi, index) => (
                    <Link
                    href={`/${daftarisi.name}`}
                    key={index}
                    className="rounded-lg bg-gradient-to-r from-[#F1F1F1] to-[#F7F7F7] 
                                w-45 h-13 flex items-center justify-center 
                                shadow-md ease-in-out cursor-pointer"
                    >
                    {daftarisi.name}
                    </Link>
                ))}
                </div>
            </div>
        </section>

    );
};

export default DaftarIsiSection;