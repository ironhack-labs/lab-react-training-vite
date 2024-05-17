import PropTypes from 'prop-types';

function Rating (props) {
    const {children} = props;
    const divStyle = {
        margin: '5px',
      };
      function stars (num) {
        let filled='★';
        let empty='☆';
        return filled.repeat(num)+empty.repeat(5-num);
    }
    let starNum=Math.floor(children);
    return (
        <div style={divStyle}>
        <p>{stars(starNum)}</p>
        </div>
    )
}

Rating.propTypes = {
    children: PropTypes.oneOf(['0','1','2','3','4','5'])
  };

export default Rating;