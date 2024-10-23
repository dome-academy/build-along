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
        <div className='flex gap-x-4'>
          <Link
            href={`/hub/w/${week.weekNumber}/submit`}
            className='inline-flex rounded-full border border-solid border-transparent transition-colors items-center justify-center bg-[#ededed] text-[#0a0a0a] gap-2 hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5'
          >
            Submit project
          </Link>
          <Link
            href='/cap-update'
            className='inline-flex rounded-full border border-solid border-transparent transition-colors items-center justify-center bg-[#ededed] text-[#0a0a0a] gap-2 hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5'
          >
            Capstone update
          </Link>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Week;
