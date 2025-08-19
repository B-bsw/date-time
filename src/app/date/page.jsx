'use client';
import Date from '@/components/dates/date';
import Time from '@/components/times/time';
import Image from 'next/image';
import { useEffect, useState, useContext } from 'react';
import { FullScreen, useFullScreenHandle } from 'react-full-screen';
import Headers from '@/components/headers/headers';
import { AppContext } from '../page';

export default function Home() {
  const { active, setActive } = useContext(AppContext);
  const handle = useFullScreenHandle();
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
    <>
      <FullScreen handle={handle}>
        <div className="bg-primary flex h-screen items-center justify-center">
          <div className="flex flex-col items-center gap-5">
            <Time />
            <div className="p-5">
              <Date />
            </div>
            {active ? (
              <section
                className="m-10 rounded-xl bg-white p-2 text-lg transition-all duration-500 hover:scale-120 hover:cursor-pointer hover:bg-slate-500 hover:text-white md:text-xl lg:text-3xl"
                onClick={handle.exit}
              >
                {iconNotFull()}
              </section>
            ) : (
              <section
                className="m-10 rounded-xl bg-white p-2 text-lg transition-all duration-500 hover:scale-120 hover:cursor-pointer hover:bg-slate-500 hover:text-white max-[500px]:hidden md:text-xl lg:text-3xl"
                onClick={handle.enter}
              >
                {iconFull()}
              </section>
            )}
          </div>
        </div>
      </FullScreen>
    </>
  );
}
