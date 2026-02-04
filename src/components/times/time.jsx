'use client'
import { AppContext } from '@/app/page'
import React, { useEffect, useState, useContext } from 'react'

const Time = () => {
  const zone = [
    { key: 'th', country: 'th-TH', timeZone: 'Asia/Bangkok' },
    { key: 'en', country: 'en-US', timeZone: 'America/New_York' },
    { key: 'cn', country: 'zh-CN', timeZone: 'Asia/Shanghai' },
    { key: 'kr', country: 'ko-KR', timeZone: 'Asia/Seoul' },
    { key: 'jp', country: 'ja-JP', timeZone: 'Asia/Tokyo' },
  ]
  const { time, county } = useContext(AppContext)

  return (
    <div className="flex items-end justify-end">
      <section className="text-7xl font-bold text-foreground md:text-9xl">
        {zone.map((e) => {
          if (e.key === county) {
            return time.toLocaleTimeString(e.country, {
              timeZone: e.timeZone,
              hour: '2-digit',
              minute: '2-digit',
              hour12: false,
            })
          }
        })}
      </section>
      <section className="ml-4 flex justify-center pb-2 text-3xl font-bold text-muted-foreground md:text-4xl lg:text-6xl">
        {String(time.getSeconds()).padStart(2, '0')}
      </section>
    </div>
  )
}

export default Time
