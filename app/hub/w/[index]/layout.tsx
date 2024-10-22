import { getProjects } from "@/app/utils/airtable";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const WeekLayout = async ({
  children,
  params: { index },
}: {
  children: React.ReactNode;
  params: { index: number };
}) => {
  const weekList = await getProjects();
  const week = weekList.find((w) => w.weekNumber == index);

  return (
    <main className='grid lg:grid-cols-12 h-[calc(100dvh-56px)]'>
      {week ? (
        <>
          <section className='h-full relative grid place-items-center lg:col-span-7'>
            <div className='w-full px-4 sm:px-6 lg:px-8 max-w-screen-sm mx-auto'>
              <Link
                className='inline-flex items-center gap-x-3 hover:text-yellow-300'
                href={"/hub"}
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                >
                  <path
                    d='M19 10.9998H7.14L10.77 6.63979C10.9397 6.43557 11.0214 6.17229 10.997 5.90786C10.9726 5.64344 10.8442 5.39953 10.64 5.22979C10.4358 5.06005 10.1725 4.97839 9.90808 5.00277C9.64365 5.02715 9.39974 5.15557 9.23 5.35979L4.23 11.3598C4.19636 11.4075 4.16628 11.4576 4.14 11.5098C4.14 11.5598 4.14 11.5898 4.07 11.6398C4.02467 11.7544 4.00094 11.8765 4 11.9998C4.00094 12.1231 4.02467 12.2451 4.07 12.3598C4.07 12.4098 4.07 12.4398 4.14 12.4898C4.16628 12.5419 4.19636 12.5921 4.23 12.6398L9.23 18.6398C9.32402 18.7527 9.44176 18.8434 9.57485 18.9057C9.70793 18.9679 9.85309 19 10 18.9998C10.2337 19.0002 10.4601 18.9189 10.64 18.7698C10.7413 18.6858 10.825 18.5827 10.8863 18.4664C10.9477 18.35 10.9855 18.2227 10.9975 18.0918C11.0096 17.9608 10.9957 17.8287 10.9567 17.7031C10.9176 17.5775 10.8542 17.4608 10.77 17.3598L7.14 12.9998H19C19.2652 12.9998 19.5196 12.8944 19.7071 12.7069C19.8946 12.5194 20 12.265 20 11.9998C20 11.7346 19.8946 11.4802 19.7071 11.2927C19.5196 11.1051 19.2652 10.9998 19 10.9998Z'
                    fill='currentColor'
                  />
                </svg>
                <p className='text-sm'>Return home</p>
              </Link>
              <h2 className='mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl font-[family-name:var(--font-display)] uppercase'>
                {week.title}
              </h2>
              {children}
            </div>
          </section>
          <figure className='h-full relative lg:col-span-5'>
            <Image
              src={week.image}
              alt={week.title}
              className='object-cover'
              fill
            />
          </figure>
        </>
      ) : (
        <div className='w-full lg:col-span-12 h-full flex flex-col justify-center items-center text-center'>
          <p className='lg:text-lg'>Week does not exist</p>
          <Link
            href='/hub'
            className='hover:text-yellow-300 underline underline-offset-2'
          >
            Return to home
          </Link>
        </div>
      )}
    </main>
  );
};

export default WeekLayout;
