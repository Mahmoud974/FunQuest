import React from 'react';
import NavMenu from './NavMenu';
import Link from 'next/link';
import Image from 'next/image';

type Props = {};

const Navbar = (props: Props) => {
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
          <h1 className="text-2xl text-white">
            <Link href="/">
              <h1 className="font-bold">Hots.dot</h1>
            </Link>
          </h1>

          <NavMenu />
        </nav>
      </div>
    </>
  );
};

export default Navbar;
