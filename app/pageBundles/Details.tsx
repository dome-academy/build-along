import React from "react";

const Details = () => {
  return (
    <section
      id='details'
      className='w-full py-12 md:py-20 lg:py-24 px-6 bg-white text-black font-[family-name:var(--font-body)]'
    >
      <p className='text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto md:text-center font-semibold py-8'>
        #BuildAlong is an 8-week hands-on training program designed for aspiring
        web developers eager to gain real-world experience. With personalized
        mentorship and a collaborative environment, you’ll master the latest
        techniques and best practices in web development, setting yourself up
        for success in the field.
      </p>
      <article className='grid gap-6 md:grid-cols-2 max-w-screen-lg mx-auto mt-6 sm:mt-12 text-white'>
        {/* First Item: Real-world projects */}
        <div className='flex flex-col justify-center items-center w-full py-12 bg-ba3 bg-cover bg-center rounded-xl px-8 md:row-span-2 gap-y-4 relative overflow-hidden group cursor-pointer'>
          <div className='absolute inset-0 bg-black/50 z-10 group-hover:bg-black/30 transition-all duration-200' />
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='48'
            height='48'
            fill='currentColor'
            viewBox='0 0 256 256'
            className='relative z-20'
          >
            <path d='M240,80H108.94L87.16,36.42A8,8,0,0,0,80,32H48a8,8,0,0,0-8,8V80H24a8,8,0,0,0,0,16H40V208H24a8,8,0,0,0,0,16H128a8,8,0,0,0,0-16H112V96h96v88H192v-8a8,8,0,0,0-16,0v8a16,16,0,0,0,16,16h16a16,16,0,0,0,16-16V96h16a8,8,0,0,0,0-16ZM56,48H75.06l16,32H56Zm0,160V160H96v48Zm40-64H56V96H96Z'></path>
          </svg>

          <h2 className='text-4xl sm:text-5xl md:text-6xl font-[family-name:var(--font-display)] relative z-20'>
            8+
          </h2>
          <p className='text-xl sm:text-2xl relative z-20'>
            Real-world projects
          </p>
        </div>

        {/* Second Item: Weeks of live classes */}
        <div className='flex flex-col items-center w-full py-12  bg-ba2  bg-cover bg-center rounded-xl px-8 gap-y-4 relative overflow-hidden group cursor-pointer'>
          <div className='absolute inset-0 bg-black/50 z-10 group-hover:bg-black/30 transition-all duration-200' />
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='48'
            height='48'
            fill='currentColor'
            viewBox='0 0 256 256'
            className='relative z-20'
          >
            <path d='M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM72,48v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24V80H48V48ZM208,208H48V96H208V208Zm-68-76a12,12,0,1,1-12-12A12,12,0,0,1,140,132Zm44,0a12,12,0,1,1-12-12A12,12,0,0,1,184,132ZM96,172a12,12,0,1,1-12-12A12,12,0,0,1,96,172Zm44,0a12,12,0,1,1-12-12A12,12,0,0,1,140,172Zm44,0a12,12,0,1,1-12-12A12,12,0,0,1,184,172Z'></path>
          </svg>
          <h2 className='text-4xl sm:text-5xl md:text-6xl font-[family-name:var(--font-display)] relative z-20'>
            8
          </h2>
          <p className='text-xl sm:text-2xl relative z-20'>
            Weeks of live classes
          </p>
        </div>

        {/* Third Item: Months of learning */}
        <div className='flex flex-col items-center w-full py-12 bg-ba bg-cover bg-center rounded-xl px-8 gap-y-4 relative overflow-hidde group cursor-pointer'>
          <div className='absolute inset-0 bg-black/50 z-10 group-hover:bg-black/30 transition-all duration-200' />
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='48'
            height='48'
            fill='currentColor'
            viewBox='0 0 256 256'
            className='relative z-20'
          >
            <path d='M244.8,150.4a8,8,0,0,1-11.2-1.6A51.6,51.6,0,0,0,192,128a8,8,0,0,1-7.37-4.89,8,8,0,0,1,0-6.22A8,8,0,0,1,192,112a24,24,0,1,0-23.24-30,8,8,0,1,1-15.5-4A40,40,0,1,1,219,117.51a67.94,67.94,0,0,1,27.43,21.68A8,8,0,0,1,244.8,150.4ZM190.92,212a8,8,0,1,1-13.84,8,57,57,0,0,0-98.16,0,8,8,0,1,1-13.84-8,72.06,72.06,0,0,1,33.74-29.92,48,48,0,1,1,58.36,0A72.06,72.06,0,0,1,190.92,212ZM128,176a32,32,0,1,0-32-32A32,32,0,0,0,128,176ZM72,120a8,8,0,0,0-8-8A24,24,0,1,1,87.24,82a8,8,0,1,0,15.5-4A40,40,0,1,0,37,117.51,67.94,67.94,0,0,0,9.6,139.19a8,8,0,1,0,12.8,9.61A51.6,51.6,0,0,1,64,128,8,8,0,0,0,72,120Z'></path>
          </svg>
          <h2 className='text-4xl sm:text-5xl md:text-6xl font-[family-name:var(--font-display)] relative z-20'>
            60+
          </h2>
          <p className='text-xl sm:text-2xl relative z-20'>
            Hours of interactive sessions
          </p>
        </div>
      </article>
    </section>
  );
};

export default Details;
