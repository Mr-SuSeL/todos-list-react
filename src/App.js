import React from 'react';
import TasksPage from './features/tasks/TasksPage';
import TaskPage from './features/tasks/TaskPage';
import AuthorPage from './features/author/AuthorPage';
import Navigation from './common/Navigation';
// Zmieniono: Switch na Routes
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { StyledNavLink } from './styled';

export default () => (
  <HashRouter>
    <Navigation />
    <Routes>
      <Route path="/zadania/:id" element={<TaskPage />} />
      <Route path="/zadania" element={<TasksPage />} />
      <Route path="/autor" element={<AuthorPage />} />
      <Route path="/" element={<Navigate to="/zadania" replace />} />
    </Routes>

  </HashRouter >
);