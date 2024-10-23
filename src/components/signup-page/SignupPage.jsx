import { useState } from "react";
import "./SignupPage.css";
import Greetings from "../greetings/Greetings";

function SignupPage() {

    const initialUserState = {email: "", password: "", nationality: ""};
    
    const [ user, setUser ] = useState(initialUserState);
  
    const handleChange = (event) => {
        const { name, value } = event.currentTarget;
        setUser({...user, [name] : value});
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        if (/\S+@\S+\.\S+/.test(user.email) && user.password.length > 6) {
            alert(`Email: ${user.email} | Password: ${user.password} | Lang: ${user.nationality}`);      
            setUser(initialUserState);
        } else {
            alert("Invalid email / password");
        }
    }

    return(
        <div>
            <div className="div-signup">
                <form className="signup-form" onSubmit={handleSubmit}>
                    <label>Email</label>
                    <input type="email" name="email" value={user.email} onChange={handleChange} />
                    <label>Password</label>
                    <input type="password" name="password" value={user.password} onChange={handleChange} />
                    <label>Nationality</label>
                    <select name="nationality" value={user.nationality} onChange={handleChange}>
                        <option value="">Select</option>
                        <option value="en">English</option>
                        <option value="de">German</option>
                        <option value="fr">French</option>
                        <option value="es">Spanish</option>
                    </select>
                    <button type="submit">Sign up</button>
                </form>
            </div>
            <div>
                <Greetings lang={user.nationality}>
                <p>Your email address is: {user.email}</p>
                <p>Your email address is {/\S+@\S+\.\S+/.test(user.email) ? "valid" : "wrong"}</p>
                <p>Your password is {user.password.length > 6 ? "valid" : "too weak"}</p>
                </Greetings>
            </div>
        </div>
    );
}

export default SignupPage;