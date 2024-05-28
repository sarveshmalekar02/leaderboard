import React from 'react';
import NavigationBar from './components/navbar';
import Leaderboard from './components/leaderboard';
import './App.css';


const App = () => {
  return (
    <div className="App">
      <NavigationBar />
      <Leaderboard />
    </div>
  );
};

export default App;
