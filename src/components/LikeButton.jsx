
export default function LikeButton({likes, setLikes, color, setColor, handleClick}) {
    
  return (
    <button className="text-white border border-solid border-black" style={{backgroundColor: color}} onClick={handleClick}>{likes} likes</button>
  )
}
