import "./Dice.css";
import { useState } from "react";

function Dice() {

    const [ randomDice, setRandomDice ] = useState(Math.floor(Math.random() * 6) + 1);

    const handleClick = () => {
        setRandomDice("-empty");
       
        setTimeout(() => {
            setRandomDice(Math.floor(Math.random() * 6) + 1);
        }, 1000);
    }
   
    return (
        <div>
            <img className="dice" onClick={handleClick} src={`../src/assets/images/dice${randomDice}.png`} />
        </div>
    );
}

export default Dice;