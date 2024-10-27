import Link from 'next/link';
import profileIcon from '../../public/profileIcon.svg';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="fixed h-20 top-0 left-0 right-0 flex justify-between items-center p-4 px-10 bg-[#111D4A] shadow border-b-2 border-gray-200">
      <div className="logo">
        <button className='clickEffect'>
          <Link href="/" className='text-2xl font-semibold text-[#111D4A] bg-white px-2 py-1 rounded'>
            FuelScore
          </Link>
        </button>
      </div>
      <div className="plus">
        <button className="text-2xl font-semibold text-white clickEffect">
          <Link href="/profile">
            <Image src={profileIcon} alt="Profile Icon" width={25} height={25} />
          </Link>
        </button>
      </div>
    </header>
  );
};

export default Header;