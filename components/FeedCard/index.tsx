import React from "react";
import Image from "../Common/Image";
import Link from "next/link";
import FeedImpressions from "../FeedImpressions";
import { imagekit } from "@/services/imagekit";
import Video from "../Common/Video";

interface FileDetailsResponse {
  width: number;
  height: number;
  filePath: string;
  url: string;
  fileType: string;
  customMetadata?: { sensitive: boolean };
}

const index = async () => {
  const fileId = "67836279432c476416f50339";

   // FETCH POST MEDIA
    const getFileDetails = async (
      fileId: string
    ): Promise<FileDetailsResponse> => {
      return new Promise((resolve, reject) => {
        imagekit.getFileDetails(fileId, function (error, result) {
          if (error) reject(error);
          else resolve(result as FileDetailsResponse);
        });
      });
    };

    const fileDetails = await getFileDetails(fileId);

    console.log(fileDetails);
  return (
    <div className="feed-card p-4 border-y-[1px] border-borderGray">
      <div className="flex items-center gap-2 text-sm text-textGray mb-2 from-bold">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
        >
          <path
            fill="#71767b"
            d="M4.75 3.79l4.603 4.3-1.706 1.82L6 8.38v7.37c0 .97.784 1.75 1.75 1.75H13V20H7.75c-2.347 0-4.25-1.9-4.25-4.25V8.38L1.853 9.91.147 8.09l4.603-4.3zm11.5 2.71H11V4h5.25c2.347 0 4.25 1.9 4.25 4.25v7.37l1.647-1.53 1.706 1.82-4.603 4.3-4.603-4.3 1.706-1.82L18 15.62V8.25c0-.97-.784-1.75-1.75-1.75z"
          />
        </svg>
        <span>Ashish reposted</span>
      </div>
      <div className="flex gap-2">
        <div className="feed-card-avatar relative w-10 h-10 rounded-full overflow-hidden">
          <Image
            path="/Profile Images/ashish.png"
            h={100}
            w={100}
            alt="avatar"
            transform={true}
          />
        </div>
        <div className="flex flex-col flex-1">
          <div className="flex gap-2 flex-wrap justify-between w-[100%]">
            <div className="flex flex-wrap gap-2">
              <h1 className="break-words overflow-ellipsis font-bold">
                Ashish Bhattacharyya
              </h1>
              <div className="flex gap-2 flex-wrap text-textGray">
                <span className="text-md">@ashish182002</span>
                <span className="">14h</span>
              </div>
            </div>

            <div className="">...</div>
          </div>

          <Link href={`/lamaWebDev/status/123`}>
            <p
              // className={`${type === "status" && "text-lg"}`}
              className="text-slate-100 my-1"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
              animi. Laborum commodi aliquam alias molestias odio, ab in,
              reprehenderit excepturi temporibus, ducimus necessitatibus fugiat
              iure nam voluptas soluta pariatur inventore.
            </p>
          </Link>
          {
            fileDetails && (
              fileDetails.fileType === "image"?
              <Image
                path={fileDetails.filePath}
                alt=""
                h={fileDetails.height}
                w={fileDetails.width}
                className={fileDetails.customMetadata?.sensitive ? "blur-lg" : ""}
              />
              :
              <Video
              path={fileDetails.filePath} 
              className={fileDetails.customMetadata?.sensitive ? "blur-lg" : ""}
              />


            )
          }
          <FeedImpressions />
        </div>
      </div>
    </div>
  );
};

export default index;

// import Image from 'next/image'
// import React, { FC } from 'react'
// import { HiOutlineDotsHorizontal } from 'react-icons/hi'
// import { IoMdCheckmarkCircle } from 'react-icons/io'
// import FeedImg from "../../public/feed-image.png";

// const FeedCard: FC = () => {
//   return (
//     <article>
//         <div className="grid grid-cols-12 p-2">
//             <div className="col-span-1">
//                 <div className="flex flex-col justify-between h-full items-start">
//                     <Image
//                     src="https://avatars.githubusercontent.com/u/91213559?s=400&u=f98efaa5962235fb2621daa881e85a2d3337379a&v=4"
//                     alt="profile"
//                     width={40}
//                     height={40}
//                     className="rounded-full" />
//                 </div>
//             </div>
//             <div className="col-span-11">
//              <div className='flex flex-col justify-between max-w-[520px] gap-1'>
//              <div className="flex justify-between items-center w-full">
//                 <span className="text-sm font-bold flex items-center gap-1">
//                     <h5>Ashish Bhattacharyya</h5>
//                     <span className='badge'><IoMdCheckmarkCircle /></span>
//                     <span className='key text-gray-400'>@ashishbhattacharyya</span>
//                 </span>
//                 <span className='text-gray-400'>
//                     <div className='rounded-full cursor-pointer relative'>
//                         <HiOutlineDotsHorizontal className='hover:text-[#2e7bc8]' />
//                         <div className="absolute -top-1 -left-1 w-6 h-6 inset-0 bg-opacity-50 bg-[#1d9bf01a]  rounded-full flex items-center justify-center opacity-0 hover:opacity-100">
//                         {/* <p className="text-white text-lg">Hovered Content</p> */}
//                         </div>
//                     </div>
//                 {/* <HiOutlineDotsHorizontal /> */}
//                 </span>
//                 </div>
//                 <p className='text-[#e7e9ea] font-roboto  text-sm text-left overflow-hidden'>
//                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                     Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
//                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos
//                 </p>
//                 <div className='flex justify-center  items-center w-full py-2 rounded-md'>
//                     <Image src={FeedImg} className="border-2 border-white rounded-md w-full h-full" alt="feed" width={400} height={400} />
//                 </div>
//              </div>
//             </div>
//         </div>
//     </article>
//   )
// }

// export default FeedCard
