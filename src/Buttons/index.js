import { BothButtons, Button } from "./styled";

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) => {
  if (tasks.length === 0) {
    return null;
  }

  return (
    <BothButtons>
      <Button onClick={toggleHideDone}>
        {hideDone ? "Pokaż " : "Ukryj "}
        ukończone zadania
      </Button>
      <Button onClick={setAllDone} disabled={tasks.every(({ done }) => done)}>
        Zakończ wszystkie zadania
      </Button>
    </BothButtons>
  );
};
export default Buttons;
