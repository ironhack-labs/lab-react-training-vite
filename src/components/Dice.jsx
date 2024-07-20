import { useState } from "react";
import { useEffect } from "react";

export default function Dice() {
    const dices = [
    "src/assets/images/dice1.png",
    "src/assets/images/dice2.png",
    "src/assets/images/dice3.png",
    "src/assets/images/dice4.png",
    "src/assets/images/dice5.png",
    "src/assets/images/dice6.png"
  ];
    const [dice, setDice] = useState(dices[Math.floor(Math.random() * dices.length)]);
    const roll = () => {
        setDice("src/assets/images/dice-empty.png");
         setTimeout(() => {
             setDice(dices[Math.floor(Math.random() * dices.length)]);
         }, 1000);
     }
  return (
    <img className="w-28 h-28" src={dice} alt="dice" onClick={roll} />
  )
}
