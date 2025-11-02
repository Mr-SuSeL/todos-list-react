import { selectTasks, setAllDone, toggleHideDone } from "../tasksSlice";
import { BothButtons, Button } from "./styled";
import { useSelector, useDispatch } from "react-redux";

const Buttons = () => {

  const { tasks, hideDone } = useSelector(selectTasks);
  const dispatch = useDispatch();

  if (tasks.length === 0) {
    return null;
  }

  return (
    <BothButtons>
      <Button onClick={() => dispatch(toggleHideDone())}>
        {hideDone ? "Pokaż " : "Ukryj "}
        ukończone zadania
      </Button>
      <Button
        onClick={() => dispatch(setAllDone())}
        disabled={tasks.every(({ done }) => done)}>
        Zakończ wszystkie zadania
      </Button>
    </BothButtons>
  );
};
export default Buttons;
