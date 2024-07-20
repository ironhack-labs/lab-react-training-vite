import React from "react";

export default function SignUpPage() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [language, setLanguage] = React.useState("en");
  const [formSubmitted, setFormSubmitted] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const welcomeMessage = () => {
    if (language === "en") {
      return <p>Hello, your email is {email}</p>;
    } else if (language === "fr") {
      return <p>Bonjour, votre email est {email}</p>;
    } else if (language === "es") {
      return <p>Hola, tu correo es {email}</p>;
    }
  };

  return (
    <>
    <div className="flex flex-row items-center justify-center">
      <form className="border border-solid border-black">
        <label htmlFor="email" >
          Email
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-solid border-black"></input>
        </label>
        <label htmlFor="password">
          Password
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border border-solid border-black"
          />
        </label>
        <label htmlFor="language">
          <select
            name="language"
            id="language"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            <option value="en">English</option>
            <option value="fr">French</option>
            <option value="es">Spanish</option> 
          </select>
        </label>
        <button onClick={handleSubmit}>Sign Up</button>
      </form>
    </div>
    {!formSubmitted && <p>Please fill out the form</p>}
      {formSubmitted && welcomeMessage()}
      </>
  );
}
