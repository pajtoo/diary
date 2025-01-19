import './App.scss';
import React from 'react';
import { Route, BrowserRouter as Router, Link, Routes, Navigate } from 'react-router-dom';
import EntryIndex from './components/EntryIndex';
import EntryForm from './components/EntryForm';
import MainMenu from './components/MainMenu';

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/menu">
              Hlavní menu
            </Link>
          </li>
          <li>
            <Link to="/entry/index">
              Deníček
            </Link>
          </li>
          <li>
            <Link to="/entry/create">
              Nový záznam
            </Link>
          </li>
        </ul>
      </nav>

      <Routes>
      <Route path="/" element={<Navigate to="/menu" />} />
        <Route path="/menu" element={<MainMenu />} />
        <Route path="/entry">
          <Route index element={<EntryIndex />} />
          <Route path="create" element={<EntryForm />} />
          <Route path="index" element={<EntryIndex />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
