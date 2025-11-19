import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { StyledForm, Input, Button } from "./styled";
import { addTask } from "../../tasksSlice";
import ExampleButtons from "../../ExampleButtons";

const Form = () => {
  const inputRef = useRef(null);
  const [newTaskContent, setNewTaskContent] = useState("");

  const dispatch = useDispatch();

  const trimmedNewTaskContent = () => newTaskContent.trim()

  const onFormSubmit = (event) => {
    event.preventDefault();

    dispatch(addTask({
      content: trimmedNewTaskContent(),
      done: false,
      id: nanoid(),
    }));

    setNewTaskContent("");


  };

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <>
      <ExampleButtons />
      <StyledForm onSubmit={onFormSubmit}>
        <Input
          ref={inputRef}
          value={newTaskContent}
          placeholder="Co jest do zrobienia?"
          autoFocus
          onChange={(event) => setNewTaskContent(event.target.value)}
        />
        <Button onClick={focusInput}>Dodaj zadanie</Button>
      </StyledForm>
    </>
  );
};

export default Form;
