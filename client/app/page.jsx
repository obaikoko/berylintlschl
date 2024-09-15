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
  title: 'Home - Beryl School',
  description: 'Beryl International School',
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
