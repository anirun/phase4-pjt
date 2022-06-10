import React from 'react'
import HikeCard from './HikeCard'

const UserCard = ({user}) => {


  return (
    <div>
        Hi, {user.username}!

        Here are your reviewed hikes...

        {user.reviewed_hikes.map((hike) => <HikeCard key={hike.id} hike={hike}/>)}
        

    </div>
  )
}

export default UserCard