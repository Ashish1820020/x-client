"use client";

import React, { useMemo } from "react";
import Image from "../Common/Image";
import { graphqlClient } from "@/clients/api";
import { followUserProfile, unfollowUserProfile } from "@/graphql/query/user";
import { useCurrentUser } from "@/hooks/user";
import { useQueryClient } from "@tanstack/react-query";

export type TFollowers = {
  id: string;
  firstName: string;
  lastName: string;
};

const BioIcons = ({
  id: profileId,
}: {
  id: string;
  followers: TFollowers[];
  following: TFollowers[];
}) => {
  const { user } = useCurrentUser();
  const queryClient = useQueryClient();

  const handleFollow = async () => {
    const { followUser } = await graphqlClient.request(followUserProfile, {
      userId: profileId,
    });
    if (followUser)
      queryClient.invalidateQueries({ queryKey: ["currentUser"] });
  };
  const handleUnfollow = async () => {
    const { unfollowUser } = await graphqlClient.request(unfollowUserProfile, {
      userId: profileId,
    });
    if (unfollowUser)
      queryClient.invalidateQueries({ queryKey: ["currentUser"] });
  };
  const follows = useMemo(
    () => user?.following?.find((currUser) => currUser.id === profileId),
    [user, profileId]
  );

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
      {!follows && !(user?.id === profileId) ? (
        <span
          className="py-2 px-4 bg-white text-black font-bold cursor-pointer rounded-full"
          onClick={handleFollow}
        >
          follow
        </span>
      ) : !(user?.id === profileId) ? (
        <div className="group relative inline-block w-max cursor-pointer">
          <span
            className="block py-2 px-4 text-white bg-transparent border-white border-2 font-bold opacity-100 group-hover:opacity-0 transition-opacity rounded-full"
            onClick={handleUnfollow}
          >
            Following
          </span>
          <span
            className="absolute top-0 left-0 flex items-center justify-center py-2 px-4 text-red-700 bg-red-200 border-red-700 border-2 font-bold opacity-0 group-hover:opacity-100 transition-opacity rounded-full"
            onClick={handleUnfollow}
          >
            Unfollow
          </span>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default BioIcons;
