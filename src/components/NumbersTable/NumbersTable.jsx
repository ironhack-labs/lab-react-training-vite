/* eslint-disable react/prop-types */
import './NumbersTable.css'
function NumbersTable ({limit}){
    const numbers = Array.from({ length: limit }, (_, i) => i + 1);

    return(
        <div className='container4'>
        {numbers.map((number, i)=>(
            <div key={i} style={{ backgroundColor: number % 2 === 0 ? 'red' : 'white' }}>{number}</div>

        ))}
        
        </div>

    )
}

export default NumbersTable