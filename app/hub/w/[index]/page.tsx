import { getProjects } from "@/app/utils/airtable";
import Link from "next/link";
import React from "react";

const Week = async ({ params: { index } }: { params: { index: number } }) => {
  const weekList = await getProjects();
  const week = weekList.find((w) => w.weekNumber == index);

  return (
    <div className='grid gap-y-4 lg:gap-y-6 mt-6'>
      <p className='max-w-sm lg:text-lg'>{week?.description}</p>
      {week?.isCurrent ? (
        <section className='grid gap-y-8'>
          <div className='flex gap-x-4'>
            <Link
              href={`/hub/w/${week.weekNumber}/submit`}
              className='inline-flex rounded-full border border-solid border-transparent transition-colors items-center justify-center bg-[#ededed] text-[#0a0a0a] gap-2 hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5'
            >
              Submit project
            </Link>
            <Link
              href={`/hub/w/${week.weekNumber}/cap`}
              className='inline-flex rounded-full border border-solid border-transparent transition-colors items-center justify-center bg-[#ededed] text-[#0a0a0a] gap-2 hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5'
            >
              Capstone update
            </Link>
          </div>
          <div className=''>
            <Link
              href={`/hub/w/${week.weekNumber}/recordings`}
              className='bg-primary font-medium rounded-full border border-solid border-transparent h-10 sm:h-12 px-4 sm:px-5 inline-flex justify-center items-center gap-x-2 hover:text-yellow-300'
            >
              <span>View recordings</span>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 256 256'
                fill='currentColor'
              >
                <path d='M251.77 73a8 8 0 0 0-8.21.39L208 97.05V72a16 16 0 0 0-16-16H32a16 16 0 0 0-16 16v112a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16v-25l35.56 23.71A8 8 0 0 0 248 184a8 8 0 0 0 8-8V80a8 8 0 0 0-4.23-7ZM192 184H32V72h160v112Zm48-22.95-32-21.33v-23.44L240 95Z' />
              </svg>
            </Link>
          </div>
        </section>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Week;
