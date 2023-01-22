import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "../styles/PS.module.css";

function PrivateStudy({ id, name, todoList, userName }) {
  return (
    <div className={styles.movie}>
      <h3 hidden>{id}</h3>
      <h2 className={styles.movie__title}>
        <Link to={`/${userName}/${name}`}>{name}</Link>
      </h2>
      <ul>
        {todoList.map((todo) => (
          <li key={todo.id}>
            <h4>{todo.name}</h4>
            <h4>{todo.complete}</h4>
          </li>
        ))}
      </ul>
    </div>
  );
}

PrivateStudy.propType = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  todoList: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default PrivateStudy;
