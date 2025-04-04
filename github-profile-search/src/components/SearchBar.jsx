import React, { useState } from 'react';
import './SearchBar.css';

function SearchBar({ onSearch, loading }) {
  const [username, setUsername] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim()) {
      onSearch(username);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Digite um usuário do Github..."
        className="search-input"
        disabled={loading}
      />
      <button type="submit" className="search-button" disabled={loading}>
      <i className="fas fa-search" style={{fontSize: '20px'}}></i>
      </button>
    </form>
  );
}

export default SearchBar;