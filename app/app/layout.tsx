import LeftBar from '@/components/HomePage/LeftBar'
import RightBar from '@/components/HomePage/RightBar'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import React from 'react'


export default function Layout({
    children
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    <div className="max-w-screen-md lg:max-w-screen-lg mx-auto xl:max-w-screen-xl xxl:max-w-screen-xxl flex justify-between">
    <div className="px-2 xsm:px-4 xxl:px-8">
      <LeftBar />
    </div>

    <div className="flex-1 lg:min-w-[600px] border-x-[1px] border-borderGray">
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </div>
    <div className="hidden lg:flex ml-4 md:ml-8 flex-1">
      <RightBar />
    </div>
  </div>
  )
}