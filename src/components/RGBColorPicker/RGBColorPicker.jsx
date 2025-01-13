import SingleColorPicker from "../SingleColorPicker/SingleColorPicker";
import React, { useState } from 'react';
import './RGBColorPicker.css'; // Asegúrate de incluir estilos básicos

function RGBColorPicker() {
    const [rValue, setRValue] = useState(0); // Valores iniciales como números
    const [gValue, setGValue] = useState(0);
    const [bValue, setBValue] = useState(0);

    return (
        <>
            <div className="color-picker">
               
                <div className="color-row">
                    <SingleColorPicker 
                        color="r"
                        value={rValue}
                        onChange={(value) => setRValue(value)}
                    />
                    <div
                        className="color-box"
                        style={{ backgroundColor: `rgb(${rValue}, 0, 0)` }}
                    ></div>
                </div>

               
                <div className="color-row">
                    <SingleColorPicker 
                        color="g"
                        value={gValue}
                        onChange={(value) => setGValue(value)}
                    />
                    <div
                        className="color-box"
                        style={{ backgroundColor: `rgb(0, ${gValue}, 0)` }}
                    ></div>
                </div>

                
                <div className="color-row">
                    <SingleColorPicker 
                        color="b"
                        value={bValue}
                        onChange={(value) => setBValue(value)}
                    />
                    <div
                        className="color-box"
                        style={{ backgroundColor: `rgb(0, 0, ${bValue})` }}
                    ></div>
                </div>
            </div>

            
            <div className="combined-color">
                <h3>Color combinado:</h3>
                <div
                    className="color-box"
                    style={{
                        width: '150px',
                        height: '150px',
                        backgroundColor: `rgb(${rValue}, ${gValue}, ${bValue})`,
                        margin: '10px auto',
                    }}
                ></div>
                <p>rgb({rValue}, {gValue}, {bValue})</p>
            </div>
        </>
    );
}

export default RGBColorPicker;
