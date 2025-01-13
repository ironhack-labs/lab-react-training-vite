import './BoxColor.css'

function BoxColor ({r,g,b}){
    if (r >= 0 && r <= 255 && g >= 0 && g <= 255 && b >= 0 && b <= 255){
        const rgbColor = `rgb(${r}, ${g}, ${b})`;
    return(
        <div className="rectangulo" style={{ backgroundColor:rgbColor}}>
            <p>{rgbColor}</p>
        </div>

        )
    }
}
export default BoxColor