import React from 'react';
import Rock from '../icons/Rock';
import Paper from '../icons/Paper';
import Scissors from '../icons/Scissors';

export const choices = [
  {
    id: 1,
    name: 'rock',
    component: Rock,
    losesTo: 2,
  },
  {
    id: 2,
    name: 'paper',
    component: Paper,
    losesTo: 3,
  },
  {
    id: 3,
    name: 'scissors',
    component: Scissors,
    losesTo: 1,
  },
];

const Choices = ({
  setWins,
  setLosses,
  setGameState,
  setUserChoice,
  computerChoice,
}) => {
  const handleUserChoice = (choice) => {
    const chosenChoice = choices.find((c) => c.id === choice);
    setUserChoice(chosenChoice);

    if (chosenChoice.losesTo === computerChoice.id) {
      setLosses((losses) => losses + 1);
      setGameState('lose');
    } else if (computerChoice.losesTo === chosenChoice.id) {
      setWins((wins) => wins + 1);
      setGameState('win');
    } else if (computerChoice.id === chosenChoice.id) {
      setGameState('draw');
    }
  };

  return (
    <div className="choices">
      <div>You</div>
      <div />
      <div>Computer</div>

      <div>
        <button className="rock" onClick={() => handleUserChoice(1)}>
          <Rock />
        </button>
        <button className="paper" onClick={() => handleUserChoice(2)}>
          <Paper />
        </button>
        <button className="scissors" onClick={() => handleUserChoice(3)}>
          <Scissors />
        </button>
      </div>

      <div className="vs">vs</div>

      <div>
        <button className="computer-choice">?</button>
      </div>
    </div>
  );
};

export default Choices;
