import React from 'react'
import styled from "styled-components";
import HikeCard from './HikeCard'

const UserCard = ({user}) => {


  return (
    <Wrapper>
      <WrapperChild>
        <h3>Hey there, {user.username}!</h3>
        <h4>Here are the hikes that you've reviewed so far...</h4>
      </WrapperChild>
      <WrapperChild>
        {user.reviewed_hikes.map((hike) => <HikeCard key={hike.id} hike={hike}/>)}
      </WrapperChild>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  max-width: 1000px;
  margin: 40px auto;
  padding: 16px;
  display: flex;
  gap: 24px;
`;

const WrapperChild = styled.div`
  flex: 1;
`;

export default UserCard