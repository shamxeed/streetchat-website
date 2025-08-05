const Title = ({ children }) => (
  <h1 className='text-2xl font-bold text-gray-800 mt-5 md:mt-6 mb-8 text-center'>
    {children}
  </h1>
);

export const SubTitle = ({ children }) => (
  <h2 className='text-l font-semibold text-gray-500 mb-2'>{children}</h2>
);

export default Title;
