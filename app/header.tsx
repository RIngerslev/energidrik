import Link from 'next/link';

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 h-24 px-10 bg-green-900 shadow">
      <div className="logo">
          <button className='clickEffect'>
            <Link href="/" className='text-2xl font-semibold text-green-900 bg-white px-2 py-1 rounded'>
                Rating App
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
