import React from 'react';

const Container = ({ children }) => {
  return (
    <footer className='bg-[#fff] py-4 px-2 md:px-4 border-t-1 border-gray-200 shadow-t-md'>
      <div className='flex flex-col justify-between items-center space-x-2 w-full md:flex-row'>
        {children}
      </div>
    </footer>
  );
};

export default Container;
