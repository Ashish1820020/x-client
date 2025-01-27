"use client"

import React from 'react'
import { CardHeader } from './Common/RightBar/CardHeader'
import UserCard from './Common/RightBar/UserCard'
import ShowMore from './Common/RightBar/ShowMore'
import { useCurrentUser } from '@/hooks/user'

const Recommendations = () => {
  const { user } = useCurrentUser();
  if (!user) return;
  return (
    <div className="flex flex-col rounded-2xl border border-borderGray">
      <CardHeader header="You might like" />
      {
        user.recomendedUsers.map((recomendedUser) => {
          return ( 
            <UserCard key={recomendedUser.id} 
            firstName={recomendedUser.firstName} 
            lastName={recomendedUser.lastName} 
            id={recomendedUser.id} 
            profileImageUrl={recomendedUser.profileImageUrl}
            />
          )
        })
      }
      <ShowMore redirect='/' />
    </div>
  )
}

export default Recommendations