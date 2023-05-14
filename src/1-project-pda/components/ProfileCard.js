import React from 'react'
import '../styles/profilecard.css'

// For showing images in our local machine we need to import them specifically
// For external images direct links would work.

import AlexaImage from '../images/alexa.png';
import CortanaImage from '../images/cortana.png';
import SiriImage from '../images/siri.png';

let imgArr = [AlexaImage, CortanaImage, SiriImage]

const ProfileCard = (props) => {
  const { id, title, twitterProfile, description } = props;
  return (
    <div className='container' >
      <div className='image-container'>
        <img src={imgArr[id - 1]} alt="PDA" className='pda-image' />
      </div>
      <div>
        <h3>{title}</h3>
        <h5>{twitterProfile}</h5>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default ProfileCard;