import Link from 'next/link';

const Developer = () => {
  return (
    <span className='font-bold text-gray-800 font-mono'>
      Developed by{' '}
      <Link
        target='_blank'
        rel='noopener noreferrer'
        href='https://x.com/shamxeed05'
      >
        <span className='text-green-700 hover:underline font-mono font-bold'>
          Shamxeed
        </span>
      </Link>
    </span>
  );
};

export default Developer;
