import React from 'react';

const GREETINGS_MAP = {
  de: name => `Hallo ${name}!`,
  en: name => `Hello ${name}!`,
  es: name => `¡Hola ${name}!`,
  fr: name => `Bonjour ${name}!`,
};

const Greetings = ({ lang, children }) => {
  const getGreeting = GREETINGS_MAP[lang] || GREETINGS_MAP.en;
  const greetingText = getGreeting(children);

  return (
    <div>
      <p>{greetingText}</p>
    </div>
  );
};

export default Greetings;
