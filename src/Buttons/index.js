import "./style.css";

const Buttons = ({ tasks, hideDone }) => {
  if (tasks.length === 0) {
    return null;
  }

  return (
    <div className="buttons">
      <button className="buttons__button">
        {hideDone ? "Pokaż " : "Ukryj "}
        ukończone zadania
      </button>
      <button
        className="buttons__button"
        disabled={tasks.every(({ done }) => done)}
      >
        Zakończ wszystkie zadania
      </button>
    </div>
  );
};
export default Buttons;
