"use client";
import React, { useState } from "react";
import LightBox from "@/app/components/LightBox";

const guides = [
  {
    title: "How to setup #BuildAlong extension on your browser",
    tags: ["Browser", "#BuildAlong"],
    videoURl: "https://www.youtube.com/embed/64pfUHPE1sY?si=X4TACa4LBsLz2roq",
  },
  {
    title: "How to install Visual Studio code on your computer",
    tags: ["VScode", "Installation"],
    videoURl: "https://www.youtube.com/embed/GzndMw_Gtqc?si=3a2h8KnVATU-ch6W",
  },
  {
    title: "5 essentail VScode extensions you must install for #BuildAlong",
    tags: ["VScode", "Installation", "#BuildAlong"],
    videoURl: "https://www.youtube.com/embed/iYkLrXobBbA?si=q8oIkgFx_LopWjUq",
  },
  {
    title: "How to create an account on GitHub in less than 2 minutes",
    tags: ["Git", "GitHub"],
    videoURl: "https://www.youtube.com/embed/Gn3w1UvTx0A?si=sIx95UoqDrO2QsqL",
  },
  {
    title:
      "How to create a install git on your computer in less than 2 minutes",
    tags: ["Git", "GitHub"],
    videoURl: "https://www.youtube.com/embed/iYkLrXobBbA?si=OVL3bbh8imCHVzId",
  },
  {
    title: "How to upload your code to GitHub from VScode using git",
    tags: ["Git", "GitHub"],
    videoURl: "",
  },
  {
    title: "How to deploy your website online using Netlify",
    tags: ["Git", "GitHub", "Netlify", "Hosting"],
    videoURl: "",
  },
];

const Guides = () => {
  const [open, setOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState("");

  const handleOpenVideo = (videoUrl: string) => {
    setCurrentVideo(videoUrl);
    setOpen(true);
  };

  const handleClose = () => {
    setCurrentVideo("");
    setOpen(false);
  };
  return (
    <main className='grid-background min-h-[calc(100dvh-56px)]'>
      <LightBox videoUrl={currentVideo} onClose={handleClose} open={open} />
      <header className='border-b border-neutral-800 bg-neutral-900/50'>
        <div className='mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8'>
          <h1 className='text-2xl font-bold sm:text-3xl text-white mb-4'>
            Useful Guides
          </h1>
          <p>
            Tips and guides to help you navigate the #BuildAlong programme
            successfully
          </p>
        </div>
      </header>
      <section className='max-w-screen-xl grid gap-6 md:grid-cols-2 lg:grid-cols-3 py-8 px-4 sm:px-6 mx-auto lg:px-8'>
        {guides.map((guide, i) => (
          <article
            key={i}
            className='group hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s]'
          >
            <div className='rounded-[10px] bg-neutral-950 p-4 !pt-20 sm:p-6'>
              <p className='block text-xs text-neutral-300'>Guide</p>

              <a onClick={() => handleOpenVideo(guide.videoURl)} href='#'>
                <h3 className='mt-0.5 text-lg font-medium text-white group-hover:text-yellow-200'>
                  {guide.title}
                </h3>
              </a>

              <div className='mt-4 flex flex-wrap gap-1'>
                {guide.tags.map((t, i) => (
                  <span
                    key={i}
                    className='whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600'
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
};

export default Guides;
