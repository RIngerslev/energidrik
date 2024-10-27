"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import searchIcon from "../../public/searchIcon.svg";
import homeIcon from "../../public/homeIcon.svg";
import favoritesIcon from "../../public/favoritesIcon.svg";

const BottomNavBar = () => {
  const router = useRouter();

  return (
    <div className="fixed h-20 bottom-0 left-0 right-0 z-10 bg-[#111D4A] shadow-lg flex justify-between items-center px-6 border-t-2 border-gray-200">
      <div className="flex justify-around w-full">
        <div
          className="text-center text-gray-600 hover:text-blue-500 cursor-pointer"
          onClick={() => router.push('/')}
        >
          <Image src={homeIcon} alt="Home Icon" width={25} height={25} />
        </div>
        <div
          className="text-center text-gray-600 hover:text-blue-500 cursor-pointer"
          onClick={() => router.push('/search')}
        >
          <Image src={searchIcon} alt="Search Icon" width={25} height={25} />
        </div>

        {/* Center button with plus icon */}
        <div className="relative">
          <div
            className="absolute w-16 h-16 border-2 bg-white text-black font-bold rounded-full flex items-center justify-center bottom-4 left-1/2 transform -translate-x-1/2 shadow-lg cursor-pointer hover:bg-gray-300"
            onClick={() => router.push('/add')}
          >
              +
          </div>
        </div>

        <div
          className="text-center text-gray-600 hover:text-blue-500 cursor-pointer"
          onClick={() => router.push('/favorites')}
        >
          <Image src={favoritesIcon} alt="Search Icon" width={25} height={25} />
        </div>
        <div
          className="text-center text-gray-600 hover:text-blue-500 cursor-pointer"
          onClick={() => router.push('/search')}
        >
              <svg className="h-1.5 w-2 sm:h-1.5 sm:w-2.5 fill-[--rating-star-inactive]" viewBox="0 0 23 14" height="1" aria-hidden="true"><path d="M.38 9.32c-.16.21-.35.43-.21.7.57.67 1.6.44 2.4.49l3.88-.25h1.63a3.59 3.59 0 0 1 1.79.51 4.79 4.79 0 0 1 .52.42 1.85 1.85 0 0 1 .36.41A8.5 8.5 0 0 0 12 14a.76.76 0 0 0 .72-.25c.86-1 1.57-2.6 3.11-2.49 2 .15 3.74.82 5.67 1 .22-.14 0-.36 0-.54a.34.34 0 0 1 .09-.08 1.36 1.36 0 0 0 1.17-.24.75.75 0 0 0 0-.78C21.63 9.52 20.2 9 19 8.08a2.79 2.79 0 0 1-1.14-1.22 1.08 1.08 0 0 1 .1-.66 17.28 17.28 0 0 1 1.84-2.27 6.31 6.31 0 0 0 1.08-1.44c0-.19 0-.42-.18-.5a3.51 3.51 0 0 0-2 0c-1.08.05-2.62.82-3.4-.32-.35-.57-.48-1.3-1.15-1.65a.69.69 0 0 0-.72.19c-.79 1-1.74 2.19-3.11 2.12C7.85 2.09 5.81.83 3.49.28 3 .21 2.42.08 2 .4s.05.86.27 1.21l3.28 4.16a1.32 1.32 0 0 1 .31.61c-.29.35-.76.44-1.14.67A24.85 24.85 0 0 0 .49 9.22Zm12.2-6.61.42-.63a2.46 2.46 0 0 1 .3-.35.16.16 0 0 1 .18.09 1.54 1.54 0 0 1 .15.46 2.69 2.69 0 0 0 .09.32c0 .06.08.2 0 .25s-.12.21-.14.25-.05.13-.22.06a8.44 8.44 0 0 1-.82-.31.09.09 0 0 1 .04-.14Zm-6.13-.28c.07-.15.46-.13.83.07a11.46 11.46 0 0 0 1.31.6c.23.07.27.15.28.2s0 .06 0 .06v.05a6.49 6.49 0 0 0-.76.93 2 2 0 0 1-1.5-1.14c-.34-.46-.24-.62-.16-.77Zm-.1 2.35c.07 0 .19.12.24.19a.16.16 0 0 1 0 .16v.34s-.23-.2-.25-.28l-.12-.38a.33.33 0 0 1 .13-.03ZM5 2.87A1.44 1.44 0 0 1 4.28 2v-.06c.17-.19.41-.18.73-.18a2.71 2.71 0 0 1 .9.24 2.62 2.62 0 0 0 .09.76.36.36 0 0 1 0 .37 1.26 1.26 0 0 0 0 .21 3.71 3.71 0 0 1-1-.47Zm3.37 5.76a1.85 1.85 0 0 1-.46.08c-.11 0-.25.07-.43.1a6.53 6.53 0 0 1-1.14.31 1 1 0 0 1-.79-.26c-.09-.07-.31-.16-.21-.58S7.57 7 7.57 7s.1.22.33.63a4.16 4.16 0 0 0 .7.82.41.41 0 0 1-.23.18Zm1.42-3.34a6.36 6.36 0 0 0-.6 1.39c0 .06-.1 0-.13 0l-.41-.44a1.12 1.12 0 0 1-.15-.89c.07-.34.13-.54.66-.94a2.76 2.76 0 0 1 1.32-.46 3.09 3.09 0 0 1-.69 1.34ZM12.45 12a2.32 2.32 0 0 1-.59.13.43.43 0 0 1-.43-.28c-.1-.27-.07-.41-.18-.68v-.09l.68.33a1.67 1.67 0 0 0 .69.16h.3a.72.72 0 0 1-.47.43Zm.64-1.3a.4.4 0 0 1-.48.14.72.72 0 0 1-.3-.25s0-.06 0-.06h.76s.22-.08.02.14Zm1.2-3.8a3.68 3.68 0 0 1-.69.89 2.33 2.33 0 0 1-1.91.62 1.31 1.31 0 0 1-1-.31A1.84 1.84 0 0 1 10 6.51a2.68 2.68 0 0 1 1-1.93 7 7 0 0 1 3.23 2c.17.19.06.29.06.29Zm1.62-3.3h1.61s-.05.24-.61.68-.72.58-.72.58a3.21 3.21 0 0 0-.79-1.12 1.57 1.57 0 0 1 .51-.17Zm5.91 7.61c0 .08-.35 0-.45 0s-1.28-.35-1.65-.46-1.21-.42-1.44-.49l-3.11-1A4.47 4.47 0 0 0 16 7.74s.17 0 .5.31a7.73 7.73 0 0 0 1.35.81c.23.11 3.48 1.93 3.71 2.08s.3.16.26.24Z"></path></svg>
        </div>
      </div>
    </div>
  );
};

export default BottomNavBar;
