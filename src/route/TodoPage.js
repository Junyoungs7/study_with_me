import React from "react";
import { useParams } from "react-router-dom";

function TodoPage(props) {
  const { id } = useParams();

  return (
    <>
      <h3>{id}번 TodoPage</h3>
    </>
  );
}

export default TodoPage;
