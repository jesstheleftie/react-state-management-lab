// src/App.jsx
import "./App.css";
import { useState } from "react";

const App = () => {
  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(100);
  const [strength, setStrength] = useState(0);
  const [agility, setAgility] = useState(0);
  const [zombieFighters, setZombieFighters] = useState([
    {
      name: "Survivor",
      price: 12,
      strength: 6,
      agility: 4,
      img: "https://via.placeholder.com/150/92c952",
    },
    {
      name: "Scavenger",
      price: 10,
      strength: 5,
      agility: 5,
      img: "https://via.placeholder.com/150/771796",
    },
    {
      name: "Shadow",
      price: 18,
      strength: 7,
      agility: 8,
      img: "https://via.placeholder.com/150/24f355",
    },
    {
      name: "Tracker",
      price: 14,
      strength: 7,
      agility: 6,
      img: "https://via.placeholder.com/150/d32776",
    },
    {
      name: "Sharpshooter",
      price: 20,
      strength: 6,
      agility: 8,
      img: "https://via.placeholder.com/150/1ee8a4",
    },
    {
      name: "Medic",
      price: 15,
      strength: 5,
      agility: 7,
      img: "https://via.placeholder.com/150/66b7d2",
    },
    {
      name: "Engineer",
      price: 16,
      strength: 6,
      agility: 5,
      img: "https://via.placeholder.com/150/56acb2",
    },
    {
      name: "Brawler",
      price: 11,
      strength: 8,
      agility: 3,
      img: "https://via.placeholder.com/150/8985dc",
    },
    {
      name: "Infiltrator",
      price: 17,
      strength: 5,
      agility: 9,
      img: "https://via.placeholder.com/150/392537",
    },
    {
      name: "Leader",
      price: 22,
      strength: 7,
      agility: 6,
      img: "https://via.placeholder.com/150/602b9e",
    },
  ]);
  const addToTeam = (fighter) => {
    if (money >= fighter.price) {
      setTeam([...team, fighter]);
      setMoney(money - fighter.price);
      setStrength(strength + fighter.strength);
      setAgility(agility + fighter.agility);
      setZombieFighters(zombieFighters.filter((eachZombieFighter) => eachZombieFighter.name !== fighter.name));
    } else {
      alert("Not enough money to add this fighter");
    }
  };

  const removeFromTeam = (fighter) => {
    setTeam(team.filter((eachTeam) => eachTeam.name !== fighter.name));
    setMoney(money + fighter.price);
    setStrength(strength - fighter.strength);
    setAgility(agility - fighter.agility);
    setZombieFighters([...zombieFighters, fighter]);
  };

  return (
    <div>
      <h2>Zombie Fighters</h2>
      <div>
        <h3>Money:{money}</h3>
        <h3>Team Strength: {strength}</h3>
        <h3>Team Agility: {agility}</h3>
        <h3>Team</h3>
        {team.length <= 0 ? (
          <h3>Pick some team members!</h3>
        ) : (
          <ul className="team-list">
            {team.map((fighter, index) => (
              <li key={index} className="team-members">
                <img src={fighter.img} alt={`${fighter.name} image`} />
                <h3>{fighter.name}</h3>
                <p>Price: {fighter.price}</p>
                <p>Strength: {fighter.strength}</p>
                <p>Agility: {fighter.agility}</p>
                <button onClick={() => removeFromTeam(fighter)}>Remove</button>
              </li>
            ))}
          </ul>
        )}
      </div>
      <h3>Fighters</h3>
      <ul className="zombie-fighter-list">
        {zombieFighters.map((fighter, index) => (
          <li key={index} className="zombie-fighter-item">
            <img src={fighter.img} alt={`${fighter.name} image`} />
            <h3>{fighter.name}</h3>
            <p>Price: {fighter.price}</p>
            <p>Strength: {fighter.strength}</p>
            <p>Agility: {fighter.agility}</p>
            <button onClick={() => addToTeam(fighter)}>Add</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
