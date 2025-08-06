const Container = ({ children }) => {
  return (
    <div className='flex flex-col items-center bg-green-500 min-h-[96vh] md:flex-row  md:justify-between px-2 py-2 pb-4 lg:px-15 w-full'>
      {children}
    </div>
  );
};

export default Container;
