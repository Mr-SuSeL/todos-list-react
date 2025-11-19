import React from 'react';
import Tasks from './features/tasks/TasksPage';
import Author from './features/author/Author';
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
        <Route path="/zadania" element={<Tasks />} />
        <Route path="/autor" element={<Author />} />
        <Route path="/" element={<Navigate to="/zadania" replace />} />
      </Routes>
    </nav>
  </HashRouter>
);