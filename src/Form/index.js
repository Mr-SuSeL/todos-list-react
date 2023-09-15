import React, { useState, useRef } from "react";
import "./style.css";

const Form = ({ addNewTask }) => {
  const inputRef = useRef(null);
  const [newTaskContent, setNewTaskContent] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();
    addNewTask(newTaskContent.trim());
    setNewTaskContent("");
  };

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <form className="form" onSubmit={onFormSubmit}>
      <input
        ref={inputRef}
        value={newTaskContent}
        className="form__input form__item"
        placeholder="Co jest do zrobienia?"
        autofocus
        onChange={(event) => setNewTaskContent(event.target.value)}
      />
      <button onClick={focusInput} className="button__task form__item">
        Dodaj zadanie
      </button>
    </form>
  );
};

export default Form;
