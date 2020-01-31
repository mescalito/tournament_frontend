import React from "react";
import { connect } from "react-redux";
import Game from "./Game";

const GameList = ({ games }) => {
    // console.log("++++")
    // console.log(games)
    // console.log("++++")
  return (
  <div>
    <h1>List of Gamesxxx</h1>
    <ul className="game-list">
      {
        games && games.length
        ? games.map((game, index) => {
            console.log(game)
            return <Game key={`game-${game.id}`} game={game} />;
          })
        : "No games, yay!"
      }
    </ul>
  </div>
)};

const mapStateToProps = state => {
  const { byIds, allIds } = state.todos || {};
  const todos =
    allIds && state.todos.allIds.length
      ? allIds.map(id => (byIds ? { ...byIds[id], id } : null))
      : null;

  const games = [{
    id: 10,
    p1Id: 1,
    p2Id: 2,
    p1Name: 'eeeeeeee',
    p2Name: 'Siri',
    p1Score: 5,
    p2Score: 5,
    date: '1/31/2020'
    }]
  console.log(".......")
  console.log(games)
  console.log(".......")

  console.log("=====")
  console.log(state.games.games)
  console.log("=====")

  return { todos, games:state.games.games };
};

export default connect(mapStateToProps)(GameList);
