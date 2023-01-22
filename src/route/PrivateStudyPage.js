import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PrivateStudy from "../component/PrivateStudy";
import Styles from "../styles/PrivateStudy.module.css";

const userName = localStorage.getItem("userName");
const url = "/private/" + userName;

function PrivateStudyPage() {
  const [loading, setLoading] = useState(true);
  const [privateStudies, setPrivateStudies] = useState([]);
  const getPrivateStudies = async () => {
    try {
      await axios
        .get(url, {
          headers: {
            Authorization:
              localStorage.getItem("grantType") +
              " " +
              localStorage.getItem("accessToken"),
          },
        })
        .then((res) => setPrivateStudies(res.data.privateStudyList));
      setLoading(false);
      console.log(privateStudies[0]);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getPrivateStudies();
  }, []);
  return (
    <div className={Styles.container}>
      {loading ? (
        <div className={Styles.loader}>
          <span>Loading...</span>
        </div>
      ) : (
        <div className={Styles.movies}>
          {privateStudies.map((privateStudy) => (
            <PrivateStudy
              key={privateStudy.id}
              id={privateStudy.id}
              name={privateStudy.name}
              todoList={privateStudy.todoList}
              userName={localStorage.getItem("userName")}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default PrivateStudyPage;
