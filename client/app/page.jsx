import Image from 'next/image';
// import styles from './page.module.css';
import Link from 'next/link';

import HeroSlider from '@/components/HeroSlider';
import WhyChooseUs from '@/components/WhyChooseUs';
import Onboarding from '@/components/Onboarding';
import ServicesCards from '@/components/ServicesCards';
import About from '@/components/About';
import Services from '@/components/Services';
import NewUser from '@/components/NewUser';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Home - Beryl International School Calabar',
  description:
    'Beryl International School is a high-quality educational institution offering nursery, primary, and secondary education in Calabar, Cross River State.',
  keywords:
    'Beryl International School, Calabar, education, nursery, primary school, secondary school, Cross River State',
};

export default function Home() {
  return (
    <>
      <HeroSlider />
      <NewUser />
      <Services />
      <About />
      <WhyChooseUs />
      <ServicesCards />
      <Onboarding />
      <Footer />
    </>
  );
}
