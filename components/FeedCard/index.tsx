import React, { FC } from "react";
import Image from "../Common/Image";
import Link from "next/link";
import FeedImpressions from "../FeedImpressions";
import Video from "../Common/Video";
import useFileDetails from "@/hooks/useFileDetails";
import { Post } from "@/hooks/usePosts";

export interface FileDetailsResponse {
  width: number;
  height: number;
  filePath: string;
  url: string;
  fileType: string;
  customMetadata?: { sensitive: boolean };
}

const FeedCard:FC<Post> = ({id, content, imageUrl, imageId, author}) => {
  const { fileData: fileDetails } = useFileDetails(imageId);

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
                {author.firstName} {author.lastName}
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
              {content}
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
                className={fileDetails.customMetadata?.sensitive ? "blur-lg cursor-pointer rounded-lg" : "cursor-pointer rounded-lg"}
              />
              :
              <Video
              path={fileDetails.filePath} 
              className={fileDetails.customMetadata?.sensitive ? "blur-lg cursor-pointer rounded-lg" : "cursor-pointer rounded-lg"}
              />


            )
          }
          <FeedImpressions />
        </div>
      </div>
    </div>
  );
};

export default FeedCard;