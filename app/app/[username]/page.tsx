
import { graphqlClient } from '@/clients/api';
import Posts from '@/components/Posts';
import BioIcons from '@/components/Profile/BioIcons';
import CoverAndProfileImage from '@/components/Profile/CoverAndProfileImage';
import ProfileHeader from '@/components/Profile/ProfileHeader';
import UserDetails from '@/components/Profile/UserDetails';
import { getUserDataById } from '@/graphql/query/user';
// import { Post } from '@/hooks/usePosts';
import React from 'react'

const ProfilePage = async ({
  params,
}: {
  params: Promise<{ username: string }>
}) => {
  const path = (await params).username;
  const {getUserProfileData: userData} = await graphqlClient.request(getUserDataById, {userId: path});
  
  if(!userData) return

  const author = {
    id: userData?.id ?? "",
    firstName: userData?.firstName ?? "",
    lastName: userData?.lastName ?? "",
    profileImageUrl: userData.profileImageUrl ?? null
  }

  return (
    <>
     <ProfileHeader />
      <CoverAndProfileImage coverImage={""} profileImage={userData?.profileImageUrl}/>
      <BioIcons id={path} followers={userData?.followers} following={userData?.following}/>
      <UserDetails name={userData?.firstName ?? "" + userData?.lastName ?? ""} id={path} followers={userData?.followers} following={userData?.following}/>
      <Posts posts={userData?.posts ?? []} author={author}/>
    </>
  )
}

export default ProfilePage;