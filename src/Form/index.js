import React, { useState, useRef } from "react";
// import "./style.css";
import { StyledForm, Input, Button } from "./styled";

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
    <StyledForm
      onSubmit={onFormSubmit}>
      <Input
        ref={inputRef}
        value={newTaskContent}
        placeholder="Co jest do zrobienia?"
        autofocus
        onChange={(event) => setNewTaskContent(event.target.value)}
      />
      <Button onClick={focusInput} >
        Dodaj zadanie
      </Button>
    </StyledForm>
  );
};

export default Form;
