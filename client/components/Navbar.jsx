'use client';
import Link from 'next/link';
import style from './styles/nav.module.css';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [open, setIsOpen] = useState(false);
  const [navScrolled, setNavScrolled] = useState(false);
  const [user, setUser] = useState(true);

  useEffect(() => {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 0) {
        setNavScrolled(true);
      } else {
        setNavScrolled(false);
      }
    });
  }, []);

  const menuBtnClicked = () => {
    setIsOpen(!open);
    document.body.classList.toggle('stopScrolling');
  };

  return (
    <>
      <div className={open ? `${style.overlay}` : ''}></div>
      <div
        className={
          open
            ? `${style.mobileMainMenu} ${style.showMenu}`
            : `${style.mobileMainMenu}`
        }
      >
        {user ? (
          <>
            <ul>
              {/* mobile menu only */}
              {/* {user ? (
                <></>
              ) : (
                <> */}
                  <li className={style.mobileOnly}>
                    <Link
                      onClick={menuBtnClicked}
                      href='/'
                      className={style.navLink}
                    >
                      Home
                    </Link>
                  </li>
                  <li className={style.mobileOnly}>
                    <Link
                      onClick={menuBtnClicked}
                      className={style.navLink}
                      href='/about'
                    >
                      About
                    </Link>
                  </li>
                {/* </> */}
              {/* )} */}

              <li>
                <Link
                  onClick={menuBtnClicked}
                  className={style.navLink}
                  href='/dashboard'
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  onClick={menuBtnClicked}
                  className={style.navLink}
                  href='/register'
                >
                  Register
                </Link>
              </li>
              <li>
                <Link
                  onClick={menuBtnClicked}
                  className={style.navLink}
                  href='/students'
                >
                  Students
                </Link>
              </li>
              <li>
                <Link
                  onClick={menuBtnClicked}
                  className={style.navLink}
                  href='/staff'
                >
                  Staff
                </Link>
              </li>

              <li>
                <Link
                  onClick={menuBtnClicked}
                  className={style.navLink}
                  href='/results'
                >
                  Results
                </Link>
              </li>
              <li>
                <Link
                  onClick={menuBtnClicked}
                  className={style.navLink}
                  href='/broadsheet'
                >
                  Broadsheet
                </Link>
              </li>

             
              <li>
                <Link
                  onClick={menuBtnClicked}
                  className={style.navLink}
                  href='/user/profile'
                >
                  Logout
                </Link>
              </li>
            </ul>
          </>
        ) : (
          <>
            <ul>
              {/* mobile menu only */}

              {/* {user ? (
                <>
                 
                </>
              ) : (
                <> */}
                  <li className={style.mobileOnly}>
                    <Link
                      onClick={menuBtnClicked}
                      href='/'
                      className={style.navLink}
                    >
                      Home
                    </Link>
                  </li>
                  <li className={style.mobileOnly}>
                    <Link
                      onClick={menuBtnClicked}
                      className={style.navLink}
                      href='/about'
                    >
                      About
                    </Link>
                  </li>
                  <li className={style.mobileOnly}>
                    <Link
                      onClick={menuBtnClicked}
                      className={style.navLink}
                      href='/events'
                    >
                      Events
                    </Link>
                  </li>

                  <li>
                    <Link
                      onClick={menuBtnClicked}
                      className={style.navLink}
                      href='/admission'
                    >
                      Admission
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={menuBtnClicked}
                      className={style.navLink}
                      href='/application'
                    >
                      Application
                    </Link>
                  </li>

                  <li>
                    <Link
                      onClick={menuBtnClicked}
                      className={style.navLink}
                      href='/login'
                    >
                      Login
                    </Link>
                  </li>
                {/* </>
              )} */}
            </ul>
          </>
        )}
      </div>
      <header
        className={
          navScrolled
            ? `${style.navScrolled} ${style.mainHeader}`
            : `${style.mainHeader}`
        }
      >
        <div className={style.logo}>
          <Link href='/'>
            <div className={style.img}></div>
          </Link>
        </div>

        <nav className={style.destopMainMenu}>
          <ul>
            <li>
              <Link href='/' className={style.navLink}>
                HOME
              </Link>
            </li>
            <li>
              <Link className={style.navLink} href='/about'>
                ABOUT
              </Link>
            </li>
            <li>
              <Link className={style.navLink} href='/events'>
                EVENTS
              </Link>
            </li>
            <li>
              <Link className={style.navLink} href='/admission'>
                ADMISSION
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      {/* Hambuger Menu */}
      <button
        id='menuBtn'
        className={`${style.hambuger} ${open ? `${style.open}` : ''} `}
        onClick={menuBtnClicked}
        type='button'
      >
        <span className={style.hambugerTop}></span>
        <span className={style.hambugerMiddle}></span>
        <span className={style.hambugerButtom}></span>
      </button>
    </>
  );
};

export default Navbar;
