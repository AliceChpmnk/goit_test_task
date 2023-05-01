import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectUsers } from 'redux/users/userSelectors';
import { BackgroundImg, Divider, FollowBtn, Logo, UserAvatar, UserCard, UserCardsList } from './UserCard.styled';
import Background from '../../images/background.png';
import { followUser, unfollowUser } from 'redux/users/userSlice';

export default function UserCards() {
    const users = useSelector(selectUsers);
      const dispatch = useDispatch();

  const handleFollowClick = (userId) => {
    dispatch(followUser({ userId }));
  };

  const handleUnfollowClick = (userId) => {
    dispatch(unfollowUser({ userId }));
  };
    
  return (
    <UserCardsList>
          {users.map(({ id, avatar, followers, tweets, following }) => (
              <UserCard key={id}>
                  <Logo />
                  <BackgroundImg src={Background} alt="" />
                  <Divider />
                  <UserAvatar>
                      <img src={avatar} alt="user avatar" />
                  </UserAvatar>
                  <p>tweets: {tweets}</p>
                  <p>followers: {followers}</p>
                  {following ? <FollowBtn onClick={() => handleUnfollowClick(id)}>FOLLOWING</FollowBtn> :
                  <FollowBtn onClick={() => handleFollowClick(id)}>FOLLOW</FollowBtn>}
            </UserCard>
      ))}
    </UserCardsList>
  )
}
