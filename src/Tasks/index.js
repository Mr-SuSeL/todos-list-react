// import "./style.css";
import { List, Item, Content, Button } from "./styled";

const Tasks = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
 
  <List>
    {tasks.map((task) => (
      <Item
        key={task.id}
        hidden={task.done && hideDone}

      //   className={`
      // "tasks__item${task.done ? " tasks__item--done" : ""} tasks__item${
      //     task.done && hideDone ? " tasks__item--done tasks__item--hidden" : ""}`
        
        // }
      >
        <Button
          toggleDone
          onClick={() => toggleTaskDone(task.id)}
        >
          {task.done ? "✔" : ""}
        </Button>
        
        {/* <span className="content__item--center"> */}
        <Content done={task.done}>
          {task.content}
        </Content>

        {/* </span> */}

        <Button
          remove
          onClick={() => removeTask(task.id)}
        >
          🗑
        </Button>
      </Item>
    ))}
  </List>
);

export default Tasks;
