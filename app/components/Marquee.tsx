import React from "react";

const Marquee = ({ items }: { items: string[] }) => {
  return (
    <div className='whitespace-nowrap overflow-hidden relative uppercase font-medium'>
      <div className='animate-marquee md:animate-marquee2 inline-flex items-center text-white'>
        {items.map((item, index) => (
          <React.Fragment key={index}>
            <span className='text-lg mx-4 md:mx-6'>{item}</span>
            {index !== items.length - 1 && (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='2'
                stroke='currentColor'
                className='w-5 h-5 inline-block mx-4 md:mx-6'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M12 2v20M2 12h20M5.64 5.64l12.72 12.72M18.36 5.64L5.64 18.36'
                />
              </svg>
            )}
          </React.Fragment>
        ))}
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth='2'
          stroke='currentColor'
          className='w-5 h-5 inline-block mx-4 md:mx-6'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M12 2v20M2 12h20M5.64 5.64l12.72 12.72M18.36 5.64L5.64 18.36'
          />
        </svg>
        {items.map((item, index) => (
          <React.Fragment key={index + "duplicate"}>
            <span className='text-lg mx-4 md:mx-6'>{item}</span>
            {index !== items.length - 1 && (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='2'
                stroke='currentColor'
                className='w-5 h-5 inline-block mx-4 md:mx-6'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M12 2v20M2 12h20M5.64 5.64l12.72 12.72M18.36 5.64L5.64 18.36'
                />
              </svg>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
