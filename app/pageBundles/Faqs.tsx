import React from "react";

const faqs = [
  {
    question: "Is the training free?",
    answer:
      "No, the training requires a fee of ₦10,000 to participate. However, you will receive a full refund if you complete the program, making it risk-free for those who follow through!",
  },
  {
    question: "Do I need a laptop to participate?",
    answer:
      "Yes, you’ll need a laptop to fully participate in the training. The projects and coding tasks we’ll be working on each week require a capable device to run development tools.",
  },
  {
    question: "Would there be hands-on projects?",
    answer:
      "Yes! This is a hands-on training program. Each week, you’ll be building projects that reinforce the web development skills taught during the sessions.",
  },
  {
    question: "When does the training start?",
    answer:
      "#BuildAlong training starts on 21st October, 2024. Make sure to secure your spot early!",
  },
  {
    question: "What experience do I need to join?",
    answer:
      "This program is perfect for beginners or those with basic web development knowledge. We'll guide you through each step, so don't worry if you're just getting started.",
  },
  {
    question: "Will the sessions be recorded?",
    answer:
      "Yes, all sessions will be recorded and made available to participants. If you miss a session, you can catch up at your convenience.",
  },
];

const Faqs = () => {
  return (
    <section
      id='faqs'
      className='w-full pt-8 pb-12 md:pt-12 md:pb-16 lg:pt-12 px-6 bg-white font-[family-name:var(--font-body)]'
    >
      <header className='max-w-screen-lg mx-auto mb-6 md:mb-8'>
        <h1 className='text-2xl md:text-3xl lg:text-4xl font-[family-name:var(--font-display)] uppercase text-yellow-500 mb-4'>
          Frequently asked
          <br /> questions
        </h1>
      </header>
      <div className='space-y-4 max-w-screen-lg mx-auto'>
        {faqs.map(({ question, answer }, index) => (
          <details
            key={index}
            className='group [&_summary::-webkit-details-marker]:hidden'
            open={index == 0}
          >
            <summary className='flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-neutral-50 p-4 text-gray-900'>
              <h2 className='font-semibold'>{question}</h2>

              <svg
                className='size-5 shrink-0 transition duration-300 group-open:-rotate-180'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M19 9l-7 7-7-7'
                />
              </svg>
            </summary>

            <p className='mt-4 px-4 leading-relaxed text-gray-700'>{answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
};

export default Faqs;
