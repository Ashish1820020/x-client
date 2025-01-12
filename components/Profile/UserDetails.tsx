import React from "react";
import Image from "../Common/Image";

const UserDetails = () => {
  return (
    <div className="p-4 flex flex-col gap-2">
      <div className="">
        <h1 className="text-2xl font-bold">Ashish</h1>
        <span className="text-textGray text-sm">@ashish182002</span>
      </div>
      <p>Student</p>
      <div className="flex gap-4 text-textGray text-[15px]">
        {/* <div className="flex items-center gap-2">
          <Image path="icons/userLocation.svg" alt="location" w={20} h={20} />
          <span>India</span>
        </div> */}
        <div className="flex items-center gap-1">
          <Image path="icons/date.svg" alt="date" w={20} h={20} />
          <span>Joined May 2021</span>
        </div>
      </div>
      <div className="flex gap-4">
        <div className="flex items-center gap-2">
          <span className="font-bold">313</span>
          <span className="text-textGray text-[15px]">Followers</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-bold">29</span>
          <span className="text-textGray text-[15px]">Followings</span>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
