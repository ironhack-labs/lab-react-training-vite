/* eslint-disable react/prop-types */
function ClickablePicture({img, changeImg}){
  return (
    <img src={img} onClick={changeImg} style={{maxWidth: "200px"}} />
  )
}

export default ClickablePicture