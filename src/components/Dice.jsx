/* eslint-disable react/prop-types */
function Dice({diceImg, changeImgDice}) {
  return (
    <img src={diceImg} alt="" onClick={changeImgDice} style={{width: "100px", height: "100px"}}/>
  )
}

export default Dice