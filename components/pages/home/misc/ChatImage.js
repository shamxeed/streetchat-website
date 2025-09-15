import Image from 'next/image';

const ChatImage = () => {
  return (
    <div className='w-full h-[96vh] mt-3 md:ml-2 md:w-4/12 md:mt-0 relative'>
      <Image alt='Streetchat' fill src={'/chat.svg'} />
    </div>
  );
};

export default ChatImage;
