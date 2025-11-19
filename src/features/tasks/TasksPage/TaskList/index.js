import { Link } from "react-router-dom";
import { selectTasks, toggleTaskDone, removeTask } from "../../tasksSlice";
import { List, Item, Content, Button } from "./styled";
import { useSelector, useDispatch } from "react-redux";

const TaskList = () => {
  // Destrukturyzacja { tasks: [...], hideDone: bool }
  const { tasks, hideDone } = useSelector(selectTasks);
  const dispatch = useDispatch();

  return (
    <List>
      {Array.isArray(tasks) && tasks.map((task) => ( 
        <Item key={task.id} hidden={task.done && hideDone}>
          <Button 
            $toggleDone 
            onClick={() => dispatch(toggleTaskDone(task.id))}>
            {task.done ? "✔" : ""}
          </Button>

          <Content done={task.done}>
            <Link to={`/zadania/${task.id}`}>{task.content}</Link>
          </Content>

          <Button $remove onClick={() => dispatch(removeTask(task.id))}>
            🗑
          </Button>
        </Item>
      ))}
    </List>
  )
};

export default TaskList;