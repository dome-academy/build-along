import React from "react";

const Navbar = () => {
  return (
    <nav className='justify-center absolute top-0 inset-x-0 flex px-8 font-[family-name:var(--font-body)] py-4 z-30 text-white'>
      <div className='flex w-full max-w-screen-lg justify-between items-center'>
        <a
          href='/'
          className='text-yellow-500 uppercase text-xl font-[family-name:var(--font-display)]'
        >
          #BuildAlong
        </a>
        <ul className='flex gap-x-6 items-center md:gap-x-12'>
          <li className='capitalize'>
            <a href='#'>about</a>
          </li>
          <li className='capitalize'>
            <a href='#'>facilitator</a>
          </li>
          <li className='capitalize'>
            <a href='#'>agenda</a>
          </li>
          <li className='capitalize'>
            <a href='#'>faqs</a>
          </li>
        </ul>
        <a
          className='rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-primary text-white gap-2 hover:bg-primary text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5'
          href='#details'
        >
          Register now
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
