/* eslint-disable react/prop-types */
function LikeButton({likes, addLikes, bgColor, changeBgColor}) {
  const handleClick = () => {
    addLikes(),
    changeBgColor()
  }
  return (
    <button onClick={handleClick} style={{backgroundColor: bgColor, marginBottom: "50px"}}>{likes.toString()} Likes</button>
  )
}

export default LikeButton