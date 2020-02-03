import React from 'react'
import moment from 'moment'

const Game = ({ game }) => (
  <li>
    <span>
    Game {moment(game.date).subtract({'hours': 5}).toNow()}: {game.player1name}: {game.player1Score} vs. {game.player2name}: {game.player2Score}</span>
  </li>
);

export default Game;
