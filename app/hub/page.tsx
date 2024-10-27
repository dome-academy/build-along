import React from "react";
import WeekCard from "../components/WeekCard";
import { getCurrentStudentDetails, getProjects } from "../utils/airtable";
import Link from "next/link";

const HubPage = async () => {
  await getCurrentStudentDetails();
  const [fetchWeeks, currentStudent] = await Promise.all([
    getProjects(),
    getCurrentStudentDetails(),
  ]);
  return (
    <main className='min-h-[calc(100dvh-56px)] bg-neutral-950 grid-background'>
      <header className='border-b border-neutral-800 bg-neutral-900/20'>
        <div className='mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8'>
          <div className='flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between'>
            <div>
              <h1 className='text-2xl font-bold sm:text-3xl text-white'>
                Hello, {currentStudent?.name as string}{" "}
              </h1>

              <p className='mt-1.5 text-sm text-white/70 font-medium'>
                <Link
                  href={`/p/${currentStudent?.username}`}
                  className='hover:underline hover:underline-offset-2'
                >
                  {" "}
                  @{currentStudent?.username}
                </Link>{" "}
                | Id: {currentStudent?.studentId as string} | Team:{" "}
                {currentStudent?.team}
              </p>
              <p className='mt-1.5 text-sm text-gray-500 dark:text-gray-400 font-medium'>
                Submit your weekly updates here
              </p>
            </div>
          </div>
        </div>
      </header>
      <section className='grid gap-6 md:grid-cols-2 lg:grid-cols-3 py-8 px-4 sm:px-6 lg:px-8 max-w-screen-xl mx-auto'>
        {fetchWeeks.map((w) => (
          <WeekCard key={w.weekNumber} {...w} />
        ))}
      </section>
    </main>
  );
};

export default HubPage;
