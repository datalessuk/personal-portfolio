import React from "react";
import '../styles/Options.scss'

const Options = (props) => {
  const options = [
    {
      text: "About me",
      handler: props.actionProvider.handleAboutMe,
      id:1 ,
    },
    { text: "Weather",
      handler:props.actionProvider.handleWeather,
      id:2,  
  },
    { text: "About this bot",
      handler:props.actionProvider.handleAbout,
      id: 3 
    },
  ];

  const buttonsMarkup = options.map((option) => (
    <button key={option.id} onClick={option.handler} className="option-button">
      {option.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default Options;