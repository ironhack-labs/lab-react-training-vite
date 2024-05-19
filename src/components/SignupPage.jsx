import PropTypes from 'prop-types';
import { useState } from 'react';

function SignupPage () {
    const errorStyle= {
        borderColor: 'red'
    }
    const successStyle= {
        borderColor: 'green'
    }
    const formStyle = {
        display: 'flex',
        flexDirection: 'column',
        width: '80%',
        margin: '0 auto',
    }
    const [password,setPassword] = useState({});
    function handlePasswordValidation(word) {
        if (word.length>0) {
            setPassword(successStyle);
        }
        else {
            setPassword(errorStyle);
        } 
    }
    const [emailValidation,setEmailValidation] = useState({});
    const [email,setEmail] = useState("");

    function handleEmailValidation(word) {
        setEmail(word);
        if (word.includes("@")) {
            setEmailValidation(successStyle);
        }
        else {
            setEmailValidation(errorStyle);
        } 
    }
    const [Greeting,setGreeting] = useState(null);
    function greet (nationality) {
        if(nationality==="en") {
            return setGreeting("Hello")
        }
        if(nationality==="de") {
            return setGreeting("Hallo")
        }
        if(nationality==="fr") {
            return setGreeting("Bonjour")
        }
    }
    return (
        <form style={formStyle}>
        <label htmlFor="email">Email</label>
        <input type="email" onChange={(e) => {handleEmailValidation(e.target.value)}} style={emailValidation}/>
        <label htmlFor="password">Password</label>
        <input type="password" onChange={(e) => {handlePasswordValidation(e.target.value)}} style={password}/>
        <label htmlFor="nationality">Nationality</label>
        <select name="nationality" onChange={(e) => {greet(e.target.value)}}>
            <option value="">Select</option>
            <option value="en">English</option>
            <option value="de">German</option>
            <option value="fr">French</option>
        </select>
        <button style={{marginTop: '10px'}}>Sign Up</button>
        <p>{Greeting}</p>
        <p>Your email is {email}</p>
</form>
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