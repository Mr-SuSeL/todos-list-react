import "./style.css";

const Tasks = ({ tasks, hideDoneTasks }) => (

  <ul className="tasks">
    {tasks.map(task => (
      <li
      className={`
      "list__item${task.done ? " list__item--done" : ""} list__item${task.done && hideDoneTasks ? " list__item--done taskList--hidden" : ""}
      `}
      >
      <button className = "js-done grid__item grid__item--left">
        {task.done ? "✔" : ""}
      </button>
      <div className="js-text grid__item grid__item--center">
        {task.content}
        </div>
      <button className = "js-remove grid__item grid__item--right">🗑</button>

      </li>
    ))}
  </ul>
);

export default Tasks;