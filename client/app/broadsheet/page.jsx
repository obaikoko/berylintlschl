'use client';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import Broadsheet from '@/components/Broadsheet';
import { useSelector } from 'react-redux';

const BroadsheetPage = () => {
  const { user } = useSelector((state) => state.auth);
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push('/');
    }
  }, [user]);
  return (
    <div>
      <div className='bg-blue-950 h-20'></div>
      <Broadsheet />
    </div>
  );
};

export default BroadsheetPage;
