import Link from 'next/link';
import React from 'react';
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaWhatsapp,
} from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className='footer'>
      <ul className='mx-auto'>
        <li>
          <h2>Contact Details</h2>
          <p>Phone: +234-123-4567</p>
          <p>Email: admissions@berylschool.ng</p>
          <p> Location: Ikot Eneobong, Calabar, Cross River State, Nigeria</p>
        </li>
        <li>
          <h2>Quick Links</h2>
          <Link href='/'>Home</Link>
          <Link href='/about'>About</Link>
          <Link href='/events'>News/Events</Link>
          <Link href='/application'>Application</Link>
        </li>
        <li>
          <h2>Social Media</h2>

          <Link href=''>
            <FaInstagram className='inline-block mr-2 text-xl' /> Instagram
          </Link>
          <Link href=''>
            <FaLinkedin className='inline-block mr-2 text-xl' /> Linkedin
          </Link>
          <Link href=''>
            <FaFacebook className='inline-block mr-2 text-xl' /> Facebook
          </Link>
          <Link href=''>
            <FaWhatsapp className='inline-block mr-2 text-xl' /> Whatsapp
          </Link>
        </li>
      </ul>
      <div className='footer-copy-write'>
        <p>
          &copy; {currentYear}Apex Wealth Limited is Powered by Apex Wealth
          Limited
        </p>
      </div>
    </footer>
  );
};

export default Footer;
