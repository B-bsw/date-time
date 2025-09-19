'use client';
import Date from '@/components/dates/date';
import Time from '@/components/times/time';
import Image from 'next/image';
import { useEffect, useState, useContext } from 'react';
import { FullScreen, useFullScreenHandle } from 'react-full-screen';
import Headers from '@/components/headers/headers';
import { AppContext } from '../../app/page';
import { Switch } from '@radix-ui/react-switch';
import { Label } from '@radix-ui/react-label';
import SwitchBtn from '../switch/switchBtn';

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

export default function Home() {
  const { active, setActive, toggleFull } = useContext(AppContext);
  const handle = useFullScreenHandle();
  const [mouseMove, setMouseMove] = useState(false);

  const time = () =>{
    setTimeout(() => {
      setMouseMove(true)
    }, 5000);
    setMouseMove(false)
  }

  useEffect(() => {
    if (handle.active) {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [handle]);


  useEffect(() => {
    const handleKey = (event) => {
      if (event.key.toLowerCase() === 'f') { 
        if(!active){
          setActive(false)
          handle.enter()
        }
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => {
      window.removeEventListener('keydown', handleKey);
    };
  }, [active]);

  useEffect(() => {
    const handleMouseMove = (event) => {
      time()
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  

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
                className={`${mouseMove ? 'opacity-0 scale-0' : 'hover:scale-120 hover:cursor-pointer hover:bg-slate-500 hover:text-white'} fixed bottom-50 m-10 rounded-xl bg-white p-2 text-lg transition-all duration-500 md:text-xl lg:text-3xl`}
                onClick={handle.exit}
              >
                {iconNotFull()}
              </section>
            ) : (
              <section
                className={`${mouseMove ? 'opacity-0 scale-0' : 'hover:scale-120 hover:cursor-pointer hover:bg-slate-500 hover:text-white'} fixed bottom-50 m-10 rounded-xl bg-white p-2 text-lg transition-all duration-500  max-[500px]:hidden md:text-xl lg:text-3xl`}
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
