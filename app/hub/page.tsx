import React from "react";
import WeekCard from "../components/WeekCard";
import { getProjects } from "../utils/airtable";

const HubPage = async () => {
  const fetchWeeks = await getProjects();
  return (
    <main className='min-h-[calc(100dvh-56px)] bg-neutral-950'>
      <header className='border-b border-neutral-800 bg-neutral-900/20'>
        <div className='mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8'>
          <div className='flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between'>
            <div>
              <h1 className='text-2xl font-bold text-gray-900 sm:text-3xl dark:text-white'>
                Hello, Deborah
              </h1>

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
