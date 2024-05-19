import PropTypes from 'prop-types';

function NumbersTable ({limit}) {
    const numArray = Array.from({ length: limit }, (v, k) => k + 1);
    const spanStyle = {
        border: '1px solid #000',
        padding: '25px',
        width :`calc(100% / 10)`,
        justifyContent :'center',
        display: 'flex'
        }
    const evenStyle = {
        backgroundColor: 'red'
    }
    const oddStyle = {
        backgroundColor: 'white'
    }

    return (
        <div style={{display: 'flex',flexWrap:'wrap'}}>
        {numArray.map((num) => {
            if (num % 2) {
               return (<div style={{...spanStyle,...oddStyle}}>{num}</div>)
            }
            else if (!(num % 2)) {
                return (<div style={{...spanStyle,...evenStyle}}>{num}</div>)
            }
        })}
        </div>
    )
}

NumbersTable.propTypes = {
    limit: PropTypes.number,
  };

export default NumbersTable;