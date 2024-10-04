import Image from "next/image";
import React from "react";

const Facilitators = () => {
  return (
    <section
      id='facilitator'
      className='w-full py-12 md:py-20 lg:py-24 px-6 bg-neutral-950 grid-background text-neutral-50 font-[family-name:var(--font-body)]'
    >
      <header className='max-w-screen-lg mx-auto mb-6 md:mb-16'>
        <h2 className='text-lg md:text-xl lg:text-2xl font-medium'>
          Meet the facilitator
        </h2>
      </header>
      <article className='flex flex-col md:flex-row max-w-screen-lg mx-auto gap-6 group'>
        <div className=''>
          <h1 className='text-2xl md:text-3xl lg:text-4xl font-[family-name:var(--font-display)] uppercase text-yellow-500 mb-4'>
            Emeka Allison
          </h1>
          <p className='w-11/12 md:w-4/5'>
            Emeka is a seasoned software engineer with 6+ years of experience.
            He brings a wealth of knowledge and expertise to the table, having
            worked on Onboard at Nestcoin and Dome Academy.
          </p>
          <ul className='flex gap-x-2 mt-4'>
            <li>
              <a
                href='https://www.linkedin.com/in/chukwuemeka-allison-7a693a105/'
                target='_blank'
                rel='noopenner noreferrer'
                className='hover:text-yellow-400 transition-colors duration-200'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  fill='currentColor'
                  viewBox='0 0 256 256'
                >
                  <path d='M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z'></path>
                </svg>
              </a>
              <span className='sr-only'>LinkedIn</span>
            </li>
            <li>
              <a
                href='https://x.com/alliemeka'
                target='_blank'
                rel='noopenner noreferrer'
                className='hover:text-yellow-400 transition-colors duration-200'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  fill='currentColor'
                  viewBox='0 0 256 256'
                >
                  <path d='M214.75,211.71l-62.6-98.38,61.77-67.95a8,8,0,0,0-11.84-10.76L143.24,99.34,102.75,35.71A8,8,0,0,0,96,32H48a8,8,0,0,0-6.75,12.3l62.6,98.37-61.77,68a8,8,0,1,0,11.84,10.76l58.84-64.72,40.49,63.63A8,8,0,0,0,160,224h48a8,8,0,0,0,6.75-12.29ZM164.39,208,62.57,48h29L193.43,208Z'></path>
                </svg>
              </a>
              <span className='sr-only'>X</span>
            </li>
            <li>
              <a
                href='https://instagram.com/alliemeka'
                target='_blank'
                rel='noopenner noreferrer'
                className='hover:text-yellow-400 transition-colors duration-200'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  fill='currentColor'
                  viewBox='0 0 256 256'
                >
                  <path d='M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160ZM176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z'></path>
                </svg>
              </a>
              <span className='sr-only'>Instagram</span>
            </li>
          </ul>
        </div>
        <figure className='w-full relative'>
          <div className='aspect-[4/5] w-full relative overflow-hidden rounded-xl'>
            <Image
              fill
              src='/image/emeka.jpg'
              alt='Emeka Allison'
              className='object-cover'
            />
          </div>
        </figure>
      </article>
    </section>
  );
};

export default Facilitators;
