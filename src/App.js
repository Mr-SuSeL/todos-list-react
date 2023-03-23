import React from 'react';
import Form from './Form';
import Tasks from './Tasks';

const tasks = [
  {id: 1, content: "Przejśc na Reacta", done: false},
  {id: 2, content: "Zjeść obiad", done: true},
];

const hideDoneTasks = false; 

function App() {
  return (

<main className="body__container">
    <header>
        <h1 className="header__heading">Lista zadań</h1>
    </header>

    <article className="article__container">

        <section>
            <h2 className="section__heading">Dodaj nowe zadanie</h2>
            <Form />
        </section>

        <section>
            <p>
            <div className="section__heading--second">
                <h2>Lista zadań</h2>


                <div className="js-tasksButtons gridButtons"></div>
            </div>

            </p>
            <p>
            <Tasks tasks={tasks} hideDoneTasks={hideDoneTasks}/>
            </p>

        </section>
    </article>
    </main>
  );
}

export default App;
