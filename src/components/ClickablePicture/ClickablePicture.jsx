
import glases from '../../assets/images/glasses.png'
import normal from '../../assets/images/rajoy.jpg'
import './ClickablePicture.css'
import { useState } from 'react'


function ClickablePicture() {
    const [glasses, setGlases] = useState(false)
    const handleClick = () => {
        setGlases(!glasses)
      } 
    return( 
        <div className='container2'>
            <img onClick={handleClick}   className={`switch ${glasses ? 'on' : 'off'}`} src= {glases} style={{ width: "100px"}} alt="foto de perfil con gafas" />
            
            <img  onClick={handleClick}  src= {normal} style={{ width: "300px"}} alt="foto de perfil con gafas" />
        </div>
    )
}
export default ClickablePicture