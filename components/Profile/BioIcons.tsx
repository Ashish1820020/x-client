import React from "react";
import Image from "../Common/Image";

const BioIcons = () => {
  return (
    <div className="flex w-full items-center justify-end gap-2 p-2">
      <div className="w-9 h-9 flex items-center justify-center rounded-full border-[1px] border-gray-500 cursor-pointer">
        <Image path="icons/more.svg" alt="more" w={20} h={20} />
      </div>
      <div className="w-9 h-9 flex items-center justify-center rounded-full border-[1px] border-gray-500 cursor-pointer">
        <Image path="icons/explore.svg" alt="more" w={20} h={20} />
      </div>
      <div className="w-9 h-9 flex items-center justify-center rounded-full border-[1px] border-gray-500 cursor-pointer">
        <Image path="icons/message.svg" alt="more" w={20} h={20} />
      </div>
      <button className="py-2 px-4 bg-white text-black font-bold rounded-full">
        Follow
      </button>
    </div>
  );
};

export default BioIcons;
