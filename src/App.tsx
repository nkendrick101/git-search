import React from 'react';
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import Header from './components/Header';
import SearchPage from './pages/SearchPage';
import RepositoryPage from './pages/RepositoryPage';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route  path="/" element={<SearchPage />}>
            <SearchPage />
          </Route>
         
          <Route path="/repository/:id" element={<RepositoryPage />}>
         
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;