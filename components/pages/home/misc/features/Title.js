export default function Title({ title, as: Component = 'h2' }) {
  return (
    <div className='flex flex-col items-center my-4 md:my-6'>
      <Component className='text-3xl sm:text-4xl md:text-5xl font-bold font-poppins text-gray-800 text-center'>
        {title}
      </Component>

      <div className='w-25 border-b-3 border-dashed border-green-600 my-4' />
    </div>
  );
}
