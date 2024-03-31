import React from "react";
import './Greetings.css';

function Greetings (props) {
    let greeting = "";
    const { lang, children } = props;
    switch (lang) {
        case "de":
            greeting = "Hallo";
            break;
        case "en": 
            greeting = "Hello";
            break;
        case "es":
            greeting = "Hola";
            break;
        case "fr":
            greeting = "Bonjour";
            break;
        default:
            greeting = "Sorry, I dont know your language";
    }

    return (

        <div className="text-box">
            <p>{greeting} {children}</p>
        </div>
    )
}

export default Greetings;