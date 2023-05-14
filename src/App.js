import React from 'react';
import ProfileCard from './1-project-pda/components/ProfileCard';
import data from './1-project-pda/data/data';
import AlexaImage from './1-project-pda/images/alexa.png'
import CortanaImage from './1-project-pda/images/cortana.png'
import SiriImage from './1-project-pda/images/siri.png'

function App() {
  // For showing images in our local machine we need to import them specifically
  // For external images direct links would work.
  return (
    <>
      <div style={{ backgroundColor: "lightgreen", padding: "10px" }}>Personal Digital Assistants</div>
      {data.map((card) => {
        let imageSrc = "";
        if (card.id === 1) {
          imageSrc = AlexaImage
        } else if (card.id === 2) {
          imageSrc = CortanaImage
        }
        else if (card.id === 3) {
          imageSrc = SiriImage;
        }
        return <ProfileCard src={imageSrc} title={card.title} twitterProfile={card.twitterProfile} description={card.description} />
      })}
    </>
  )
}

export default App;
