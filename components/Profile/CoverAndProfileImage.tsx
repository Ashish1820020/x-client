"use client"
import { useCurrentUser } from "@/hooks/user";
import Image from "next/image";
import React, { FC } from "react";
type ICoverImageProps = {coverImage: string, profileImage: string}

const CoverAndProfileImage:FC<ICoverImageProps> = ({coverImage, profileImage}) => {
  
  return (
    <div className="">
      <div className="relative w-full">
        <div className="w-full aspect-[3/1] relative bg-white">
          {/* <Image path="Cover Image/banner1.png" h={200} w={600} alt='cover-img' transform={true}/> */}
          {/* <Image src={user?.profileImageUrl ?? ""} height={200} width={600} alt='cover-img' className="cursor-pointer"/> */}
        </div>
        <div className="w-1/5 aspect-square absolute left-4 -translate-y-1/2 rounded-full overflow-hidden border-4 border-black bg-gray-300">
          {/* <Image path="Profile Images/ashish.png" h={100} w={100} alt='cover-img' transform={true}/> */}
          <Image src={profileImage} height={200} width={200} alt='cover-img' className="object-cover cursor-pointer"/>
        </div>
      </div>
    </div>
  );
};

export default CoverAndProfileImage;
