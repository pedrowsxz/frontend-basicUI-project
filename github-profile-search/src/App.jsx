import React, { useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import UserProfile from './components/ProfileCard';

function App() {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const searchUser = async (username) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (!response.ok) {
        throw new Error('Nenhum perfil foi encontrado com esse nome de usuário. Tente novamente.');
      }
      const data = await response.json();
      setUserData(data);
    } catch (err) {
      setError(err.message);
      setUserData(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <div className='search-wrapper'>
        <div className="search-container">
          <div className="header">
            <img src='../src/assets/github-icon.svg' alt="GitHub" className="github-logo" />
            <h1>Perfil <span style={{ fontWeight: 600 }}>Github</span></h1>
          </div>
          <SearchBar onSearch={searchUser} loading={loading} />
          {loading && <div className="loading-spinner">Carregando...</div>}
          {error && <div className="error-message">{error}</div>}
          {userData && <UserProfile user={userData} />}
        </div>
      </div>
    </div>
  );
}

export default App;
