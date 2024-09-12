import Navbar from '@/components/Navbar';
import GetstartSearch from '@/components/GetstartSearch';
import Equipment from '@/components/Description/Equipment';
import Presentation from '@/app/description/[slug]/[slug]/page';
import GridImg from '@/components/Description/GridImg';

import Footer from '@/components/Footer';
import Questions from '@/components/Description/Questions';
import Disponibility from '@/components/Description/Disponibility';
import RuleHouse from '@/components/Description/RuleHouse';
import Nearby from '@/components/Description/Nearby';
import NavDescription from '@/components/Description/[slug]/NavDescription';
import Breadcrumb from '@/components/Description/Breadcrumb';

type Props = {
  params: { slug: string };
};
export default function HotelId({ params }: Props) {
  const { slug } = params;

  return (
    <>
      {/* <Navbar />
      <section className="mx-auto container">
        <GetstartSearch />
        <Breadcrumb />
        <section className="mt-3">
          <GridImg />
          <NavDescription />
          <Presentation />
          <Equipment />
          <Disponibility />
          <Questions />
          <Nearby />
          <RuleHouse /> */}
      {/* <Indication /> */}

      <Footer />
    </>
  );
}
