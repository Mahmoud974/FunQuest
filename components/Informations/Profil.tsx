import Image from 'next/image';
import React from 'react';

export default function Profil() {
  return (
    <>
      <aside className=" border rounded-md h-36 ">
        <section className=" ">
          <div className="flex items-center mt-8 ml-2 gap-3">
            <Image
              alt="Profile"
              src="/bg.jpg"
              priority
              width={100}
              height={100}
              className="rounded-full w-20 h-20"
            />
            <div>
              <h1 className="font-bold text-2xl">Vous êtes connecté</h1>
              <p className=" text-xl">okok@gmail.com</p>
            </div>
          </div>
        </section>
      </aside>

      {/* Formulaire */}
    </>
  );
}
