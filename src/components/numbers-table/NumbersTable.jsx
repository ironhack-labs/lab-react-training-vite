import "./NumbersTable.css";

function NumbersTable({ limit }) {

    const numbers = [];

    for (let i = 1; i <= limit; i++) {
        
        (i % 2) ? 
            numbers.push(<div key={i} className="odd" >{i}</div>)
            :
            numbers.push(<div key={i} className="even" >{i}</div>)
    }

    return(
        <div className="numbers-table">
            {numbers}
        </div>
    );
}

export default NumbersTable;