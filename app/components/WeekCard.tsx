import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";

export interface WeekCardProps {
  id: string;
  title: string;
  description: string;
  weekNumber: number;
  isCurrent: boolean;
  image: string;
  hasGitHub?: boolean;
}

const WeekCard: FC<WeekCardProps> = ({
  title,
  description,
  image,
  weekNumber,
  isCurrent,
}) => {
  return (
    <Link
      href={isCurrent ? `/hub/w/${weekNumber}` : "#"}
      className='group relative block h-64 sm:h-80 lg:h-96'
    >
      <span className='absolute inset-0 border-2 border-dashed border-white'></span>

      <div className='relative flex h-full transform items-end border-2 border-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2'>
        <Image
          fill
          className='object-cover filter brightness-[80%] group-hover:brightness-[20%]'
          src={image}
          alt='Week'
        />
        <div className='p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8 relative z-10'>
          <svg
            id='Layer_1'
            data-name='Layer 1'
            xmlns='http://www.w3.org/2000/svg'
            height={48}
            width={48}
            viewBox='0 0 200 200'
            fill='#fafafa'
          >
            <path
              className='cls-1'
              d='M174.78,154.1q0,6.22-.58,12.3-.36,3.79-.94,7.52a19.86,19.86,0,0,1-5.32.71,20.28,20.28,0,0,1-8.36-1.79,113.66,113.66,0,0,0,1.4-13.55c.08-1.72.12-3.44.12-5.19a115.87,115.87,0,0,0-1.52-18.74,108.43,108.43,0,0,0-3.05-13.51h0A111.21,111.21,0,0,0,152,109a110.33,110.33,0,0,0-6.1-12.33A112.92,112.92,0,0,0,138.25,85a117,117,0,0,0-19.76-20.76,116,116,0,0,0-12.13-8.72A116.95,116.95,0,0,0,74.47,85a111.22,111.22,0,0,0-7.61,11.67A108.69,108.69,0,0,0,60.75,109a111.21,111.21,0,0,0-4.56,12.89,106.8,106.8,0,0,0-3,13.52,114.75,114.75,0,0,0-1.53,18.74c0,1.75,0,3.47.12,5.19A130.57,130.57,0,0,1,65.3,153.9h0a129.55,129.55,0,0,1,13.45-3.69,34,34,0,0,0-10.42-20.89,100.25,100.25,0,0,1,4.57-13.95A47.65,47.65,0,0,1,83.54,126a88.07,88.07,0,0,0-4.45,24.14A127.81,127.81,0,0,1,92.29,148l.64-.07c4.29-.43,8.65-.67,13-.68A61.51,61.51,0,0,0,89.63,112a61.84,61.84,0,0,0-10.63-9,102.37,102.37,0,0,1,7.61-11.37,72.91,72.91,0,0,1,10.63,8.63,75,75,0,0,1,9.12,10.68,75.69,75.69,0,0,1,7.61,13.6,61,61,0,0,0-7.22,22.78c4.4,0,8.75.25,13,.68l.64.07a127.81,127.81,0,0,1,13.2,2.13,89.17,89.17,0,0,0-37.89-68.9,101.08,101.08,0,0,1,10.63-9.19A102.16,102.16,0,0,1,117,81.24a105.24,105.24,0,0,1,9.12,10.33,101.63,101.63,0,0,1,13.7,23.8,100.11,100.11,0,0,1,4.57,13.94h0a102.65,102.65,0,0,1,3,24.58v.2a100.51,100.51,0,0,1-1,14,114.41,114.41,0,0,0-11.06-3.45h0l-2.21-.55a117.24,117.24,0,0,0-12.51-2.24l-1-.11a114.61,114.61,0,0,0-12.91-.75H106a114.61,114.61,0,0,0-12.91.75l-1,.11a117.24,117.24,0,0,0-12.51,2.24l-2.21.55h0a114.41,114.41,0,0,0-11.06,3.45c-4.46,1.64-16.06,6.57-21.48,6.57a20.34,20.34,0,0,1-5.33-.71q-.59-3.72-.94-7.52-.57-6.08-.58-12.3a129.38,129.38,0,0,1,1.52-19.81,123.37,123.37,0,0,1,3-14.32,127.31,127.31,0,0,1,4.56-13.71A130.05,130.05,0,0,1,53.17,93.1,131.17,131.17,0,0,1,80.58,57.92a129.18,129.18,0,0,1,25.78-18.28A130.15,130.15,0,0,1,120,48.13a131.08,131.08,0,0,1,12.13,9.79,126.91,126.91,0,0,1,10.64,10.87,130.46,130.46,0,0,1,9.15,11.77,131.86,131.86,0,0,1,13.73,25.7A127.31,127.31,0,0,1,170.22,120a123.37,123.37,0,0,1,3,14.32A129.38,129.38,0,0,1,174.78,154.1Z'
            />
          </svg>

          <h2 className='mt-4 text-xl font-medium sm:text-2xl font-[family-name:var(--font-display)] uppercase'>
            {title}
          </h2>
        </div>

        <div className='absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8 z-20'>
          <h3 className='mt-4 text-xl font-medium sm:text-2xl font-[family-name:var(--font-display)] uppercase'>
            {title}
          </h3>

          <p className='mt-4 text-sm sm:text-base'>{description}</p>

          <p className='mt-8 font-bold'>View project</p>
        </div>
      </div>
    </Link>
  );
};

export default WeekCard;
