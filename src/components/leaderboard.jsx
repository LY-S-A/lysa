// ./components/leaderboard.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Leaderboard () {

   const navigate = useNavigate();
    
    const handleClick = () => {
        navigate('/main-leaderboard');
    };

  
  return (
    <section className="leaderboard">
      <div className="container">
        <h2>Leaderboard</h2>
        <p>Big shoutout to our top contributors who went above and beyond for the project! 
 Your hard work, ideas, and dedication have not gone unnoticed — it’s time to celebrate with rewards! </p>
        
        <button
         onClick={handleClick} 
          >View Leaderboard</button>
      </div>
    </section>
  );
}

export default Leaderboard;
