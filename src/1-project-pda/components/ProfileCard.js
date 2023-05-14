import React from 'react'
import '../styles/profilecard.css'


const ProfileCard = (props) => {
  const { src, title, twitterProfile, description } = props;
  return (
    <div className='container' >
      <div>
        <img src={src} alt="PDA" className='pda-image' />
        <h3>{title}</h3>
        <h5>{twitterProfile}</h5>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default ProfileCard;