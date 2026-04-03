import Image from "next/image";
import { FiMoreVertical, FiSearch } from "react-icons/fi";
const Header = () => {
  return (
    <header>
        <div className="flex justify-between gap-10 container mx-auto py-2 px-5" style={{ background: 'linear-gradient(to right, #608edf, #d43691)' }} >        
            <Image src="/images/logo1.png" alt="takanesia logo" width={100} height={30}  />
            <div className="flex gap-10 py-3.5">
                <FiMoreVertical size={24}/>
                <FiSearch size={24}/>
            </div>
        </div>
    </header>
  );
};

export default Header;