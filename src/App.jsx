import React from 'react';
import Header from './components/Header';
import './App.css';
import CharacterList from './components/CharacterList';
import Background from './components/Background';

function App() {

  return (
    <div>
      <Header />
      <div className="main-content">
        <CharacterList />
        <Background />
      </div>
    </div>
  );
}

export default App;
