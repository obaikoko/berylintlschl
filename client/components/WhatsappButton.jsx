import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  const phoneNumber = '+2348146797467'; // Replace with your WhatsApp number
  const message = 'Hello! I would like to chat with you.';
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={whatsappUrl}
      target='_blank'
      rel='noopener noreferrer'
      style={{
        position: 'fixed',
        bottom: '20px',
        left: '20px',
        backgroundColor: '#25D366',
        color: 'white',
        borderRadius: '50%',
        width: '60px',
        height: '60px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textDecoration: 'none',
        fontSize: '24px',
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
        zIndex: '1000'
      }}
    >
      <FaWhatsapp />
    </a>
  );
};

export default WhatsAppButton;
