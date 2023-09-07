
import "./style.css";

const Form = () => (
    <form className="form">
        <input className="form__input form__item" placeholder="Co jest do zrobienia?" autofocus />
        <button className="button__task form__item">Dodaj zadanie</button>
    </form>
);
export default Form;