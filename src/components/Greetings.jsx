/* eslint-disable react/prop-types */
function Greetings({lang, children}) {
    const getLang = (lang) => {
      switch (lang) {
        case "de":
          return "Hallo";
        case "en":
          return "Hello";
        case "es":
          return "Hola";
        case "fr":
          return "Bonjour";
        default:
          return "Hi";
      }
    };
  
    return (
        <div className="greeting">
          {getLang(lang)}, {children}!
        </div>
      );
  }
  
export default Greetings