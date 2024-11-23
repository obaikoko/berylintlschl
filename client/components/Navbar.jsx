'use client';
import Link from 'next/link';
import style from './styles/nav.module.css';
import { useLogoutMutation } from '@/src/features/auth/usersApiSlice';
import { logout } from '@/src/features/auth/authSlice';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaArrowRight, FaUserAlt } from 'react-icons/fa';

const Navbar = () => {
  const [open, setIsOpen] = useState(false);
  const [navScrolled, setNavScrolled] = useState(false);
  const [logoutApi, { isLoading }] = useLogoutMutation();
  const [isLoggedIn, setIsLoggedIn] = useState('');
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (user) {
      setIsLoggedIn(user);
    } else {
      setIsLoggedIn('');
    }
    window.addEventListener('scroll', function () {
      if (window.scrollY > 0) {
        setNavScrolled(true);
      } else {
        setNavScrolled(false);
      }
    });
  }, [user]);

  const menuBtnClicked = () => {
    setIsOpen(!open);
    document.body.classList.toggle('stopScrolling');
  };

  const handleLogout = async () => {
    try {
      await logoutApi().unwrap();
      dispatch(logout());
    } catch (error) {
      console.log(error);
    }
    setIsOpen(!open);
    document.body.classList.toggle('stopScrolling');
    localStorage.removeItem('User');
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
        <ul>
          {/* mobile menu only */}

          {isLoggedIn ? (
            ''
          ) : (
            <>
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
            </>
          )}

          {isLoggedIn && isLoggedIn.isAdmin ? (
            <>
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
                  href='/users'
                >
                  Users
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
                  href='/events'
                >
                  Events
                </Link>
              </li>
            </>
          ) : isLoggedIn && isLoggedIn.isStudent ? (
            <>
              <li>
                <Link
                  onClick={menuBtnClicked}
                  className={style.navLink}
                  href='/students/profile'
                >
                  Profile
                </Link>
              </li>
              <li>
                <Link
                  onClick={menuBtnClicked}
                  className={style.navLink}
                  href='/students/results'
                >
                  Results
                </Link>
              </li>
            </>
          ) : isLoggedIn ? (
            <>
              <li>
                <FaArrowRight className='inline mr-4 mb-2' />
                {isLoggedIn.firstName} - {isLoggedIn?.level}
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
            </>
          ) : (
            <>
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
                  href='/gallery'
                >
                  Gallery
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
            </>
          )}

          {isLoggedIn ? (
            <li>
              <Link href='/' className={style.navLink} onClick={handleLogout}>
                Logout
              </Link>
            </li>
          ) : (
            <li>
              <Link
                onClick={menuBtnClicked}
                className={style.navLink}
                href='/login'
              >
                Login
              </Link>
            </li>
          )}
        </ul>
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
