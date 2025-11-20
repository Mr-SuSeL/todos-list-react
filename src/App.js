import React from 'react';
import TasksPage from './features/tasks/TasksPage';
import TaskPage from './features/tasks/TaskPage';
import AuthorPage from './features/author/AuthorPage';
// Zmieniono: Switch na Routes
import { HashRouter, Link, Routes, Route, Navigate } from 'react-router-dom';

export default () => (
  <HashRouter>
    <nav>
      <ul>
        <li>
          <Link to="/zadania">
            Zadania
          </Link>
        </li>
        <li>
          <Link to="/autor">
            O autorze
          </Link>
        </li>
      </ul>
      <Routes>
        <Route path="/zadania/:id" element={<TaskPage />} />
        <Route path="/zadania" element={<TasksPage />} />
        <Route path="/autor" element={<AuthorPage />} />
        <Route path="/" element={<Navigate to="/zadania" replace />} />
      </Routes>
    </nav>
  </HashRouter>
);