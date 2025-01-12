import React from "react";
import Image from "../Common/Image";

const ProfileHeader = () => {
  return (
    <div className="sticky top-0 flex gap-8 px-4 py-2 backdrop-blur-md bg-[#00000084] z-10">
      <Image
        path="icons/back.svg"
        h={24}
        w={24}
        alt="back-icon"
        className="cursor-pointer rounded-full hover:bg-backgroundBlack"
      />
      <div className="flex flex-col">
        <h1 className="font-bold text-xl">Ashish</h1>
        <span className="text-textGray text-sm">4,448 posts</span>
      </div>
    </div>
  );
};

export default ProfileHeader;
