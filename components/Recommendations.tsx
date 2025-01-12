import React from 'react'
import { CardHeader } from './Common/RightBar/CardHeader'
import UserCard from './Common/RightBar/UserCard'
import ShowMore from './Common/RightBar/ShowMore'

const Recommendations = () => {
  return (
    <div className="flex flex-col rounded-2xl border border-borderGray">
      <CardHeader header="You might like" />
      <UserCard />
      <UserCard />
      <UserCard />
      <UserCard />
      <ShowMore redirect='/' />
    </div>
  )
}

export default Recommendations