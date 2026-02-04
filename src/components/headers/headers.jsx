'use client'
import React, { useState, useContext } from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu'
import { DropdownMenuArrow } from '@radix-ui/react-dropdown-menu'
import { Button } from '../ui/button'
import { AppContext } from '@/app/page'
import { ModeToggle } from '../ui/mode-toggle'

const Headers = () => {
  const { county, setCounty } = useContext(AppContext)

  return (
    <div className="fixed w-full bg-transparent">
      <div className="my-2 flex justify-end pr-10 gap-4 items-center">
        <ModeToggle />
        <div className="">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <code className="bg-secondary text-secondary-foreground hover:bg-accent hover:text-accent-foreground rounded-sm px-2 py-1 hover:cursor-pointer transition-colors">
                TimeZone
              </code>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="start"
              sideOffset={10}
              className="bg-popover text-popover-foreground border-border"
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
  )
}

export default Headers
