/* eslint-disable no-unused-vars */
import './Dice.css'
import React, { useState } from 'react';
import empty from '../../assets/images/dice-empty.png'
import dice1 from '../../assets/images/dice1.png'
import dice2 from '../../assets/images/dice2.png'
import dice3 from '../../assets/images/dice3.png'
import dice4 from '../../assets/images/dice4.png'
import dice5 from '../../assets/images/dice5.png'
import dice6 from '../../assets/images/dice6.png'




function Dice () {
    const dados = [empty, dice1, dice2, dice3, dice4, dice5, dice6]
    const [dado, setDado] = useState(dice3);

   const randomDado = ()=>{
        setDado(empty)
        setTimeout(()=>{
        const randomIndex = Math.floor(Math.random() * 6);
         setDado(dados[randomIndex])       
        },1000)
   }
   
   
    return(
        <img onClick={randomDado} src={dado} alt="imagen de un dado" />

    )
    
}

export default Dice