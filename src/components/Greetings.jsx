import PropTypes from "prop-types";

export default function Greetings({ lang, children }) {
  return (
    <div>
      {lang === "en" ? (
        <h1 className="text-lg border-solid border-black border max-w-80 m-2">
          Hello {children}
        </h1>
      ) : lang === "es" ? (
        <h1 className="text-lg border-solid border-black border max-w-80 m-2">
          Hola {children}
        </h1>
      ) : lang === "fr" ? (
        <h1 className="text-lg border-solid border-black border max-w-80 m-2">
          Bonjour {children}
        </h1>
      ) : (
        <h1 className="text-lg border-solid border-black border max-w-80 m-2">
          hallo {children}
        </h1>
      )}
    </div>
  );
}
Greetings.propTypes = {
  lang: PropTypes.oneOf(["de", "en", "es", "fr"]).isRequired,
  children: PropTypes.string.isRequired,
};
