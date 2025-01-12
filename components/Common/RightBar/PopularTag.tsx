import React from "react";
type IPopularTag = {
    category: string,
    tag: string,
    impression?: string,
}
const PopularTag = ({category, tag, impression}: IPopularTag) => {
  return (
    <div className="hover:bg-backgroundBlack">
      <div className="flex justify-between px-4 py-2 cursor-pointer">
        <div className="flex flex-col justify-between">
          <span className="text-textGray text-sm">{category}</span>
          <h2 className="font-bold text-textGrayLight">{tag}</h2>
          <span className="text-textGray text-sm">{impression}</span>
        </div>
        <div className="font-bold cursor-pointer">...</div>
      </div>
    </div>
  );
};

export default PopularTag;
