import React, { useState, useEffect } from 'react';
import WinsLosses from './components/WinsLosses';
import Choices from './components/Choices';
import GameState from './components/GameState';
import { choices } from './components/Choices';

import './App.css';

export default function App() {
  const [wins, setWins] = useState(0);
  const [losses, setLosses] = useState(0);
  const [gameState, setGameState] = useState(null);
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);

  useEffect(() => {
    restartGame();
  }, []);

  function restartGame() {
    setGameState(null);
    setUserChoice(null);
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    setComputerChoice(randomChoice);
  }

  return (
    <div className="app">
      <div className="info">
        <h2>Rock - Paper - Scissors</h2>
        <WinsLosses wins={wins} losses={losses} />
      </div>
      <Choices
        setWins={setWins}
        setLosses={setLosses}
        setGameState={setGameState}
        setUserChoice={setUserChoice}
        computerChoice={computerChoice}
      />
      <GameState
        gameState={gameState}
        userChoice={userChoice}
        computerChoice={computerChoice}
        restartGame={restartGame}
      />
    </div>
  );
}
