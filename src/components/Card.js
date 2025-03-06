import React, { useState } from "react";
import "./../styles/_card.scss";

const Card = ({ title }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  
  return (
    <div className="card">
      <div className="card-header">
        <button 
          className={`favorite-btn ${isFavorite ? "active" : ""}`} 
          onClick={() => setIsFavorite(!isFavorite)}
        >
          {isFavorite ? "♥" : "♡"}
        </button>
      </div>
      <div className="card-content">
        <h3>{title}</h3>
      </div>
    </div>
  );
};

export default Card;