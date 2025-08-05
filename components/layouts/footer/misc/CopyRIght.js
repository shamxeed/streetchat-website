const CopyRight = () => {
  return (
    <div className='flex items-center'>
      <h1 className='text-xl font-bold font-mono text-gray-900'>Street Inc.</h1>

      <p className='text-sm text-gray-700 ml-2'>
        &copy; {new Date().getFullYear()}. All Rights Reserved.
      </p>
    </div>
  );
};

export default CopyRight;
