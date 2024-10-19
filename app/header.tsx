import Link from 'next/link';

const Header = () => {
  return (
    <header className="fixed h-[8%] top-0 left-0 right-0 flex justify-between items-center p-4 px-10 bg-[#1bab44] shadow border-b-2 border-gray-200">
      <div className="logo">
        <button className='clickEffect'>
          <Link href="/" className='text-2xl font-semibold text-[#1bab44] bg-white px-2 py-1 rounded'>
            FuelScore
          </Link>
        </button>
      </div>
      <div className="plus">
        <button className="text-2xl font-semibold text-white clickEffect">
          <Link href="/add">
            +
          </Link>
        </button>
      </div>
    </header>
  );
};

export default Header;
