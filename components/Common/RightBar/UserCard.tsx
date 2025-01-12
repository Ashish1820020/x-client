import React from "react";
import Image from "../Image";

const UserCard = () => {
  return (
    <div className="cursor-pointer hover:bg-backgroundBlack px-4 py-4">
      <div className="flex justify-between items-center gap-2 xxl:w-[100%]">
        <div className="flex gap-2 items-center">
          <div className="w-10 h-10 relative rounded-full overflow-hidden">
            <Image
              path="/feed-image.png"
              alt="lama dev"
              w={100}
              h={100}
              transform={true}
            />
          </div>

          <div className="flex flex-col">
            <span className="text-bold">Ashish</span>
            <span className="text-textGray text-sm">@Ashish182002</span>
          </div>
        </div>
        <button className="font-semibold bg-white rounded-full px-3 py-1 text-black cursor-pointer">
          Follow
        </button>
      </div>
    </div>
  );
};

export default UserCard;
