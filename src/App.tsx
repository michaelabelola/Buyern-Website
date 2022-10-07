import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import EntityMainPage from './pages/EntityMainPage/EntityMainPage.lazy';

const App: React.FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route path='entity/:entityUid/' element={<EntityMainPage />}>

        </Route>
      </Routes>

    </div>
  );
}

export default App;
