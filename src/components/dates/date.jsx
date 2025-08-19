'use client';
import { AppContext } from '@/app/page';
import React, { useEffect, useState , useContext } from 'react';

const DateDay = () => {
  const weekday = ['Sun', 'Mon', 'Tues', 'Wednes', 'Thurs', 'Fri', 'Sat '];
  const month = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  const {time} = useContext(AppContext);

  return (
    <div className="text-3xl text-white">
      <div className="text-lg text-zinc-500">
        {weekday[time.getDay()]} | {month[time.getMonth()]}
      </div>
      {time.getDate()} / {time.getMonth() + 1} / {time.getFullYear()}
    </div>
  );
};

export default DateDay;
