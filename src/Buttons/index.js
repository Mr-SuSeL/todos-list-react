import "./style.css";

const Buttons = (props) => {
    if (props.tasks.length === 0) {
        return null;
    }

    return (
        <div className="js-tasksButtons gridButtons">

            <button className="js-buttonHideDone section__heading__hideButton">
                {props.hideDoneTasks ? "Pokaż " : "Ukryj "}
                ukończone zadania
            </button>
            <button
                className="js-buttonFinishAll section__heading__finishButton"
                disabled={props.tasks.every(({ done }) => done)}

            >
                Zakończ wszystkie zadania
            </button>

        </div>
    );
};
export default Buttons;
