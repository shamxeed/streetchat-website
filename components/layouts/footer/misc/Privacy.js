import Link from 'next/link';

const Privacy = () => (
  <div className='flex items-center my-2 md:ml-3 md:my0'>
    <Link href={'/privacy-policy'}>
      <span className='text-gray-800 hover:underline text-sm'>
        Privacy policy
      </span>
    </Link>

    <div className='w-4 flex justify-center' />

    <Link href={'/terms-conditions'}>
      <span className='text-gray-800 hover:underline text-sm'>
        Terms of conditions
      </span>
    </Link>
  </div>
);

export default Privacy;
