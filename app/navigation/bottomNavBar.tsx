"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import searchIcon from "../../public/searchIcon.svg";
import homeIcon from "../../public/homeIcon.svg";
import favoritesIcon from "../../public/favoritesIcon.svg";
import settingsIcon from "../../public/settingsIcon.svg";

const BottomNavBar = () => {
  const router = useRouter();

  return (
    <div className="fixed h-20 bottom-0 left-0 right-0 z-10 bg-[#111D4A] shadow-lg flex justify-between  px-6 border-t-2 border-gray-200">
      <div className="flex justify-around w-full">
        <div
          className="text-center text-gray-600 hover:text-blue-500 cursor-pointer mt-4"
          onClick={() => router.push('/')}
        >
          <Image src={homeIcon} alt="Home Icon" width={30} height={30} />
        </div>
        <div
          className="text-center text-gray-600 hover:text-blue-500 cursor-pointer mt-4"
          onClick={() => router.push('/search')}
        >
          <Image src={searchIcon} alt="Search Icon" width={30} height={30} />
        </div>

        {/* Center button with plus icon */}
        <div className="relative">
          <div
            className="absolute w-16 h-16 border-2 bg-white text-black text-xl font-bold rounded-full flex items-center justify-center bottom-12 left-1/2 transform -translate-x-1/2 shadow-lg cursor-pointer hover:bg-gray-300"
            onClick={() => router.push('/add')}
          >
              +
          </div>
        </div>

        <div
          className="text-center text-gray-600 hover:text-blue-500 cursor-pointer mt-4"
          onClick={() => router.push('/search')}
        >
          <Image src={favoritesIcon} alt="Favorites Icon" width={30} height={30} />
        </div>

        <div
          className="text-center text-gray-600 hover:text-blue-500 cursor-pointer mt-4"
          onClick={() => router.push('/search')}
        >
          <Image src={settingsIcon} alt="Favorites Icon" width={30} height={30} />
        </div>

      </div>
    </div>
  );
};

export default BottomNavBar;
