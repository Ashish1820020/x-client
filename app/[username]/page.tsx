
import { graphqlClient } from '@/clients/api';
import Posts from '@/components/Posts';
import BioIcons from '@/components/Profile/BioIcons';
import CoverAndProfileImage from '@/components/Profile/CoverAndProfileImage';
import ProfileHeader from '@/components/Profile/ProfileHeader';
import UserDetails from '@/components/Profile/UserDetails';
import { getUserDataById } from '@/graphql/query/user';
import { Post } from '@/hooks/usePosts';
import React from 'react'

const ProfilePage = async ({
  params,
}: {
  params: Promise<{ username: string }>
}) => {
  const path = (await params).username;
  const {getUserProfileData: userData} = await graphqlClient.request(getUserDataById, {userId: path});
  return (
    <>
     <ProfileHeader />
      <CoverAndProfileImage coverImage={""} profileImage={userData?.profileImageUrl ?? ""}/>
      <BioIcons />
      <UserDetails name={userData?.firstName ?? "" + userData?.lastName ?? ""} id={path}/>
      {/* <Posts posts={userData?.posts ?? []} author={}/> */}
    </>
  )
}

export default ProfilePage;