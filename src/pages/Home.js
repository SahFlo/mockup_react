import React from "react";
import Card from "../components/Card";
import "./../styles/_home.scss";

const Home = () => {
  // Données fictives pour les cartes
  const cardData = [
    { id: 1, title: "CONTENT" },
    { id: 2, title: "CONTENT" },
    { id: 3, title: "CONTENT" },
    { id: 4, title: "CONTENT" },
    { id: 5, title: "CONTENT" }
  ];

  return (
    <div className="home-container">
      <div className="content-area">
        {cardData.map(card => (
          <Card key={card.id} title={card.title} />
        ))}
      </div>
      <div className="sidebar">
        <h2>SIDEBAR</h2>
        <p>Information supplémentaire ici</p>
      </div>
    </div>
  );
};

export default Home;