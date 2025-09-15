const Title = ({ children }) => (
  <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mt-5 md:mt-6 mb-8 text-center font-poppins'>
    {children}
  </h1>
);

export const SubTitle = ({ children }) => (
  <h2 className='text-l font-semibold text-gray-500 mb-2 font-poppins'>
    {children}
  </h2>
);

export const Header2 = ({ children }) => {
  return (
    <div className='my-4'>
      <h2 className={`text-2xl font-semibold leading-tight text-gray-700`}>
        {children}
      </h2>
    </div>
  );
};

export const Header3 = ({ children }) => {
  return (
    <div className='my-2'>
      <h3 className={`text-lg font-semibold leading-tight text-gray-700`}>
        {children}
      </h3>
    </div>
  );
};

export default Title;
