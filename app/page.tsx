import Link from "next/link";
import Footer from "./components/Footer";
import Marquee from "./components/Marquee";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
      <div className='grid grid-rows-[20px_1fr_20px] relative items-center justify-items-center min-h-dvh p-8 gap-16 sm:pb-0 font-[family-name:var(--font-body)] bg-bg bg-cover bg-center overflow-x-hidden grid-background'>
        {/* <div className='absolute w-full inset-0 bg-black/55 z-10' /> */}
        <Navbar />
        <header className='flex flex-col gap-8 row-start-2 items-center max-w-3xl text-white z-20'>
          <div className='flex gap-x-6 items-center -my-3 md:text-lg font-bold uppercase'>
            <p>Oct 21 - Dec 13, 2024</p>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth='2'
              stroke='currentColor'
              className='w-5 h-5 inline-block'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M12 2v20M2 12h20M5.64 5.64l12.72 12.72M18.36 5.64L5.64 18.36'
              />
            </svg>
            <p>Virtual</p>
          </div>
          <h1 className='text-3xl sm:text-7xl font-semibold uppercase text-center font-[family-name:var(--font-display)] text-yellow-500'>
            #BuildAlong W&apos;24
          </h1>
          <p className='sm:text-lg text-center font-normal'>
            An 8 weeks virtual workshop for budding web developers, build
            real-life projects from the ground up! and connect with fellow
            learners
          </p>

          <p className='flex gap-x-2 text-primary text-sm items-center font-semibold uppercase'>
            <span className='w-3 h-3 rounded-full bg-primary' />{" "}
            <span>Completed</span>
          </p>

          <div className='flex gap-4 items-center flex-col sm:flex-row sm:justify-center sm:w-full'>
            <Link
              className='rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-[#ededed] text-[#0a0a0a] gap-2 hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5'
              href='/login'
            >
              Go to the Hub
            </Link>
            <a
              className='rounded-full border border-solid border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44'
              href='https://domeinitiative.com/build-along'
              target='_blank'
            >
              Join BuildAlong W&apos;25
            </a>
          </div>
        </header>
        <footer className='row-start-3 flex gap-6 flex-wrap items-center justify-center py-4 z-20 w-full absolute bottom-0 bg-black'>
          <Marquee
            items={[
              "Virtual",
              "Web development",
              "OCT 21 - DEC 15, 2024",
              "8 weeks",
            ]}
          />
        </footer>
      </div>
      {/* <Details />
      <CountdownTimer />
      <Facilitators />
      <Agenda />
      <Faqs />
      <Register /> */}
      <Footer />
    </>
  );
}
