'use client';
import React, { useState, useContext } from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import { DropdownMenuArrow } from '@radix-ui/react-dropdown-menu';
import { Button } from '../ui/button';
import { AppContext } from '@/app/page';

const Headers = () => {
  const { county, setCounty } = useContext(AppContext);

  return (
    <div className="fixed w-full bg-red-500">
      <div className="my-2 flex justify-end pr-10">
        <div className="">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">TimeZone</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="start"
              sideOffset={10}
              className={`border-0 bg-zinc-700 font-light text-white`}
            >
              <DropdownMenuLabel>TimeZone</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuRadioGroup value={county} onValueChange={setCounty}>
                <DropdownMenuRadioItem value="th">THAI</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="en">EN</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="cn">CHINA</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="kr">KOREA</DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
};

export default Headers;
