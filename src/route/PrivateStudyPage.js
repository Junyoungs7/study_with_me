import React from "react";
import { Link } from "react-router-dom";

function PrivateStudyPage(props) {
  return (
    <>
      <h3>PrivateStudyPage</h3>
      <ul>
        <Link to="/todo/1">
          <li>Study1</li>
        </Link>
        <Link to="/todo/2">
          <li>Study2</li>
        </Link>
      </ul>
    </>
  );
}

export default PrivateStudyPage;
