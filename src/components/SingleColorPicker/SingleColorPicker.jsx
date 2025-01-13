import './SingleColorPicker.css'

function SingleColorPicker ({color, value, onChange}){

    const rgbColor = ()=> {
        switch (color){
            case 'r':
                return `rgb(${value}, 0 , 0)`;
            case 'g':
                return `rgb(0, ${value} , 0)`;
            case 'b':
                return `rgb(0, 0 , ${value})`;
                default:
                    return `rgb(0, 0, 0)`;
        }
    } 
    
    return(
        <div className='containerColor'>
        <div  style={{backgroundColor:rgbColor()}}></div>
            <input type="number"
                min="0"
                max="255"
                value={value}
                onChange={(e) => onChange(Number(e.target.value))}
                style={{ width: '100px' }}/>
        </div>

    )
}
export default SingleColorPicker