import "./style.css";

const Tasks = (props) => (

  <ul className="tasks">
    {props.tasks.map(task => (
      <li
      className={`
      "list__item${task.done ? " list__item--done" : ""} list__item${task.done && props.hideDoneTasks ? " list__item--done taskList--hidden" : ""}
      `}
      >
        {task.content}
      </li>
    ))}
  </ul>
);

export default Tasks;