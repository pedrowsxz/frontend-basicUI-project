import React from 'react';
import './ProfileCard.css';

function ProfileCard({ user }) {
  return (
    <div className="user-profile">
      <img src={user.avatar_url} alt={user.name || user.login} className="user-avatar" />
      <div className="user-info">
        <h2 className="user-name">{user.name || user.login}</h2>
        {user.bio && <p className="user-bio">{user.bio}</p>}
        {!user.bio && <p className="user-bio">No bio available</p>}
      </div>
    </div>
  );
}

export default ProfileCard;