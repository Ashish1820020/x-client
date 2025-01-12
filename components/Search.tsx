import React from 'react'
import Image from './Common/Image'

const Search = () => {
  return (
    <div className='flex gap-1 items-center border border-borderGray rounded-full p-2 focus-within:border-iconBlue'>
        <Image path='icons/explore.svg' alt='search' w={16} h={16}/>
        <input type="search" placeholder='Search' name="" id="" className='bg-transparent outline-none placeholder:text-textGray'/>
    </div>
  )
}

export default Search