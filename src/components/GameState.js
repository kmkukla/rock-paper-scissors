import React from 'react';

const GameState = ({ gameState, userChoice, computerChoice, restartGame }) => {
  function renderComponent(choice) {
    const Component = choice.component;
    return <Component />;
  }

  return (
    gameState && (
      <div className={`game-state ${gameState}`} onClick={() => restartGame()}>
        <div>
          <div className="game-state-content">
            <p>{renderComponent(userChoice)}</p>
            {gameState === 'win' && <p>Congrats! You won!</p>}
            {gameState === 'lose' && <p>Sorry! You lost!</p>}
            {gameState === 'draw' && <p>You drew!</p>}
            <p>{renderComponent(computerChoice)}</p>
          </div>

          <button>Play Again!</button>
        </div>
      </div>
    )
  );
};

export default GameState;
