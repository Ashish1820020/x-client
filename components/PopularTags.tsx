import React from "react";
import Image from "./Common/Image";
import PopularTag from "./Common/RightBar/PopularTag";
import { CardHeader } from "./Common/RightBar/CardHeader";
import ShowMore from "./Common/RightBar/ShowMore";

const PopularTags = () => {
  return (
    <div className="flex flex-col rounded-2xl border border-borderGray">
      <CardHeader header="What's Happening" />

      <div className="hover:bg-backgroundBlack px-4 py-4">
        <div className="flex gap-4 px-4 py-2 cursor-pointer">
          <div className="relative h-20 w-20 rounded-xxl overflow-hidden">
            <Image
              path="posts/1.jpg"
              alt="event"
              w={120}
              h={120}
              transform={true}
            />
          </div>
          <div className="flex-1">
            <h2 className="font-bold text-textGrayLight">Ghost attack</h2>
            <span className="text-sm text-textGray">Kolkata</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <PopularTag
          category="Trending in India"
          tag="ISRO"
          impression="100k posts"
        />
        <PopularTag
          category="Sports . Trending"
          tag="Mbappe"
          impression="20k posts"
        />
        <PopularTag
          category="Sports . Trending"
          tag="Mbappe"
          impression="20k posts"
        />
      </div>
      <ShowMore redirect="/" />
    </div>
  );
};

export default PopularTags;
