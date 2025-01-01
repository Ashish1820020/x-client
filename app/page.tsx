import { AiFillHome } from "react-icons/ai";
import { BsTwitterX } from "react-icons/bs";
import { CiMail } from "react-icons/ci";
import { GoSearch } from "react-icons/go";
import { IoNotificationsOutline } from "react-icons/io5";
import iconHome from "../public/icon-home.svg";
import iconExplore from "../public/icon-explore.svg";
import iconNotification from "../public/icon-notification.svg";
import iconMessage from "../public/icon-message.svg";
import iconGrok from "../public/icon-grok.svg";
import iconBookmarks from "../public/icon-bookmarks.svg";
import FeedCard from "@/components/FeedCard";

export default function Home() {

  const leftBarLinks = [
    {
      name: "Home",
      icon: <AiFillHome />,
      link: "/",
    },
    {
      name: "Explore",
      icon: <GoSearch />,
      link: "/explore",
    },
    {
      name: "Notifications",
      icon: <IoNotificationsOutline />,
      link: "/notifications",
    },
    {
      name: "Messages",
      icon: <CiMail />,
      link: "/messages",
    },
    // {
    //   name: "Profile",
    //   icon: <BsTwitterX className="text-4xl text-white" />,
    //   link: "/profile",
    // }, 
    // {
    //   name: "More",
    //   icon: <BsTwitterX className="text-4xl text-white" />,
    //   link: "/more",
    // }
  ];
  return (
    <div className="px-7">
      <div className="grid grid-cols-24 grid-flow-col h-screen w-full">
        <div className="col-span-9">
          <div className="flex flex-col justify-between items-end h-full mr-6">  
            <div className="left-top flex flex-col justify-between w-fit">
              <div className="p-2 ml-2 hover:bg-gray-700 rounded-full w-fit cursor-pointer">
                <BsTwitterX className="text-3xl text-white" />
              </div>
              <div className="left-nav-buttons mt-6">
                <nav>
                  <ul>
                    {
                      leftBarLinks.map((link) => (
                        <li key={link.name} className="flex items-center gap-5 hover:bg-gray-700 rounded-full px-5 py-[12px] pl-3 w-fit cursor-pointer">
                          <span className="text-[26.25px]">{link.icon}</span>
                          <span className="text-[20px]">{link.name}</span>
                        </li>
                      ))
                    }
                  </ul>
                </nav>
              </div>
            </div>
            <div className="left-bottom"></div>
          </div>
        </div>
        <main className="col-span-6 border-l-[0.2px] border-r-[0.2px] border-white max-w-[600px]">
            <FeedCard />
        </main>
        <div className="col-span-9">
        <div className="flex flex-col justify-between items-end h-full mr-6">  
            <div className="left-top flex flex-col justify-between w-fit">
              <div className="p-2 ml-2 hover:bg-gray-700 rounded-full w-fit cursor-pointer">
                <BsTwitterX className="text-3xl text-white" />
              </div>
              <div className="left-nav-buttons mt-6">
                <nav>
                  <ul>
                    {
                      leftBarLinks.map((link) => (
                        <li key={link.name} className="flex items-center gap-5 hover:bg-gray-700 rounded-full px-5 py-[12px] pl-3 w-fit cursor-pointer">
                          <span className="text-[26.25px]">{link.icon}</span>
                          <span className="text-[20px]">{link.name}</span>
                        </li>
                      ))
                    }
                  </ul>
                </nav>
              </div>
            </div>
            <div className="left-bottom"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
