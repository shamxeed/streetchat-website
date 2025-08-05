'use client';

import React from 'react';
import Image from 'next/image';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Download, Timer } from 'lucide-react';

import IphoneImagePath from '@/assets/app-store-badge.svg';
import AndroidImagePath from '@/assets/google-play-badge.svg';

const Badge = ({ src = IphoneImagePath, ...props }) => (
  <Image
    src={src}
    // height={60}
    alt='streetchat-iphone'
    className='hover:cursor-pointer w-[150px] h-[60px] md:w-[150px] md:h-[50px]'
    {...props}
  />
);

const Badges = () => {
  const handleClick = React.useCallback(() => {
    toast('Coming soon!!', {
      icon: <Timer size={25} className='text-white' />,
      description: 'This is still work in progress!',
    });
  }, []);

  return (
    <div className='flex  md:items-center md:justify-center mt-8 w-full px-2'>
      <div className='w-full flex flex-wrap items-center justify-evenly md:justify-evenly  md:w-3/4'>
        {options.map((i) => (
          <Badge key={i.id} {...i} onClick={() => handleClick(i)} />
        ))}

        <Button
          onClick={handleClick}
          className='flex items-center bg-black h-[48px] w-[150px] mt-2 hover:cursor-pointer md:mt-0'
        >
          <Download size={30} />
          <span className='text-white'>Download APK</span>
        </Button>
      </div>
    </div>
  );
};

export default Badges;

const options = [
  {
    id: '1',
    title: 'iphone',
  },
  {
    id: '2',
    title: 'android',
    src: AndroidImagePath,
    alt: 'streetchat-android',
  },
];
