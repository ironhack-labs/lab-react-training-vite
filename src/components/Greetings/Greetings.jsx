import React from 'react';
import './Greetings.css';

function Greetings({ lang, children }) {
    
    let greeting;
    switch (lang) {
        case "es":
            greeting = "Hola";
            break;
        case "en":
            greeting = "Hello";
            break;
        case "fr":
            greeting = "Bonjour";
            break;
        case "de":
            greeting = "Hallo";
            break;
    }

    return (
        <div className='div-greetings'>{greeting} {children}</div>
    )
}

export default Greetings;