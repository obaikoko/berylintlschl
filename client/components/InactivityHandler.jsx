'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { useLogoutMutation } from '@/src/features/auth/usersApiSlice';
import { logout } from '@/src/features/auth/authSlice';

const InactivityHandler = ({ timeoutDuration = 15 * 60 * 1000 }) => {
  const [logoutApi, { isLoading }] = useLogoutMutation();
  const router = useRouter();
  const dispatch = useDispatch();
  let timer;

  // Function to clear JWT cookie and log out
  const handleLogout = async () => {
    try {
      document.cookie = 'jwt=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
      await logoutApi().unwrap();
      dispatch(logout());
      router.push('/login');
    } catch (error) {
      console.log(error);
    }
  };

  const resetTimer = () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      handleLogout();
    }, timeoutDuration);
  };

  useEffect(() => {
    const activityEvents = ['mousemove', 'keydown', 'click'];

    activityEvents.forEach((event) => {
      window.addEventListener(event, resetTimer);
    });

    resetTimer();

    return () => {
      clearTimeout(timer);
      activityEvents.forEach((event) => {
        window.removeEventListener(event, resetTimer);
      });
    };
  }, [timeoutDuration, router, dispatch]);

  return null;
};

export default InactivityHandler;
