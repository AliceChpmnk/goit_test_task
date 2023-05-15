import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectUsers } from 'redux/users/userSelectors';
import { BackgroundImg, FollowBtn, Logo, UserAvatar, UserCard, UserCardsList } from './UserCard.styled';
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

function handleMouseMove(event) {
  const { left, top, width, height } = event.target.getBoundingClientRect();
  const mouseX = event.clientX - left;
  const mouseY = event.clientY - top;
  const centerX = width / 2;
  const centerY = height / 2;
  const deltaX = (mouseX - centerX) / width;
  const deltaY = (mouseY - centerY) / height;
  event.target.style.transform = `translate(${deltaX * 5}px, ${deltaY * 5}px)`;
}

function handleMouseLeave(event) {
  event.target.style.transform = '';
}
  
  return (
    <UserCardsList>
          {users.map(({ id, avatar, followers, tweets, following }) => (
              <UserCard key={id} >
                  <Logo alt='logo' width='76px'/>
                  <BackgroundImg src={Background} alt="background" width='308px' onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} />
                  <UserAvatar>
                      <img src={avatar} alt="user avatar" width='80px'/>
                  </UserAvatar>
                  <p>tweets: {tweets}</p>
                  <p>followers: {followers}</p>
                  <FollowBtn
                    onClick={following ? () => handleUnfollowClick(id) : () => handleFollowClick(id)}
                    type={following ? 'following' : 'follow'}
                  >
                    {following ? 'FOLLOWING' : 'FOLLOW'}
                  </FollowBtn>
            </UserCard>
      ))}
    </UserCardsList>
  )
}
