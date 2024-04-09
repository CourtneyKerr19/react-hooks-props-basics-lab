// About.js
import React from "react";
import Links from "./Links"; // Import the Links component

function About(props) {
  return (
    <div id="about">
      <h2>About Me</h2>
      {/* Conditional rendering for bio */}
      {props.bio && <p>{props.bio}</p>}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {/* Pass down github and linkedin links as props to Links component */}
      <Links github={props.github} linkedin={props.linkedin} />
    </div>
  );
}

export default About;
