import PropTypes from 'prop-types';
import { useState } from 'react';

function SignupPage () {
    const errorStyle= {
        borderColor: 'red'
    }
    const successStyle= {
        borderColor: 'green'
    }
    const [Validation,setValidation] = useState({});
    function handleValidation(word) {
        if (word.length>0) {
            setValidation(successStyle);
        }
        else {
            setValidation(errorStyle);
        } 
    }
    const [emailValidation,setEmailValidation] = useState({});
    function handleEmailValidation(word) {
        if (word.includes("@")) {
            setEmailValidation(successStyle);
        }
        else {
            setEmailValidation(errorStyle);
        } 
    }
    const [Greeting,setGreeting] = useState(null);
    function greet (citizen) {
        if(citizen==="en") {
            return setGreeting("Hello")
        }
        if(citizen==="de") {
            return setGreeting("Hallo")
        }
        if(citizen==="fr") {
            return setGreeting("Bonjour")
        }
    }
    return (
        <div>
        <input type="email" onChange={(e) => {handleEmailValidation(e.target.value)}} style={emailValidation}/>
        <input type="password" onChange={(e) => {handleValidation(e.target.value)}} style={Validation}/>
        <select name="nationality" onChange={(e) => {greet(e.target.value)}}>
            <option value="">Select</option>
            <option value="en">English</option>
            <option value="de">German</option>
            <option value="fr">French</option>
        </select>
        <p>{Greeting}</p>
</div>
    )
}

SignupPage.propTypes = {
    name: PropTypes.string,
    rating: PropTypes.number,
    img: PropTypes.string,
    car: PropTypes.shape({
        model: PropTypes.string,
        licensePlate: PropTypes.string
      }),
  };

export default SignupPage;