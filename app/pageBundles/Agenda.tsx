import React from "react";
import Carousel from "../components/Carousel";

const agendas = [
  {
    week: 1,
    title: "Introduction to Web Development with HTML and CSS",
    project:
      "Personal profile website (buttons, headings, ctas, links, layout (flex), pictures",
    image:
      "https://res.cloudinary.com/drltzg1ky/image/upload/v1716221645/dome_academy/BuildAlongs/1_s2mjwo.png",
  },
  {
    week: 2,
    title: "Building multipage websites",
    project:
      "Multiple page site (landing (CSS layout), about, contact, Image gallery (different styles), bonus (video*))",
    image:
      "https://res.cloudinary.com/drltzg1ky/image/upload/v1716221647/dome_academy/BuildAlongs/BUILDALONG-2_rkve6w.png",
  },
  {
    week: 3,
    title: "Layouts and Animations",
    project: "Photo gallary app and picture slider",
    image:
      "https://res.cloudinary.com/drltzg1ky/image/upload/v1716221646/dome_academy/BuildAlongs/BUILDALONG-3_ypoao8.png",
  },
  {
    week: 4,
    title: " Introduction to Javascript",
    project: "Hello app & Guessing game  - Bakery site",
    image:
      "https://res.cloudinary.com/drltzg1ky/image/upload/v1716221646/dome_academy/BuildAlongs/BUILDALONG-4_kcgzb0.png",
  },
  {
    week: 5,
    title: "Dom manipulation",
    project: "Rock paper scissors and Memory game",
    image:
      "https://res.cloudinary.com/drltzg1ky/image/upload/v1716221645/dome_academy/BuildAlongs/BUILDALONG-5_pl9q7u.png",
  },
  {
    week: 6,
    title: "Operators and Expressions",
    project: "Calculator app",
    image:
      "https://res.cloudinary.com/drltzg1ky/image/upload/v1716221646/dome_academy/BuildAlongs/BUILDALONG-6_sbbolf.png",
  },
  {
    week: 7,
    title: "Working with Lists and Objects",
    project: "Budgeting app",
    image:
      "https://res.cloudinary.com/drltzg1ky/image/upload/v1729447903/dome_academy/BuildAlongs/BUILDALONG-7_lmd25o.png",
  },
  {
    week: 8,
    title: "Building with External APIs",
    project: "Weather app",
    image:
      "https://res.cloudinary.com/drltzg1ky/image/upload/v1729449244/dome_academy/BuildAlongs/BUILDALONG-8_x0ql9b.png",
  },
];

const Agenda = () => {
  return (
    <section
      id='agenda'
      className='w-full py-12 md:py-20 lg:py-24 px-6 bg-white text-black font-[family-name:var(--font-body)]'
    >
      <article className='flex flex-col md:flex-row max-w-screen-lg mx-auto gap-6 group'>
        <div className='md:w-1/3'>
          <h1 className='text-2xl md:text-3xl lg:text-4xl font-[family-name:var(--font-display)] uppercase text-yellow-500 mb-4 rounded'>
            Agenda
          </h1>
          <p className='w-11/12 md:w-4/5'>
            We&apos;ve structured the sessions to ensure a seamless learning
            experience, combining theoretical knowledge with hands-on practice.
          </p>
          <div className='mt-4'>
            <a
              className='rounded-full border border-solid border-black transition-colors inline-flex items-center justify-center bg-black text-white gap-2 hover:bg-white hover:text-black text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5'
              href='#register'
            >
              Register now
            </a>
          </div>
        </div>
        <div className='flex-1'>
          <Carousel agendas={agendas} />
        </div>
      </article>
    </section>
  );
};

export default Agenda;
