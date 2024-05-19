import PropTypes from 'prop-types';
import { useState } from 'react';
import emptyDice from '../assets/images/dice-empty.png';
import dice1 from '../assets/images/dice1.png';
import dice2 from '../assets/images/dice2.png';
import dice3 from '../assets/images/dice3.png';
import dice4 from '../assets/images/dice4.png';
import dice5 from '../assets/images/dice5.png';
import dice6 from '../assets/images/dice6.png';


function Dice() {
    // Declare a new state variable, which we'll call "isLoading"
    const [dice, newDice] = useState(dice3); 

    const diceOptions = [dice1,dice2,dice3,dice4,dice5,dice6];
    
    const rollDice = () => {
        newDice(emptyDice);
        let rollResult = diceOptions[Math.floor(diceOptions.length * Math.random())];
        setTimeout(() => {
            newDice(rollResult);
        },1000);
      };
      
    const imgStyle = {
        width: '100px',
        marginTop:'350px'
    }

      return (
        <div>
        <img src={dice} style={imgStyle} onClick={rollDice} />
        </div>
      );
  }

export default Dice;