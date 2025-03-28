// src/App.jsx

import { useState } from "react";

const App = () => {
  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(100);
  const [zombieFighters, setZombieFighters] = useState([
    {
      id: 1,
      name: 'Survivor',
      price: 12,
      strength: 6,
      agility: 4,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/0c2d6b.png',
    },
    {
      id: 2,
      name: 'Scavenger',
      price: 10,
      strength: 5,
      agility: 5,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/033a16.png',
    },
    {
      id: 3,
      name: 'Shadow',
      price: 18,
      strength: 7,
      agility: 8,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/262c36.png',
    },
    {
      id: 4,
      name: 'Tracker',
      price: 14,
      strength: 7,
      agility: 6,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/3c1e70.png',
    },
    {
      id: 5,
      name: 'Sharpshooter',
      price: 20,
      strength: 6,
      agility: 8,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/4b2900.png',
    },
    {
      id: 6,
      name: 'Medic',
      price: 15,
      strength: 5,
      agility: 7,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5a1e02.png',
    },
    {
      id: 7,
      name: 'Engineer',
      price: 16,
      strength: 6,
      agility: 5,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5e103e.png',
    },
    {
      id: 8,
      name: 'Brawler',
      price: 11,
      strength: 8,
      agility: 3,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/67060c.png',
    },
    {
      id: 9,
      name: 'Infiltrator',
      price: 17,
      strength: 5,
      agility: 9,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/ac3220.png',
    },
    {
      id: 10,
      name: 'Leader',
      price: 22,
      strength: 7,
      agility: 6,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/e41f26.png',
    },
  ]) 

 
  const handleAddFighter = (fighter) => {
    const deleteFighters = () => {
      const updatedFighters = zombieFighters.filter(zombieFighter => zombieFighter.id !== fighter.id);

      //console.log(updatedFighters)
      setZombieFighters(updatedFighters);
      }

      let newMoneyAmt = money - fighter.price;

      const checkMoney = () => {
        if(newMoneyAmt >= 0){
          return true;
        }else{
          console.log("Not enough money")
          return false;
        } 
    }

      //console.log(fighter);
      if(checkMoney() === true){
        const newFighters = [...team, fighter];
        setTeam(newFighters);
        deleteFighters();
        setMoney(newMoneyAmt);
      }else{
        return;
      }
  }

  const handleRemoveFighter = (fighter) => {
    const undoAdd = () => {
      const rejectFighters = team.filter((zombieFighter) => zombieFighter.id !== fighter.id);
      const refund = money + fighter.price;
      const updatedZombieFighters = [...zombieFighters, fighter];

      setMoney(refund);
      setTeam(rejectFighters);
      setZombieFighters(updatedZombieFighters);
    }
    undoAdd();
    // console.log(zombieFighters)
    // console.log(team);
  }

  function calculateStrength(){
    let teamStrength = 0;
    team.forEach((member) => {
      teamStrength += member.strength;
    })
    return teamStrength;
  }

  function calculateAgility(){
    let teamAgility = 0;
    team.forEach((member) => {
      teamAgility += member.agility;
    })
    return teamAgility;
  }
  
  return (
    <>
      <h1>Choose Your Fighter</h1>
      <ul>
        {zombieFighters.map((fighter) => (
          <li key={fighter.id}>
            <img src={fighter.img} />
            <p>Name: {fighter.name}</p>
            <p>Price: {fighter.price}</p>
            <p>Strength: {fighter.strength}</p>
            <p>Agility: {fighter.agility}</p>
            <button onClick={ () => handleAddFighter(fighter) }>Add</button>
          </li>
        ))}
      </ul>
      <p>Money: {money}</p>
      <h2>{team.length === 0 ? "Pick some team members!" : "Your Team"}</h2>
      <ul>
        {team.map((fighter) => (
          <li key={fighter.id}>
            <img src={fighter.img} />
            <p>Name: {fighter.name}</p>
            <p>Price: {fighter.price}</p>
            <p>Strength: {fighter.strength}</p>
            <p>Agility: {fighter.agility}</p>
            <button onClick={ () => handleRemoveFighter(fighter) }>Remove</button>
          </li>
        ))}
      </ul>
      <p>Team Strength: {team.length === 0 ? 0 : calculateStrength()}</p>
      <p>Team Agility: {team.length === 0 ? 0 : calculateAgility()}</p>

    </>
  );
}

export default App