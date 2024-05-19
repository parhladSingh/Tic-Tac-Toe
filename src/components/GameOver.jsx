
import React from 'react';
import GameState from './GameState';

function GameOver({ gameState }) {
    let message;
    let classNames = "game-over";

    switch (gameState) {
        case GameState.playerXWins:
            message = "Player X Wins!";
            classNames += " winning"; // Add winning class
            break;
        case GameState.playerOWins:
            message = "Player O Wins!";
            classNames += " winning"; // Add winning class
            break;
        case GameState.draw:
            message = "It's a Draw!";
            classNames += " draw"; // Add draw class
            break;
        default:
            message = "";
    }

    return (
        <div className={classNames}>
            {message && <h2>{message}</h2>}
        </div>
    );
}

export default GameOver;
