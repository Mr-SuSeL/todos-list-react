import "./style.css";

const Buttons = ({ tasks, hideDoneTasks }) => {
    if (tasks.length === 0) {
        return null;
    }

    return (
        <div className="gridButtons">

            <button className="section__heading--hideButton">
                {hideDoneTasks ? "Pokaż " : "Ukryj "}
                ukończone zadania
            </button>
            <button
                className="section__heading--finishButton"
                disabled={tasks.every(({ done }) => done)}

            >
                Zakończ wszystkie zadania
            </button>

        </div>
    );
};
export default Buttons;
