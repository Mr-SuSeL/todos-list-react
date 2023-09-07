import "./style.css";

const Tasks = ({ tasks, hideDoneTasks }) => (
  <ul className="tasks">
    {tasks.map((task) => (
      <li
        key={task.id}
        className={`
      "tasks__item${task.done ? " tasks__item--done" : ""} tasks__item${
          task.done && hideDoneTasks
            ? " tasks__item--done tasks__item--hidden"
            : ""
        }
      `}
      >
        <button className="content__item content__item--left">
          {task.done ? "✔" : ""}
        </button>
        <div className="content__item content__item--center">
          {task.content}
        </div>
        <button className="content__item content__item--right">🗑</button>
      </li>
    ))}
  </ul>
);

export default Tasks;
