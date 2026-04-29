import Link from "next/link";


const daftarisiList = [
    {
        id: "/logo",
        name: "LOGO",
    },
    {
        id: "/palet-warna",
        name: "PALET WARNA",
    },
    {
        id: "/tipografi",
        name: "TIPOGRAFI",
        
    },
    {
        id: "/media-promosi",
        name: "MEDIA PROMOSI",
    },
    {
        id: "/takanesia-project",
        name: "TAKANESIA PROJECT",
    },
    {
        id: "/dokumentasi",
        name: "DOKUMENTASI",
    },
];

const DaftarIsiSection = () => {
    return (
        <section id="daftarisi" className="container mx-auto mt-10 py-5">
            <h2 className="font-bold text-2xl text-center">Daftar Isi</h2>
            <div className="grid grid-cols-2 mt-8">
                <div className="flex flex-col space-y-9 px-4 mx-auto justify-center">
                    {daftarisiList.slice(0, 3).map((daftarisi) => (
                        <Link
                            href={`/daftar-isi${daftarisi.id}`}
                            key={daftarisi.id}
                            className="rounded-lg bg-gradient-to-r from-[#F1F1F1] to-[#F7F7F7] 
                                w-45 h-13 flex items-center justify-center 
                                shadow-md cursor-pointer"
                        >
                            {daftarisi.name}
                        </Link>
                    ))}
                </div>
                <div className="flex flex-col ml-19 space-y-9 px-4">
                    {daftarisiList.slice(3).map((daftarisi) => (
                        <Link
                            href={`/daftar-isi${daftarisi.id}`}
                            key={daftarisi.id}
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