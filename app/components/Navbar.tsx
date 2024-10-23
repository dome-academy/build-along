import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className='justify-center absolute top-0 inset-x-0 flex px-8 font-[family-name:var(--font-body)] py-4 z-30 text-white border-b border-white/20'>
      <div className='flex w-full max-w-screen-lg justify-between items-center'>
        <Link
          href='/'
          className='text-yellow-500 uppercase text-xl font-[family-name:var(--font-display)]'
        >
          #BuildAlong
        </Link>
        <ul className='hidden md:flex gap-x-6 items-center md:gap-x-12'>
          {/* <li className='capitalize'>
            <a href='#details'>about</a>
          </li>
          <li className='capitalize'>
            <a href='#facilitator'>facilitator</a>
          </li>
          <li className='capitalize'>
            <a href='#agenda'>agenda</a>
          </li>
          <li className='capitalize'>
            <a href='#faqs'>faqs</a>
          </li> */}
        </ul>
        <Link
          className='rounded-full border border-solid border-white/[.145] transition-colors flex items-center justify-center  bg-transparent text-white gap-2 hover:bg-white hover:text-black text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5'
          href='/login'
        >
          Go to Hub
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
