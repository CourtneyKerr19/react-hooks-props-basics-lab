// Links.js
import React from "react";

function Links(props) {
  return (
    <div>
      <h3>Links</h3>
      {/* Display GitHub and LinkedIn links */}
      <a href={props.github}>{props.github}</a>
      <a href={props.linkedin}>{props.linkedin}</a>
    </div>
  );
}

export default Links;