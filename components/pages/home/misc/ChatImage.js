import Image from 'next/image';

import ChatImagePath from '@/assets/chat.svg';

const ChatImage = () => {
  return (
    <div className='w-full h-[96vh] mt-4 md:ml-2 md:w-4/12 md:mt-0 relative'>
      <Image alt='Streetchat' layout='fill' src={ChatImagePath} />
    </div>
  );
};

export default ChatImage;
