function Random({min, max}) {
    return (
        <div className="random">
            <p>
                Random value between {min} and {max} => {Math.floor(Math.random()*max)}
            </p>
        </div>
    )
}

export default Random