import "./style.css";

const Section = ({ title, body, extraHeaderContent }) => (
    <section>
    <p>
    <div className="section__heading--second">
        <h2>{title}</h2>


        {extraHeaderContent}
    </div>

    </p>
    <p>
    {body}
    </p>

</section>
);

export default Section;