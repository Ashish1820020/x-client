import React, { useMemo } from "react";
import Image from "../Image";
import { graphqlClient } from "@/clients/api";
import { followUserProfile, unfollowUserProfile } from "@/graphql/query/user";
import { useCurrentUser } from "@/hooks/user";
import { useQueryClient } from "@tanstack/react-query";
import Link from "next/link";

export type TUserCard = {
  firstName: string;
  lastName?: string;
  id: string;
  profileImageUrl?: string | null;
};
const UserCard = ({
  firstName,
  lastName,
  id: profileId,
  profileImageUrl,
}: TUserCard) => {
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
    <div className="cursor-pointer hover:bg-backgroundBlack px-4 py-4">
      <div className="flex justify-between items-center gap-2 xxl:w-[100%]">
        <div className="flex gap-2 items-center">
          <div className="w-10 h-10 relative rounded-full overflow-hidden">
            {profileImageUrl && (
              <Image
                path={profileImageUrl}
                alt="lama dev"
                w={100}
                h={100}
                transform={true}
              />
            )}
          </div>

          <div className="flex flex-col">
            <Link href={`/app/${profileId}`} className="text-bold">
              {firstName} {lastName}
            </Link>
            <span className="text-textGray text-sm">
              @{profileId.split("-")[0]}
            </span>
          </div>
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
    </div>
  );
};

export default UserCard;
