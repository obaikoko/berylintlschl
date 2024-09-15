'use client';
import Navbar from '@/components/Navbar';
import './globals.css';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import store from '@/src/app/store';

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <Provider store={store}>
          <Navbar />
          <main>{children}</main>
          <ToastContainer />
        </Provider>
      </body>
    </html>
  );
}
