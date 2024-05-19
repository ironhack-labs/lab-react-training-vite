import PropTypes from 'prop-types';
import { useState } from 'react';

function LikeButton () {
    const divStyle = {
        border: '1px solid #000',
        gap: '20px',
        margin: '15px',
        display: 'flex',
        justifyContent: 'center',
        padding: '25px',
        backgroundColor: 'rgb(53,71,166)',
        color: 'white',
      };
      const ColorArr = ["purple", "blue", "green", "yellow", "orange", "red"];
      const [likeCount,liking] = useState(0);

      const handleCount = () => {
        liking(likeCount+1)
      };

    return (
        <div style={divStyle}>
            <button onClick={handleCount} style={{backgroundColor:ColorArr[likeCount%ColorArr.length]}}>{likeCount} Likes</button>
        </div>
    )
}

export default LikeButton;