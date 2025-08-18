'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { FullScreen, useFullScreenHandle } from 'react-full-screen';

export default function Home() {
  const [time, setTime] = useState(new Date());
  const [active, setActive] = useState(false);
  const weekday = ["Sun","Mon","Tues","Wednes","Thurs","Fri","Sat "];
  const month = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

  const handle = useFullScreenHandle();

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (handle.active) {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [handle]);

  const iconFull = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="icon icon-tabler icons-tabler-outline icon-tabler-arrows-maximize"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M16 4l4 0l0 4" />
        <path d="M14 10l6 -6" />
        <path d="M8 20l-4 0l0 -4" />
        <path d="M4 20l6 -6" />
        <path d="M16 20l4 0l0 -4" />
        <path d="M14 14l6 6" />
        <path d="M8 4l-4 0l0 4" />
        <path d="M4 4l6 6" />
      </svg>
    );
  };

  const iconNotFull = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="icon icon-tabler icons-tabler-outline icon-tabler-arrows-minimize"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M5 9l4 0l0 -4" />
        <path d="M3 3l6 6" />
        <path d="M5 15l4 0l0 4" />
        <path d="M3 21l6 -6" />
        <path d="M19 9l-4 0l0 -4" />
        <path d="M15 9l6 -6" />
        <path d="M19 15l-4 0l0 4" />
        <path d="M15 15l6 6" />
      </svg>
    );
  };
  return (
    <FullScreen handle={handle}>
      <div className="bg-primary font-cute flex h-screen w-screen flex-col items-center justify-center">
        <section className="flex h-full flex-col items-center justify-center gap-10">
          <div>
            <span className="text-7xl font-bold text-white md:text-9xl lg:text-[300px]">
              {time.toLocaleTimeString('th-TH', {
                timeZone: 'Asia/Bangkok',
                hour: '2-digit',
                minute: '2-digit',
                hour12: false,
              })}
            </span>
            <span className="ml-4 text-3xl font-bold text-red-600 md:text-4xl lg:text-[100px]">
              {time.toLocaleTimeString('th-TH', {
                timeZone: 'Asia/Bangkok',
                second: '2-digit',
              })}
            </span>
          </div>
          <div className="text-3xl text-white">
            <div className='text-lg text-zinc-500'>{weekday[time.getDay()]} | {month[time.getMonth()]}</div>
            {time.getDate()} / {time.getMonth() + 1} / {time.getFullYear()}
          </div>
          {active ? (
            <section
              className="m-10 rounded-xl bg-white p-2 text-lg transition-colors duration-500 hover:cursor-pointer hover:bg-slate-500 hover:text-white md:text-xl lg:text-3xl"
              onClick={handle.exit}
            >
              {iconNotFull()}
            </section>
          ) : (
            <section
              className="m-10 rounded-xl bg-white p-2 text-lg transition-colors duration-500 hover:cursor-pointer hover:bg-slate-500 hover:text-white md:text-xl lg:text-3xl"
              onClick={handle.enter}
            >
              {iconFull()}
            </section>
          )}
        </section>
      </div>
    </FullScreen>
  );
}
