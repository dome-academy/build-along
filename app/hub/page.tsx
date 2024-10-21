import React from "react";
import WeekCard, { WeekCardProps } from "../components/WeekCard";

const weeks: WeekCardProps[] = [
  {
    title: "Week 1",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure,recusandae.",
    isCurrent: true,
    weekNumber: 1,
    image:
      "https://res.cloudinary.com/drltzg1ky/image/upload/v1716221645/dome_academy/BuildAlongs/1_s2mjwo.png",
  },
  {
    title: "Week 2",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure,recusandae.",
    isCurrent: true,
    weekNumber: 2,
    image:
      "https://res.cloudinary.com/drltzg1ky/image/upload/v1716221647/dome_academy/BuildAlongs/BUILDALONG-2_rkve6w.png",
  },
  {
    title: "Week 3",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure,recusandae.",
    isCurrent: true,
    weekNumber: 3,
    image:
      "https://res.cloudinary.com/drltzg1ky/image/upload/v1716221646/dome_academy/BuildAlongs/BUILDALONG-3_ypoao8.png",
  },
  {
    title: "Week 4",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure,recusandae.",
    isCurrent: true,
    weekNumber: 4,
    image:
      "https://res.cloudinary.com/drltzg1ky/image/upload/v1716221646/dome_academy/BuildAlongs/BUILDALONG-4_kcgzb0.png",
  },
  {
    title: "Week 5",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure,recusandae.",
    isCurrent: true,
    weekNumber: 5,
    image:
      "https://res.cloudinary.com/drltzg1ky/image/upload/v1716221645/dome_academy/BuildAlongs/BUILDALONG-5_pl9q7u.png",
  },
  {
    title: "Week 6",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure,recusandae.",
    isCurrent: true,
    weekNumber: 6,
    image:
      "https://res.cloudinary.com/drltzg1ky/image/upload/v1716221646/dome_academy/BuildAlongs/BUILDALONG-6_sbbolf.png",
  },
];

const HubPage = () => {
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
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure,
                recusandae.
              </p>
            </div>
          </div>
        </div>
      </header>
      <section className='grid gap-6 md:grid-cols-2 lg:grid-cols-3 py-8 px-4 sm:px-6 lg:px-8 max-w-screen-xl mx-auto'>
        {weeks.map((w) => (
          <WeekCard key={w.weekNumber} {...w} />
        ))}
      </section>
    </main>
  );
};

export default HubPage;
