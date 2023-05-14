import React from 'react';
import ProfileCard from './1-project-pda/components/ProfileCard';
import data from './1-project-pda/data/data';


function App() {

  return (
    <>
      <div style={{ backgroundColor: "lightgreen", padding: "10px" }}>Personal Digital Assistants</div>
      {data.map((card) => {
        return <ProfileCard id={card.id} title={card.title} twitterProfile={card.twitterProfile} description={card.description} />
      })}
    </>
  )
}

export default App;
