'use client';
import React, { createContext, useState, useEffect } from 'react';
import Home from './date/page';
import Headers from '@/components/headers/headers';

export const AppContext = createContext(null);

const page = () => {
  const [active, setActive] = useState(false);
  const [time, setTime] = useState(new Date());
  const [county, setCounty] = useState('th');

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <AppContext.Provider value={{ active, setActive, time , county,  setCounty }}>
        <Headers />
        <Home />
      </AppContext.Provider>
    </>
  );
};

export default page;
