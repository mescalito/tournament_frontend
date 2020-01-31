import React from "react";
import Game from "./Game";

const GameList = ({ 
  games = [{
    id: 10,
    p1: 1,
    p2: 2,
    p1Name: 'Luna',
    p2Name: 'Siri',
    p1Score: 5,
    p2Score: 5,
    date: '1/31/2020'
    }] 
  }) => {
  return (
  <div>
    <h1>List of Games</h1>
    <ul className="game-list">
      {
        games && games.length
        ? games.map((game, index) => {
            return <Game key={`game-${game.id}`} game={game} />;
          })
        : "No games, yay!"
      }
    </ul>
  </div>
)};

export default GameList;
