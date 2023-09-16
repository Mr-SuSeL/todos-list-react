import { Title, Header } from "./styled";

const Section = ({ title, body, extraHeaderContent }) => (
  <section>
    <Header> 
      <Title>
        {title}
      </Title>
      {extraHeaderContent}
    </Header>
    <div>{body}</div>
  </section>
);

export default Section;
