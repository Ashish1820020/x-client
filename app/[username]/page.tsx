import BioIcons from '@/components/Profile/BioIcons';
import CoverAndProfileImage from '@/components/Profile/CoverAndProfileImage';
import ProfileHeader from '@/components/Profile/ProfileHeader';
import UserDetails from '@/components/Profile/UserDetails';
import React from 'react'

const ProfilePage = () => {
  return (
    <div>
        <ProfileHeader />
        <CoverAndProfileImage />
        <BioIcons />
        <UserDetails />
    </div>
  )
}

export default ProfilePage;