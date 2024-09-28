import React from 'react';
import NavMenu from './NavMenu';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <>
      <div className="relative">
        <Image
          src="/bg.jpg"
          width={2000}
          height={500}
          alt="Bg travel"
          className="h-36  object-cover  saturate-50"
          priority
          style={{ width: '100%' }}
        />

        <nav className="absolute top-0 left-0 w-full flex justify-between p-4">
          <Link href="/">
            <p className="font-bold text-2xl text-white">Hots.dot</p>
          </Link>

          <NavMenu />
        </nav>
      </div>
    </>
  );
};

export default Navbar;
