

function Random ({min, max}){

    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

    return( 
        <p>
            {randomNumber}
        </p>

    )

}
export default Random