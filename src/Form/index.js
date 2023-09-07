
import "./style.css";

const Form = () => (
    <form className="form">
        <input className="newTask flex__item" placeholder="Co jest do zrobienia?" autofocus />
        <button className="button__task flex__item">Dodaj zadanie</button>
    </form>
);
export default Form;