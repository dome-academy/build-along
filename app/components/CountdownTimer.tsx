"use client";
import React, { useState, useEffect } from "react";

const CountdownTimer: React.FC = () => {
  const calculateTimeLeft = () => {
    const targetDate = new Date("2024-10-19T00:00:00").getTime(); // Set the target date
    const currentDate = new Date().getTime();
    const difference = targetDate - currentDate;

    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className='bg-yellow-400 text-neutral-800 p-8 flex flex-col justify-center md:items-center font-[family-name:var(--font-body)]'>
      <div className='text-2xl font-bold mb-4 font-[family-name:var(--font-display)] uppercase'>
        Registration ends in:
      </div>
      <div className='text-2xl sm:text-4xl font-bold'>
        {`${timeLeft.days}d : ${timeLeft.hours}h : ${timeLeft.minutes}m : ${timeLeft.seconds}s`}
      </div>
    </div>
  );
};

export default CountdownTimer;
