import Image from 'next/image'
import React, { FC } from 'react'
import { HiOutlineDotsHorizontal } from 'react-icons/hi'
import { IoMdCheckmarkCircle } from 'react-icons/io'
import FeedImg from "../../public/feed-image.png";

const FeedCard: FC = () => {
  return (
    <article>
        <div className="grid grid-cols-12 p-2">
            <div className="col-span-1">
                <div className="flex flex-col justify-between h-full items-start">
                    <Image 
                    src="https://avatars.githubusercontent.com/u/91213559?s=400&u=f98efaa5962235fb2621daa881e85a2d3337379a&v=4" 
                    alt="profile" 
                    width={40} 
                    height={40} 
                    className="rounded-full" />
                </div>
            </div>
            <div className="col-span-11">
             <div className='flex flex-col justify-between max-w-[520px] gap-1'>
             <div className="flex justify-between items-center w-full">
                <span className="text-sm font-bold flex items-center gap-1">
                    <h5>Ashish Bhattacharyya</h5>
                    <span className='badge'><IoMdCheckmarkCircle /></span>
                    <span className='key text-gray-400'>@ashishbhattacharyya</span>
                </span>
                <span className='text-gray-400'>
                    <div className='rounded-full cursor-pointer relative'>
                        <HiOutlineDotsHorizontal className='hover:text-[#2e7bc8]' />
                        <div className="absolute -top-1 -left-1 w-6 h-6 inset-0 bg-opacity-50 bg-[#1d9bf01a]  rounded-full flex items-center justify-center opacity-0 hover:opacity-100">
                        {/* <p className="text-white text-lg">Hovered Content</p> */}
                        </div>
                    </div>
                {/* <HiOutlineDotsHorizontal /> */}
                </span>
                </div>
                <p className='text-[#e7e9ea] font-roboto  text-sm text-left overflow-hidden'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. 
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos
                </p>
                <div className='flex justify-center  items-center w-full py-2 rounded-md'>
                    <Image src={FeedImg} className="border-2 border-white rounded-md w-full h-full" alt="feed" width={400} height={400} />
                </div>
             </div>
            </div>
        </div>
    </article>
  )
}

export default FeedCard