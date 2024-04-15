import React, { useState } from "react";
import './LikeButton.css';

function LikeButton({ colors }) {

    const [ count, setCount ] = useState(0);

    const handleCount = () => setCount(count + 1);
     
    return (
        <button className='btn-count' onClick={handleCount} style={{backgroundColor: colors[count % colors.length]}}>
            {count} {count === 1 ? 'Like' : 'Likes'}
        </button>
    );
}

export default LikeButton;