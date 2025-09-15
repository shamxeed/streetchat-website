const Text = ({ children, className = '' }) => (
  <p
    className={`text-base text-gray-700 leading-relaxed text-lg text-justify font-poppins ${className}`}
  >
    {children}
  </p>
);

export default Text;
