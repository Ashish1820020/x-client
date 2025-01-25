"use client"
import Link from "next/link";
import React from "react";
import Image from "../Common/Image";
import NextImage from "next/image";
import { useCurrentUser } from "@/hooks/user";

const LeftBar = () => {
  
  const { user } = useCurrentUser();
  const leftBarLinks = [
    {
      id: 1,
      name: "Homepage",
      link: "/home",
      icon: "home.svg",
    },
    {
      id: 2,
      name: "Explore",
      link: "/home",
      icon: "explore.svg",
    },
    {
      id: 3,
      name: "Notification",
      link: "/home",
      icon: "notification.svg",
    },
    {
      id: 4,
      name: "Messages",
      link: "/home",
      icon: "message.svg",
    },
    {
      id: 5,
      name: "Bookmarks",
      link: "/home",
      icon: "bookmark.svg",
    },
    {
      id: 6,
      name: "Jobs",
      link: "/home",
      icon: "job.svg",
    },
    {
      id: 7,
      name: "Communities",
      link: "/home",
      icon: "community.svg",
    },
    {
      id: 8,
      name: "Premium",
      link: "/home",
      icon: "logo.svg",
    },
    {
      id: 9,
      name: "Profile",
      link: `/${user?.id ?? 1}`,
      icon: "profile.svg",
    },
    {
      id: 10,
      name: "More",
      link: "/home",
      icon: "more.svg",
    },
  ];

  return (
    <div className="h-screen sticky top-0 flex flex-col justify-between pt-2 pb-8">
      <div className="flex flex-col gap-4 text-lg items-center xxl:items-start">
        <div className="p-2 ml-2 hover:bg-gray-700 rounded-full w-fit cursor-pointer">
          <Image path="icons/logo.svg" h={24} w={24} alt="logo" />
        </div>
        <div className="flex flex-col gap-4">
          {leftBarLinks.map((link) => (
            <Link
              key={link.id}
              href={link.link}
              className="flex items-center gap-5 hover:bg-gray-700 rounded-full p-[12px] w-fit cursor-pointer"
            >
              <Image path={`/icons/${link.icon}`} h={26.25} w={26.25} alt="icon"/>
              <span className="text-[20px] hidden xxl:inline ">
                {link.name}
              </span>
            </Link>
          ))}

          {/* Button */}
          <Link href="/compose/post" className="hidden xxl:block text-black text-[15px] font-bold bg-white text-center w-[233px] h-[50px] rounded-3xl">
            Post
          </Link>
          <Link href="/compose/post" className="flex items-center justify-center xxl:hidden text-[15px] font-bold h-[52px] w-[52px] bg-white rounded-full">
            <Image
              path={`/icons/post.svg`}
              className="text-black xxl:hidden"
              h={24}
              w={24}
              alt="post-icon"
            />
          </Link>
        </div>
      </div>

      <div className="flex justify-between items-center xxl:w-[100%]">
        <div className="flex gap-2 items-center">
          <div className="w-10 h-10 relative rounded-full overflow-hidden">
            {/* <Image
              path={user.profileImageUrl}
              alt="profile-img"
              w={100}
              h={100}
              transform={true}
            /> */}
            {
              user?.profileImageUrl &&
              (<NextImage
                src={user?.profileImageUrl}
                alt="profile-img"
                width={100}
                height={100}
                priority
                className="rounded-full object-cover"
              />)
            }
          </div>

          <div className="hidden xxl:flex flex-col">
            <span className="text-bold">{user?.firstName}</span>
            <span className="text-textGray text-sm">@Ashish182002</span>
          </div>
        </div>
        <div className="hidden xxl:block font-bold cursor-pointer">...</div>
      </div>
    </div>
  );
};

export default LeftBar;
