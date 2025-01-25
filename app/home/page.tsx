import Feeds from '@/components/Feeds'
import Share from '@/components/Share'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className="center">
        <div className="flex gap-2 justify-between px-4 py-4 text-textGray font-bold border-b-[1px] border-black">
            <Link href={"/"} className='flex items-center pb-3 border-b-4 border-iconBlue text-white'>For you</Link>
            <Link href={"/"}>following</Link>
            <Link href={"/"}>react</Link>
            <Link href={"/"}>node</Link>
            <Link href={"/"}>fast api</Link>
        </div>
        <Share />
        <Feeds />
    </div>
  )
}

export default page