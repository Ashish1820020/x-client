import Link from "next/link";
import React from "react";

const ShowMore = ({redirect}: {redirect: string}) => {
  return (
    <div className="hover:bg-backgroundBlack px-4 py-4 rounded-bl-xl rounded-br-xl">
        <Link href={redirect} className="text-iconBlue">
        Show more
        </Link>
    </div>
  );
};

export default ShowMore;
