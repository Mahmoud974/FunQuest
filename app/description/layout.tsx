import BreadcrumbHotel from '@/components/Description/Breadcrumb';
import GridImg from '@/components/Description/GridImg';
import NavDescription from '@/components/Description/[slug]/NavDescription';
import Footer from '@/components/Footer';
import GetstartSearch from '@/components/GetstartSearch';
import Navbar from '@/components/Navbar';
import { Inter } from 'next/font/google';
import { HotelProvider } from '../provider/HotelContext';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <HotelProvider>
      {' '}
      {/* Encapsuler le layout dans le Provider */}
      <section className={inter.className}>
        <Navbar />
        <section className="mx-auto container">
          <GetstartSearch />
          <BreadcrumbHotel />
          <section className="mt-4">
            <GridImg />
          </section>
          <NavDescription />
          {children}
        </section>
        <Footer />
      </section>
    </HotelProvider>
  );
}
