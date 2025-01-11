
import React, { useState } from 'react';

function LikeButton (){
    const colors = ["purple", "blue", "green", "yellow", "orange", "red"]
    const [color, setColor] = useState(0)
    const [like, setLike] = useState(0)

    const handleClick = () =>{
        setLike(like + 1)
        setColor((color + 1) % colors.length);
    }


    return(
        <>
            <button style={{ backgroundColor:colors[color]}} onClick={handleClick}>
                Like {like}
            </button>
        </>
    )
}
export default LikeButton