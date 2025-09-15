import React from 'react';

/**
 * SubTitle component with Tailwind styling.
 */
export default function SubTitle({ children, as: Component = 'h3' }) {
  return (
    <div className='mt-7 mb-4'>
      <Component className={`text-xl font-poppins font-semibold text-gray-800`}>
        {children}
      </Component>
    </div>
  );
}
