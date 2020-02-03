import React from "react";
import { connect } from "react-redux";
import Game from "./Game";

const GameList = ({ games }) => {
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

const mapStateToProps = state => {
  return { games:state.games.games };
};

export default connect(mapStateToProps)(GameList);
