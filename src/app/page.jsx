'use client';
import React, { createContext, useState, useEffect } from 'react';
import Home from '../components/interface/page';
import Headers from '@/components/headers/headers';
import SwitchBtn from '@/components/switch/switchBtn';
import { Switch } from '@/components/ui/switch';

export const AppContext = createContext(null);

const page = () => {
  const [active, setActive] = useState(false);
  const [time, setTime] = useState(new Date());
  const [county, setCounty] = useState('th');
  const [toggleFull, setToggleFull] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <AppContext.Provider
        value={{
          active,
          setActive,
          time,
          county,
          setCounty,
          setToggleFull,
          toggleFull,
        }}
      >
        <Headers />
        <Home />
      </AppContext.Provider>
    </>
  );
};

export default page;
