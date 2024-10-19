import Link from 'next/link';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 flex justify-between items-center p-4 h-24 px-10 bg-[#fb0201] shadow">
      <div className="logo">
        <button className='clickEffect'>
          <Link href="/" className='text-2xl font-semibold text-[#fb0201] bg-white px-2 py-1 rounded'>
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
