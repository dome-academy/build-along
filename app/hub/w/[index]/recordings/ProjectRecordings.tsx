"use client";
import LightBox from "@/app/components/LightBox";
import React, { FC, useState } from "react";

interface ProjectRecordingsProps {
  index: number;
  mon: string;
  wed: string;
  fri: string;
}

const ProjectRecordings: FC<ProjectRecordingsProps> = ({
  index,
  mon,
  wed,
  fri,
}) => {
  const [open, setOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState<string>();

  const handleOpen = (video: string) => {
    setCurrentVideo(video);
    setOpen(true);
  };

  const handleClose = () => {
    setCurrentVideo(undefined);
    setOpen(false);
  };

  return (
    <div className='grid mt-8 gap-y-3'>
      <LightBox
        onClose={handleClose}
        open={open}
        videoUrl={currentVideo || ""}
      />
      <button
        tabIndex={1}
        onClick={() => handleOpen(mon)}
        className='p-4 border-2 rounded-md flex justify-between items-center hover:shadow-[0_0_15px_var(--tw-shadow-color)] hover:shadow-primary hover:border-fuchsia-300 focus:shadow-[0_0_15px_var(--tw-shadow-color)] focus:shadow-primary focus:border-fuchsia-300 transition-shadow group focus-within:outline-none'
      >
        <h4 className='md:text-lg group-hover:text-fuchsia-400 group-hover:brightness-150 group-focus:text-fuchsia-400'>
          Watch #BuildAlong Lecture W{index}
        </h4>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 256 256'
          fill='currentColor'
          className='group-hover:animate-bounce group-focus:animate-bounce group-hover:text-fuchsia-400 group-hover:brightness-150 group-focus:text-fuchsia-400'
        >
          <path d='M251.77 73a8 8 0 0 0-8.21.39L208 97.05V72a16 16 0 0 0-16-16H32a16 16 0 0 0-16 16v112a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16v-25l35.56 23.71A8 8 0 0 0 248 184a8 8 0 0 0 8-8V80a8 8 0 0 0-4.23-7ZM192 184H32V72h160v112Zm48-22.95-32-21.33v-23.44L240 95Z' />
        </svg>
      </button>

      <button
        tabIndex={2}
        onClick={() => handleOpen(wed)}
        className='p-4 border-2 rounded-md flex justify-between items-center hover:shadow-[0_0_15px_var(--tw-shadow-color)] hover:shadow-primary hover:border-fuchsia-300 focus:shadow-[0_0_15px_var(--tw-shadow-color)] focus:shadow-primary focus:border-fuchsia-300 transition-shadow group focus-within:outline-none'
      >
        <h4 className='md:text-lg group-hover:text-fuchsia-400 group-hover:brightness-150 group-focus:text-fuchsia-400'>
          Watch #BuildWednesday Lecture W{index}
        </h4>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 256 256'
          fill='currentColor'
          className='group-hover:animate-bounce group-focus:animate-bounce group-hover:text-fuchsia-400 group-hover:brightness-150 group-focus:text-fuchsia-400'
        >
          <path d='M251.77 73a8 8 0 0 0-8.21.39L208 97.05V72a16 16 0 0 0-16-16H32a16 16 0 0 0-16 16v112a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16v-25l35.56 23.71A8 8 0 0 0 248 184a8 8 0 0 0 8-8V80a8 8 0 0 0-4.23-7ZM192 184H32V72h160v112Zm48-22.95-32-21.33v-23.44L240 95Z' />
        </svg>
      </button>

      <button
        tabIndex={3}
        onClick={() => handleOpen(fri)}
        className='p-4 border-2 rounded-md flex justify-between items-center hover:shadow-[0_0_15px_var(--tw-shadow-color)] hover:shadow-primary hover:border-fuchsia-300 focus:shadow-[0_0_15px_var(--tw-shadow-color)] focus:shadow-primary focus:border-fuchsia-300 transition-shadow group focus-within:outline-none'
      >
        <h4 className='md:text-lg group-hover:text-fuchsia-400 group-hover:brightness-150 group-focus:text-fuchsia-400'>
          Watch #BuildFriday W{index}
        </h4>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 256 256'
          fill='currentColor'
          className='group-hover:animate-bounce group-focus:animate-bounce group-hover:text-fuchsia-400 group-hover:brightness-150 group-focus:text-fuchsia-400'
        >
          <path d='M251.77 73a8 8 0 0 0-8.21.39L208 97.05V72a16 16 0 0 0-16-16H32a16 16 0 0 0-16 16v112a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16v-25l35.56 23.71A8 8 0 0 0 248 184a8 8 0 0 0 8-8V80a8 8 0 0 0-4.23-7ZM192 184H32V72h160v112Zm48-22.95-32-21.33v-23.44L240 95Z' />
        </svg>
      </button>
    </div>
  );
};

export default ProjectRecordings;
