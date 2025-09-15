export default function Text({ children, ...props }) {
  return (
    <p
      className={`text-lg md:text-lg leading-relaxed text-gray-900 font-poppins`}
      {...props}
    >
      {children}
    </p>
  );
}
