import React from 'react';
import TasksPage from './features/tasks/TasksPage';
import TaskPage from './features/tasks/TaskPage';
import AuthorPage from './features/author/AuthorPage';
// Zmieniono: Switch na Routes
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { StyledNavLink } from './styled';

export default () => (
  <HashRouter>
    <nav>
      <ul>
        <li>
          <StyledNavLink to="/zadania">
            Zadania
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/autor">
            O autorze
          </StyledNavLink>
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