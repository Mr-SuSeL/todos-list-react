import React, { useState } from "react";
import "./style.css";

const Form = ({ addNewTask }) => {
  const [newTaskContent, setNewTaskContent] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();
    addNewTask(newTaskContent.trim());
    setNewTaskContent("");
  };

  return (
    <form className="form" onSubmit={onFormSubmit}>
      <input
        value={newTaskContent}
        className="form__input form__item"
        placeholder="Co jest do zrobienia?"
        autofocus
        onChange={(event) => setNewTaskContent(event.target.value)}
      />
      <button className="button__task form__item">Dodaj zadanie</button>
    </form>
  );
};

export default Form;
