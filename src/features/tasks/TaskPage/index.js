import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Section from "../../../common/Section";
import Header from "../../../common/Header";
import Container from "../../../common/Container";
import { getTaskById } from "../tasksSlice";
import { BodyWrapper } from "./styled";

function TaskPage() {
  const { id } = useParams();
  const task = useSelector(state => getTaskById(state, id));

  return (
    <Container>
      <Header title="Szczegóły zadania" />
      <Section
        title={task ? task.content : "Nie znaleziono zadania smuteczek."}
        body={
          <BodyWrapper>
            <strong>Ukończono:</strong> {task ? (task.done ? "Tak" : "Nie") : "Brak danych"}
          </BodyWrapper>
        }
      />
    </Container>
  );
}

export default TaskPage;