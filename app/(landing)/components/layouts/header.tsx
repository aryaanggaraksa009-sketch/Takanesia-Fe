import Link from "next/dist/client/link";
import Image from "next/image";
import { FiMoreVertical, FiSearch } from "react-icons/fi";
const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow z-50">
        <div className="flex justify-between gap-10 container mx-auto py-2 px-5">        
            <Image src="/images/logo1.png" alt="takanesia logo" width={100} height={30}  />
             <nav className="flex gap-24 font-medium py-5">
          <Link href="#hero">Home</Link>
          <Link href="#filosofi">Filosofi</Link>
          <Link href="#members">Member</Link>
        </nav>
            <div className="flex gap-10 py-5">
                <FiMoreVertical size={24}/>
                <FiSearch size={24}/>
            </div>
        </div>
    </header>
  );
};

export default Header;