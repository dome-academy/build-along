"use client";
import Image from "next/image";
import React, { FC, useState } from "react";

interface CarouselProps {
  agendas: { week: number; title: string; project: string; image: string }[];
}

const Carousel: FC<CarouselProps> = ({ agendas }) => {
  const [activeWeek, setActiveWeek] = useState(1);
  return (
    <>
      <nav className='w-full flex overflow-x-scroll snap-x snap-mandatory text-[10px] md:text-sm mb-4'>
        {agendas.map(({ week }) => (
          <button
            key={week}
            onClick={() => setActiveWeek(week)}
            className={
              "appearance-none  md:px-2 pb-4 border-b border-neutral-300/50 hover:border-primary/50 flex-1 text-neutral-900 " +
              (activeWeek === week ? "border-primary" : "")
            }
          >
            Week {week}
          </button>
        ))}
      </nav>
      <div className='w-[calc(100%) + 80px] overflow-x-hidden relative h-[490px] md:h-80'>
        {agendas.map(({ week, title, project, image }, index) => (
          <div
            key={index}
            style={{
              zIndex: week,
              marginLeft: `${(week - 1) * 5}px`,
              animationDelay: `${week * 100}ms`,
            }}
            className={
              `w-full h-full absolute bg-neutral-50 grid-background text-neutral-900 p-3 rounded-xl border flex flex-col md:flex-row gap-4 transition-transform duration-500 ` +
              (activeWeek >= week ? "translate-x-0" : "translate-x-[100%]")
            }
          >
            <Image
              src={image}
              alt={`week-${week}`}
              height={300}
              width={300}
              className='object-cover rounded-lg'
            />
            <div className='h-full flex flex-col'>
              <h1 className='text-xl md:text-2xl mb-2 font-[family-name:var(--font-display)] text-primary uppercase w-11/12'>
                #{week} - {title}
              </h1>
              <p className='w-4/5 text-sm'>
                <b>Project: </b>
                {project}
              </p>
              <p></p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Carousel;
