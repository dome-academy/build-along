import React, { FC } from "react";

interface LightBoxProps {
  videoUrl: string;
  open: boolean;
  onClose: VoidFunction;
}

const LightBox: FC<LightBoxProps> = ({ videoUrl, open, onClose }) => {
  return open ? (
    <main className='min-h-dvh bg-black/70 grid place-items-center px-8 fixed inset-0 z-20 backdrop-blur-md'>
      <div className='absolute z-10 inset-0' onClick={onClose} />
      <div className='relative z-20 hover:animate-background rounded-xl max-w-screen-xl w-full aspect-video overflow-hidden bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-1 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s]'>
        <iframe
          src={videoUrl}
          className='w-full h-full rounded-lg bg-neutral-950 grid-background'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;'
          allowFullScreen
        />
      </div>
    </main>
  ) : null;
};

export default LightBox;
