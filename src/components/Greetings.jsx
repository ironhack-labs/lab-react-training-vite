import PropTypes from 'prop-types';

function Greetings (props) {
    const {lang,children} = props;
    const divStyle = {
        border: '1px solid #000',
        margin: '10px'
      };

    function greet (lang) {
        if(lang==="en") {
            return <span>Hello </span>
        }
        if(lang==="de") {
            return <span>Hallo </span>
        }
        if(lang==="es") {
            return <span>Hola </span>
        }
        if(lang==="fr") {
            return <span>Bonjour </span>
        }
    }
    return (
        <div style={divStyle}>
        <p>
            {greet (lang)}
            {children}</p>
        </div>
    )
}

Greetings.propTypes = {
    lang: PropTypes.oneOf(['de','en','es','fr']),
    children: PropTypes.string
  };

export default Greetings;