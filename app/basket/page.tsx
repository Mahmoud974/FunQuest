import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';

const page = () => {
  return (
   <>
   <Navbar/>
    <main className='flex h-screen items-center justify-center'>
      <section className='text-center'>
        <h1>Votre panier est vide</h1>
        <Button className='w-1/4 mt-4 px-12'>
          <Link href="/">Home</Link>
        </Button>
      </section>
    </main>
   </>
  );
}

export default page;
