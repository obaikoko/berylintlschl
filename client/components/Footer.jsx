import Link from 'next/link';
import React from 'react';
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaWhatsapp,
  FaYoutube,
} from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className='bg-blue-950 text-white py-8 px-4'>
      <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8'>
        {/* Contact Details */}
        <div>
          <h2 className='text-xl font-bold mb-4'>Contact Details</h2>
          <p className='mb-2'>Phone: 07060511978, 09073091617</p>
          <p className='mb-2'>Email: berylintlschl@gmail.com</p>
          <p>
            Location: Plot 1, Block 1, Ikot Eneobong (Federal Housing Estate)
            Calabar Municipality, Cross River State
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className='text-xl font-bold mb-4'>Quick Links</h2>
          <ul className='space-y-2'>
            <li>
              <Link href='/' className='hover:underline'>
                Home
              </Link>
            </li>
            <li>
              <Link href='/about' className='hover:underline'>
                About
              </Link>
            </li>
            <li>
              <Link href='/events' className='hover:underline'>
                Events
              </Link>
            </li>
            <li>
              <Link href='/admission' className='hover:underline'>
                Admission
              </Link>
            </li>
            <li>
              <Link href='/gallery' className='hover:underline'>
                Gallery
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h2 className='text-xl font-bold mb-4'>Social Media</h2>
          <ul className='space-y-2'>
            <li>
              <Link href='' className='flex items-center hover:underline'>
                <FaInstagram className='inline-block mr-2 text-2xl' /> Instagram
              </Link>
            </li>
            <li>
              <Link href='' className='flex items-center hover:underline'>
                <FaLinkedin className='inline-block mr-2 text-2xl' /> LinkedIn
              </Link>
            </li>
            <li>
              <Link href='' className='flex items-center hover:underline'>
                <FaFacebook className='inline-block mr-2 text-2xl' /> Facebook
              </Link>
            </li>
            <li>
              <Link href='' className='flex items-center hover:underline'>
                <FaWhatsapp className='inline-block mr-2 text-2xl' /> WhatsApp
              </Link>
            </li>
            <li>
              <Link
                href='https://www.youtube.com/@berylinternationalschools9663'
                className='flex items-center hover:underline'
              >
                <FaYoutube className='inline-block mr-2 text-2xl' /> Youtube
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className='mt-8 border-t border-gray-700 pt-4 text-center'>
        <p className='text-gray-400'>
          &copy; {currentYear} Beryl International Schools. Powered by Beryl
          International Schools
        </p>
      </div>
    </footer>
  );
};

export default Footer;
