"use client";
import React from "react";
// import { track } from "@vercel/analytics";

const Register = () => {
  return (
    <section
      id='register'
      className='w-full py-12 pb-16 md:pb-24 px-4 bg-white text-black font-[family-name:var(--font-body)]'
    >
      <div className='relative z-10 max-w-3xl mx-auto px-4 text-center md:px-8 bg-black grid-background text-neutral-50 py-12 md:py-16 lg:py-20 rounded-xl'>
        <div className='max-w-xl mx-auto'>
          <p className='text-yellow-400 text-3xl font-semibold sm:text-4xl uppercase font-[family-name:var(--font-display)]'>
            Become an expert in web development
          </p>
          <p className='text-blue-100 mt-3'>
            Learn web development in 8 weeks by building alongside a community
            of learners for a fee of <b>₦10,000</b>. Register for #BuildAlong
            now!
          </p>
        </div>
        <div className='mt-4 md:mt-6'>
          <h3 className='text-xl text-center text-white font-[family-name:var(--font-body)] uppercase'>
            Registration has closed
          </h3>
          {/* <a
            onClick={() => track("Click register")}
            className='rounded-full border border-solid border-transparent transition-colors inline-flex items-center justify-center bg-[#ededed] text-[#0a0a0a] gap-2 hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5'
            href='#tally-open=mO0xE8&tally-overlay=1&tally-emoji-text=👋&tally-emoji-animation=wave'
          >
            Register now
          </a> */}
        </div>
      </div>
    </section>
  );
};

export default Register;
